import React, {Component} from 'react';
import {connect} from 'react-redux';
import MainContainer from './container/MainContainer';
import NavBar from './container/NavBar';
import SignIn from './components/SignIn';
import Register from './components/Register';
import { Route, Redirect, Switch } from 'react-router-dom'
import './App.css';
import  'semantic-ui-css/semantic.min.css'

class App extends Component {
  render(){
    // console.log(this.props);
    let {loggedIn} = this.props.user
    // if (this.state.loading) {
    //   return <div class="ui active centered inline loader">
    //   <h1>LOADING</h1>
    //   </div>
    // }

    return (
      <>
      <Switch>
      {loggedIn ?
        <div className= "Body">
        <NavBar/>
        <hr/>
        <MainContainer/>
        </div>
        :
        <Route path="/SignIn">
        <SignIn/>
        </Route>
      }
        <Route path="/Register" render={() => <Register/>}/>

        <Route path="/" render={() => <Redirect to="/SignIn"/>}/>
       </Switch>
       </>
    )
  }
}
const mapStateToProps = (state) => {
  // console.log(state);
  return {
    user: state.UserReducer
  }
}
export default connect(mapStateToProps)(App);
