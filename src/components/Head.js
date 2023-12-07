import styled from "styled-components";
import { Link } from "react-router-dom";
import {HiSearch} from 'react-icons/hi'
import '../Styles/HeadStyle.css'
import React, { Fragment, useState } from "react";
import {BrowserRouter as Router, Switch, Route, NavLink} from "react-router-dom";
import Movies from "./Movies";
import Series from "./Series";
import Home from "./Home";
import Trendings from "./Trendings";
import Pricing from "./Pricing";

export const Container = React.createContext()

function Head() {
    const [toggle, setToggle] = useState(true)
    const [inputValue, setInputValue] = useState('')
  return (
    <Container.Provider value ={{toggle, inputValue}}>
    <Fragment>
    <Nav>
      <Logo src="/images/logo.svg" />
        <>
          <NavMenu>
          <Link to="/Home">
              <img src="/images/home-icon.svg" />
              <span>HOME</span>
            </Link>
            
            {/* <Link>
              <img src="/images/watchlist-icon.svg" />
              <span>WATCHLIST</span>
            </Link> */}
            
            <Link
              to="/Movies"
              // onClick={closeMobileMenu}
            >
              <img src="/images/movie-icon.svg" />
              <span>MOVIES</span>
            </Link>
            <Link to="/Series">
              <img src="/images/series-icon.svg" />
              <span>SERIES</span>
            </Link>
            <Link to="/Trendings">
            <img src="/images/original-icon.svg" />
              <span>TRENDING</span>
            </Link>
            <Link to="/Pricing">
            <img src="/images/original-icon.svg" />
              <span>SUBSCRIPTION</span>
            </Link>
          </NavMenu>

          <div className="input-group">
         <input type="text" placeholder='Search Whatever you want' onChange={(e) => setInputValue(e.target.value)}/>
         <HiSearch fontSize={21} color="green" id='search' />
         <div id="Color-switcher" onClick={() => setToggle(!toggle)}>
           <div id={toggle ? 'Color-switcher-mover' : 'Color-switcher-moved'}></div>
         </div>
         </div>
          
        </>
      
    </Nav>
    <Router>
         <Switch>
         <Route path='/Home' component={Home} />
         <Route path='/Movies' component={Movies} />
         <Route path='/Trendings' component={Trendings} />
         <Route path='/Series' component={Series} />
         <Route path='/Pricing' component={Pricing} />
         </Switch>
       </Router>
    </Fragment>
    </Container.Provider>
    
  );
}

export default Head

const Nav = styled.nav`
  // position: sticky;
  // top: 0;
  // z-index: 100;
  // height: 70px;
  // background: #090b13;
  // display: flex;
  // align-items: center;
  // padding: 0 36px;
  // overflow-x: hidden;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  
  z-index: 3;
  height: 70px;
  
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  letter-spacing: 16px;
  
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
    color: white;
    text-decoration: none;

    img {
      height: 20px;
    }
    span {
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
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
    }
    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
    
  }
`;

