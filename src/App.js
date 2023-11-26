import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import './App.css';
import Detail from './components/Detail';
import Login from './components/Login';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Search from './components/Search';
import Movies from './components/Movies';
import Series from './components/Series';
import Trendings from './components/Trendings';
import Navig from './components/Navig';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
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
          <Route path='/Search' component={Search} />
          <Route path='/Movies' component={Movies} />
          <Route path='/Series' component={Series} />
          <Route path='/Trendings' component={Trendings} />
          <Route path='/Navig' component={Navig} />
          <Route path='/nav' component={Navigation} />
        </Switch>
      </Router>




      
      
      
    </div>
  );
}

export default App;
