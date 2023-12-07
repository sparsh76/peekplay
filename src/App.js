import React from 'react';
// import Header from './components/Header';
import Home from './components/Home';
import './App.css';
import Detail from './components/Detail';
import Login from './components/Login';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Search from './components/Search';
import Movies from './components/Movies';
import Series from './components/Series';
import Trendings from './components/Trendings';
import Head from './components/Head';
import Navigation from './components/Navigation';


function App() {
  return (
    <div className="App">
      <Router>
        <Head />
      {/* <Header /> */}
        <Switch>
        <Route path="/home">
            <Home />
          </Route>
        
        <Route exact path="/login">
            <Login />
          </Route>
          
          

          {/* <Route path="/Detail/:id">
          <Detail />
          </Route> */}
          <Route path='/Detail/:id' component={Detail} />
          {/* <Route path='/Movies' component={Movies} /> */}
          {/* <Route path='/Series' component={Series} /> */}
          {/* <Route path='/Trendings' component={Trendings} /> */}
          <Route path='/Head' component={Head} />
          {/* <Route path='/Navigation' component={Navigation} /> */}
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
