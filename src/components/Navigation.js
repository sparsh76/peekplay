// import React, { Fragment } from 'react'
// import { useState } from 'react'
// import {HiSearch} from 'react-icons/hi'
// import '../Styles/Navigation.css'
// import {BrowserRouter as Router, Switch, Route, NavLink} from "react-router-dom";
// import Movies from './Movies';
// import Home from './Home';
// import Trendings from './Trendings';
// import Series from './Series';
// import Detail from './Detail';
// import { Link } from "react-router-dom";
// // import {Routes, Route} from 'react-router-dom'

// export const Container = React.createContext()

// function Navigation() {
//   const [toggle, setToggle] = useState(true)
//   return (
//     <Container.Provider value={toggle}>
//     <Fragment>
//       <nav className={toggle ? '' : 'navBarColor'}>
//         <div className='nav-options'>
//         <h1 id={toggle ? '' : 'heading'}>PEEKPLAY</h1>
        
//         <Link to="/Home">
//         <span id={toggle ? 'Movies' : 'MoviesLight'}>HOME</span>
//         </Link>
//         <NavLink to="/Movies">
//         <span id={toggle ? 'Movies' : 'MoviesLight'}>MOVIES</span>
//         </NavLink>
//         <NavLink to="Trendings">
//         <span id={toggle ? 'Movies' : 'MoviesLight'}>TRENDINGS</span>
//         </NavLink>
//         <NavLink to="/Series">
//         <span id={toggle ? 'Movies' : 'MoviesLight'}>SERIES</span>
//         </NavLink>
//         </div>
//         <div className="input-group">
//         <input type="text" placeholder='search Whatever you want' />
//         <HiSearch fontSize={21} color="green" id='search' />
//         <div id="Color-switcher" onClick={() => setToggle(!toggle)}>
//           <div id={toggle ? 'Color-switcher-mover' : 'Color-switcher-moved'}></div>
//         </div>
//         </div>
//       </nav>
//       <Router>
//         <Switch>
//         {/* <Route path='/Home' component={Home} /> */}
//         <Route path='/Movies' component={Movies} />
//         <Route path='/Trendings' component={Trendings} />
//         {/* <Route path='/Series' component={Series} /> */}
//         {/* <Route path='/Detail/:id' component={Detail} /> */}
//         </Switch>
//       </Router>
//     </Fragment>
//     </Container.Provider>
//   )
// }

// export default Navigation
