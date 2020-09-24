import React from 'react';
import {NavLink} from 'react-router-dom';
import Routes from './Routes';
import './App.css';

const App = () => {
  return(
    <div>
      <div className="navbar">
        <NavLink className="link" activeClassName="active" to="/">
          Log In
        </NavLink>
        <NavLink className="link" to="/pokemon">
          Choose Pokemon
        </NavLink>
      </div>
      <Routes />
    </div>
  )
}

export default App;
