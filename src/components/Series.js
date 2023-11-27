import React, { Fragment, useContext, useEffect, useState } from 'react'
// import {AiFillPlayCircle} from 'react-icons/ai'
import { FaPlay } from "react-icons/fa";
import {AiOutlineClose} from 'react-icons/ai'
import '../Styles/Videos.css'
import marvel from './noimage.jpg'
import { Container } from './Head';
import axios from 'axios';
import TrailerSeries from '../Trailers/TrailerSeries';



function Series() {
  const {toggle, inputValue} = useContext(Container)
  const input = inputValue
    const [seriesList, setSeriesList] = useState([])
    const [trailer, setTrailer] = useState(true)
    const [title, setTitle] = useState('')
    const Images = 'https://image.tmdb.org/t/p/w500'
    // const TvShows = ()=> {
    //     fetch("https://api.themoviedb.org/3/discover/tv?api_key=20ba8847d12768540aeda18f813b6351")
    //     .then(res => res.json())
    //     .then(json =>setSeriesList(json.results))
    // }

    const Shown = input ? 'search' : 'discover'
    const Api = `https://api.themoviedb.org/3/${Shown}/tv`

    const TvShows = async () => {
      const data = await axios.get(Api,{
        params: {
        api_key: '20ba8847d12768540aeda18f813b6351',
        query: input
        }
      })
    

    const results = data.data.results
    setSeriesList(results)
    }
    useEffect(()=>{
      setTimeout(() =>{
        TvShows()
      }, 100)
    },[input])
    console.log(seriesList)
    const TvShowTitle = (shows) =>{
      setTitle(shows.name)
      setTrailer(!trailer)
    }
  return (
    
    <Fragment>
    
    
      <div className="movies-container">
        {seriesList.map((shows)=>{
            return(
               <Fragment>
                <div id={trailer ? 'container' : 'NoContainer'}>
                    <FaPlay color='#fff' fontSize={20} id={trailer ? "playIcon" : 'hide'} onClick={() => TvShowTitle(shows)}/>

            <img src={shows.poster_path ? `${Images}${shows.poster_path}` : marvel} onClick={() => TvShowTitle(shows)}/>
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
        {trailer ? console.log : <TrailerSeries seriesTitle={title} toggle={toggle}/>}
        <AiOutlineClose id={trailer ? 'Nothing' : 'Exit1'} className={toggle ? 'DarkTheme' : 'LightThemeClose'} fontSize={55} color='#fff' cursor={'pointer'} onClick={() => setTrailer(true)} />
        </div>
      
      </Fragment>
  )
}

export default Series
