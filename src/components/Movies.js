
import React, { Fragment, useContext, useEffect, useState } from 'react'
// import {AiFillPlayCircle} from 'react-icons/ai'
import { FaPlay } from "react-icons/fa";
import {AiOutlineClose} from 'react-icons/ai'
import '../Styles/Videos.css'
import marvel from './noimage.jpg'
// import Header from './Header';
import axios from 'axios';

import { Container } from './Head';

import TrailerMovies from '../Trailers/TrailerMovies';
// import Navigation from './Navigation';

// import {Container} from './Navigation'




function Movies() {

    const {toggle, inputValue} = useContext(Container)
    const input = inputValue
    
    const [movieList, setMoviesList] = useState([])
    const [trailer, setTrailer] = useState(true)
    const [movieTitle, setMovieTitle] = useState('')
    const Images = 'https://image.tmdb.org/t/p/w500'
    const Shown = input ? 'search' : 'discover'
    const Api = `https://api.themoviedb.org/3/${Shown}/movie`

    const getMovie = async () => {
      const data = await axios.get(Api,{
        params: {
        api_key: '20ba8847d12768540aeda18f813b6351',
        query: input
        }
      })
    const results = data.data.results
    setMoviesList(results)
    }
    useEffect(()=>{
      setTimeout(() =>{
        getMovie()
      }, 100)
    },[input])
    const MoviesTitle = (movie) => {
      setMovieTitle(movie.title)
      setTrailer(!trailer)
    }
  return (
    <Fragment>
      <div className={toggle ? "mainBgColor" : 'secondaryBgColor'}>
      <div className="movies-container">
        {movieList.map((movie)=>{
            return(
               <Fragment>
                <div id={trailer ? 'container' : 'NoContainer'}>
                    <FaPlay color='#fff' fontSize={20} border-color='white' id={trailer ? "playIcon" : 'hide'} onClick={() => MoviesTitle(movie)}/>

            <img src={movie.poster_path ? `${Images}${movie.poster_path}` : marvel} onClick={() => MoviesTitle(movie)}/>
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
        {trailer ? console.log : <TrailerMovies moviesTitle={movieTitle} toggle={toggle}/>}
        <AiOutlineClose id={trailer ? 'Nothing' : 'Exit1'} className={toggle ? 'DarkTheme' : 'LightThemeClose'} fontSize={55} color='#fff' cursor={'pointer'} onClick={() => setTrailer(true)} />
        </div>
        </div>

        
      </Fragment>
  )
}

export default Movies


