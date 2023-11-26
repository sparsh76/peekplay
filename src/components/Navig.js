// import React, { Fragment, useState } from 'react'
// import {Routes, NavLink, Route} from "react-router-dom";
// import {HiSearch} from 'react-icons/hi'
// import Home from './Home'
// import Movies from './Movies'
// import Trendings from './Trendings'
// import Series from './Series'

// import styled from "styled-components";
// import { createContext } from "react";

// import {BrowserRouter as Router, Switch} from "react-router-dom";


// export const Container = React.createContext()

// function Navig() {
//     const[toggle, setToggle] = useState(true)
//     console.log(toggle)
//   return (

//     <Container.Provider value={toggle}>
    
//         <Fragment>
//             <nav className={toggle ? '' : 'navBarColor'}>
//                 <div className='nav-options'>
//                 <Logo src="/images/logo.svg" />
//                     <NavLink to="/Home">
//                     <img src="/images/home-icon.svg" height="20px" />
//                         <a id={toggle ? 'Movies' : 'MoviesLight'}>HOME</a>
                        
//                     </NavLink>
//                     <NavLink to="/Movies">
//                     <img src="/images/movie-icon.svg" height="20px" />
//                         <a id={toggle ? 'Movies' : 'MoviesLight'}>MOVIES</a>
                        
//                     </NavLink>
//                     <NavLink to="/Trendings">
//                     <img src="/images/original-icon.svg" height="20px" />
//                         <a id={toggle ? 'Movies' : 'MoviesLight'}>TRENDINGS</a>
                        
//                     </NavLink>
//                     <NavLink to="/Series">
//                     <img src="/images/series-icon.svg" height="20px" />
//                         <a id={toggle ? 'Movies' : 'MoviesLight'}>SERIES</a>
                        
//                     </NavLink>
//                 </div>
//                 <div className="input-group">
//                     <input type="text" placeholder='search whatever you want' />
//                     <HiSearch fontSize={21} color="green" id='search' />
//                     <div id="color-switcher" onClick={() => setToggle(!toggle)}>
//                         <div id={toggle ? 'color-switcher-mover' : 'color-switcher-moved'}></div>
//                     </div>
//                 </div>
//             </nav>
//             <Router>
//                 <switch>
//                 <Route path='Home' element={<Home />}/>
//                 <Route path='Movies' element={<Movies />}/>
//                 <Route path='Trendings' element={<Trendings />}/>
//                 <Route path='Series' element={<Series />}/>
//                 </switch>
//             </Router>
//         </Fragment>
//         </Container.Provider>
    
//   )
// }





// export default Navig

// const Logo = styled.img`
//   width: 80px;
// `;