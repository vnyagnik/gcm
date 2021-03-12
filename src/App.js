import React from 'react';
import './App.css';
import LandingPage from './LandingPage';
import Login from "./Login";
import Dashboard from "./Dashboard";
import { Route, BrowserRouter, Switch} from 'react-router-dom';
import NavBar from "./NavBar";

function App(){
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Switch>
          <Route exact path="/" component={LandingPage}/>
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/login" component={Login}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
