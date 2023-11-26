import React, { Fragment, useContext, useEffect, useState } from 'react'
// import {AiFillPlayCircle} from 'react-icons/ai'
import { FaPlay } from "react-icons/fa";
import '../Styles/Videos.css'
import marvel from './marvel.png'


function Trendings() {
    const [movieList, setMoviesList] = useState([])
    const Images = 'https://image.tmdb.org/t/p/w500'
    const getMovie = ()=> {
        fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=20ba8847d12768540aeda18f813b6351")
        .then(res => res.json())
        .then(json =>setMoviesList(json.results))
    }
    useEffect(()=>{
        getMovie()
    },[])
    console.log(movieList)
  return (
    
    <>
   
      
      <div className="movies-container">
        {movieList.map((movie)=>{
            return(
               <Fragment>
                <div id='container'>
                    <FaPlay color='#fff' fontSize={20} border-color='white' id="playIcon"/>

            <img src={movie.poster_path ? `${Images}${movie.poster_path}` : marvel}/>
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
            </Fragment>
)
        })}
        </div>
      
      </>
  )
}

export default Trendings
