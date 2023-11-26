import React, { Fragment, useContext, useEffect, useState } from 'react'
// import {AiFillPlayCircle} from 'react-icons/ai'
import { FaPlay } from "react-icons/fa";
import {AiOutlineClose} from 'react-icons/ai' 
import '../Styles/Videos.css'
import marvel from './marvel.png'
import axios from 'axios';
import { Container } from './Head';


function Trendings() {
  const {toggle} = useContext(Container)
    const [trendList, setTrendList] = useState([])
    const [trailer, setTrailer] = useState(true)
    const [trendTitle, setTrendTitle] = useState('')
    const Images = 'https://image.tmdb.org/t/p/w500'
    const Api = `https://api.themoviedb.org/3`
    const TrendsShown = '/trending/all/week'
    const Trends = async () => {
      const data = await axios.get(`${Api}${TrendsShown}`,{
        params: {
        api_key: '20ba8847d12768540aeda18f813b6351',
        // query: input
        }
      })
    

    const results = data.data.results
    setTrendList(results)
    }
    useEffect(()=>{
      setTimeout(() => {
        Trends()
      }, 100)
    },[])
    console.log(trendList)
    const TrendTitle = (trend) =>{
      setTrendTitle(trend.title)
      setTrailer(!trailer)
    }
  return (
    
    <>
      
      <div className="movies-container">
        {trendList.map((trend)=>{
            return(
               <Fragment>
                <div id={trailer ? 'container' : 'NoContainer'}>
                <FaPlay color='#fff' fontSize={20} id={trailer ? "playIcon" : 'hide'} onClick={() => TrendTitle(trend)}/>
                <img src={trend.poster_path ? `${Images}${trend.poster_path}` : marvel} onClick={() => TrendTitle(trend)}/>
                <div
              style={{
                display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
              }}
            >
            <h4>{trend.title}</h4>
            </div>
            </div>
            </Fragment>
)
        })}
        <AiOutlineClose id={trailer ? 'Nothing' : 'Exit1'} className={toggle ? 'DarkTheme' : 'LightThemeClose'} fontSize={55} color='#fff' cursor={'pointer'} onClick={() => setTrailer(true)} />
        </div>
      
      </>
  )
}

export default Trendings
