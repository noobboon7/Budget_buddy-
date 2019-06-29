import React from 'react';
import MainContainer from './container/MainContainer';
import NavBar from './container/NavBar';
// Have to set up routes 
// import { Route, Switch, Redirect } from 'react-router-dom'
// import './App.css';

function App() {
  return (
    <div className= "Body">
    <NavBar/>
    <hr/>
    <MainContainer/>
    </div>
  );
}

export default App;
