import React, { Fragment, useContext, useEffect, useState } from 'react'
// import {AiFillPlayCircle} from 'react-icons/ai'
import { FaPlay } from "react-icons/fa";
import '../Styles/Videos.css'
import marvel from './marvel.png'


function Series() {
    const [seriesList, setSeriesList] = useState([])
    const Images = 'https://image.tmdb.org/t/p/w500'
    const TvShows = ()=> {
        fetch("https://api.themoviedb.org/3/discover/tv?api_key=20ba8847d12768540aeda18f813b6351")
        .then(res => res.json())
        .then(json =>setSeriesList(json.results))
    }
    useEffect(()=>{
        TvShows()
    },[])
    console.log(seriesList)
  return (
    
    <>
    
      <div className="movies-container">
        {seriesList.map((shows)=>{
            return(
               <Fragment>
                <div id='container'>
                    <FaPlay color='#fff' fontSize={20} border-color='white' id="playIcon"/>

            <img src={shows.poster_path ? `${Images}${shows.poster_path}` : marvel}/>
            <div
              style={{
                display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
              }}
            >
            <h4 id={shows.name.length > 24 ? 'smaller-Text' : ''}>{shows.name}</h4>
            </div>
            </div>
            </Fragment>
)
        })}
        </div>
      
      </>
  )
}

export default Series
