
import React, { Fragment, useContext, useEffect, useState } from 'react'
// import {AiFillPlayCircle} from 'react-icons/ai'
import { FaPlay } from "react-icons/fa";
import '../Styles/Videos.css'
import marvel from './marvel.png'
import Header from './Header';

// import {Container} from './Navigation'




function Movies() {


    // const {toggle} = useContext(Container)
    
    const [movieList, setMoviesList] = useState([])
    // const [trailer, setTrailer] = useState(true)
    // const [movieTitle, setMovieTitle] = useState('')
    const Images = 'https://image.tmdb.org/t/p/w500'
    const getMovie = ()=> {
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=20ba8847d12768540aeda18f813b6351")
        .then(res => res.json())
        .then(json =>setMoviesList(json.results))
    }
    useEffect(()=>{
        getMovie()
    },[])
    console.log(movieList)
  return (
    

    
    <Fragment>
      

      {/* <div className={toggle ? "mainBgColor" : 'secondaryBgColor'}> */}
      
      <div className="movies-container">
        {movieList.map((movie)=>{
            return(
               <Fragment>
                <div id='container'>
                    <FaPlay color='#fff' fontSize={20} border-color='white' id="playIcon"/>

            <img src={movie.poster_path ? `${Images}${movie.poster_path}` : marvel}/>
            <div>
            <div
              style={{
                display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
              }}
            >
            <h4 id={movie.title.length > 24 ? 'smaller-Text' : ''}>{movie.title}</h4>
            </div>
            </div>
            </div>
            </Fragment>
)
        })}
        </div>
        {/* </div> */}

      
      </Fragment>
  )
}

export default Movies


// const Container = styled.div`
// margin: 25px 0px 4px 15px;
// `;

// const Content = styled.div`
//   display: grid;
//   grid-gap: 25px;
//   gap: 25px;
//   grid-template-columns: repeat(4, minmax(0, 1fr));

//   @media (max-width: 768px) {
//     grid-template-columns: repeat(2, minmax(0, 1fr));
//   }
// `;

// const Wrap = styled.div`
//   padding-top: 56.25%;
//   border-radius: 10px;
//   box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
//   rgb(0 0 0 / 73%) 0px 16px 10px -10px;
//   cursor: pointer;
//   position: relative;
//   transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
//   border: 3px solid rgba(249, 249, 249, 0.1);

  
//   #playIcon{
//     position: absolute;
//     bottom: 10px;
//     left: 10px;
//     visibility: visible;
//     z-index: 100;
//     cursor: pointer;
//     border-color: #fff;
// }

// span{
//   color: white;
//   font-size: 20px;
//   letter-spacing: 1.42px;
//   position: absolute; 
//   margin: 0.5px 0px 6px 10px;
  
// }

// img {
//     inset: 0px;
//     display: block;
//     height: 100%;
//     object-fit: scale-down;
//     opacity: 1;
//     position: absolute;
//     transition: opacity 500ms ease-in-out 0s;
//     width: 100%;
//     z-index: 1;
//     top: 0;
    
//   }


//   &:hover {
//     box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
//       rgb(0 0 0 / 72%) 0px 30px 22px -10px;
//     transform: scale(1.05);
//     border-color: rgba(249, 249, 249, 0.8);

    
  
//   }

// `;