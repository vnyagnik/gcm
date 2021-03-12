import React, {Component} from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import LandingPage from './LandingPage';
import Login from "./Login";
import Dashboard from "./Dashboard";
import { Route, BrowserRouter as Router } from 'react-router-dom';
import NavBar from './NavBar';

function App(){
  const [user,setUser] = useState(null);

    return (
        <Router>
          <div className="App">
            <NavBar user={user}/>
            <Route path="/" component={LandingPage} exact />
            <Route path="/dashboard" component={Dashboard} exact />
            <Route path="/login" component={() => <Login user={user}/>} exact/>
          </div>
        </Router>
      );
}

export default App;
