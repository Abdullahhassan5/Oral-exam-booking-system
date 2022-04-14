import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './login'

import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.css"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component
{
  render()
  {
    return(
      <Router>
      
        <Link to ='./login' > this is link</Link>   
      <Switch>

        <Route path="/login" component={Login} />
        </Switch>    
        
        </Router>       
      

    )
  }
}

export default App;
