import React, { Fragment, useEffect } from 'react'
import { useState } from 'react'
import ReactPlayer from 'react-player'
import movieTrailer from 'movie-trailer'
import '../Styles/TrailerMovie.css'

function TrailerTrend({trendsTitle, toggle}) {
    const [video, setVideo] = useState("");
    const [videoURL, setVideoURL] = useState("");

    

    function handleSearch() {
        setVideo(trendsTitle)
        movieTrailer(video).then((res) => {
        setVideoURL(res);
        });
    }
    useEffect(() => {
        handleSearch()
    }, [videoURL])
  return (
    <Fragment>
        <div className='Container'>
        </div>
        <div className='player'>
        <h1 id={toggle ? 'TrailerMovie-name-dark' : 'TrailerMovie-name-light'}>{trendsTitle}</h1>
            <ReactPlayer url={videoURL} controls={true} width={'1400px'} height={'619px'} muted={false}/>
        </div>
    </Fragment>
  )
}

export default TrailerTrend
