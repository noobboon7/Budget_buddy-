import React, {Component} from 'react';
import MainContainer from './container/MainContainer';
import NavBar from './container/NavBar';
import SignIn from './components/SignIn';
// Have to set up routes
// import { Route, Switch, Redirect } from 'react-router-dom'
import './App.css';

class App extends Component {
  state = {
    loggedIn: false,
    loading: false
  }
  render(){
    // if (this.state.loading) {
    //   return <div class="ui active centered inline loader">
    //   <h1>LOADING</h1>
    //   </div>
    // }

    return (
      <>
      {this.state.loggedIn ?
        <div className= "Body">
        <NavBar/>
        <hr/>
        <MainContainer/>
        </div>
        :
        <SignIn/>
      }
      </>
    )
  }
}

export default App;
