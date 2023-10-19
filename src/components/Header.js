import React, { useEffect } from 'react';
import styled from 'styled-components'
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { auth, provider } from "../firebase";
import {
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails,
  setSignOutState
} from "../features/user/userSlice";


function Header() {
    const dispatch = useDispatch();
    const history = useHistory();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if(user) {
                setUser(user)
                history.push('/home')
            }
        })
    }, [userName]);

    const handleAuth = () =>{
        if(!userName){
        auth
            .signInWithPopup(provider)
            .then((result) => {
                setUser(result.user);
            })
            .catch((error) => {
                alert(error.message);
            });


    } else if(userName){
        auth.signOut().then(() => {
            dispatch(setSignOutState());
            history.push("/login");
        })
        .catch((err) => alert(err.message));
    }
};

    const setUser = (user) => {
        dispatch(
          setUserLoginDetails({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
      };

  return (
    <Nav>
        <Logo src="/images/logo.svg" />

        {!userName ? (
        <Login onClick={handleAuth}>Login</Login>
      ) : (
        <>
            
        <NavMenu>
            <a>
                <img src="/images/home-icon.svg" />
                <span>HOME</span>
            </a>
            <a>
                <img src="/images/search-icon.svg" />
                <span>SEARCH</span>
            </a>
            <a>
                <img src="/images/watchlist-icon.svg" />
                <span>WATCHLIST</span>
            </a>
            <a>
                <img src="/images/original-icon.svg" />
                <span>ORIGINAL</span>
            </a>
            <a>
                <img src="/images/movie-icon.svg" />
                <span>MOVIES</span>
            </a>
            <a>
                <img src="/images/series-icon.svg" />
                <span>SERIES</span>
            </a>
        </NavMenu>
        <SignOut>
            <UserImge src={userPhoto} alt={userName} />
            <DropDown>
                <span onClick={handleAuth}>Sign out</span>
            </DropDown>
        </SignOut>
        </>
)}
    </Nav>
  );
};

const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  margin-left: 25px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease 0s;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;

const UserImge = styled.div`
    height: 100%;
`
const DropDown = styled.div`
//   position: absolute;
  top: 0px;
  right: 0px;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100px;
//   opacity: 0;
`

const SignOut = styled.a`
//   position: relative

  cursor: pointer;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease 0s;

  &:hover {
    background-color: #f9f9f9;
    color: #FFFFFF;
    
    border-color: transparent;
  }

`

export default Header;



const Nav = styled.nav`
    
position: sticky;
top: 0;
z-index: 100;

    height: 70px;
    background: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
    overflow-x: hidden;

    

`

const Logo= styled.img`
    width: 80px;
`

const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 25px;
    align-items: center;
    a{
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;
        
        img{
            height: 20px;
        }
        span{
            color: white;
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;

            &:after {
                content: "";
                height: 2px;
                background: white;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
                transform: scaleX(0);
            }
        }
        &:hover {
            span:after{
                transform:scaleX(1);
                opacity: 1;
            }
        }
    }
`


const UserImg = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50px;
    cusror: pointer;
`