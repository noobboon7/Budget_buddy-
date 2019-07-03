import React, {Component} from 'react';
import {connect} from 'react-redux';
import MainContainer from './container/MainContainer';
// import NavBar from './container/NavBar';
import SignIn from './components/SignIn';
import Profile from './components/ProfilePage';
import Register from './components/Register';
import {  Route, Redirect, Switch } from 'react-router-dom'
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
      {
        loggedIn?
        <Redirect to="/"/>
        :
        <Redirect to="/SignIn"/>
      }
      <Switch>
        <Route path="/Register" render={(routerProps) => <Register/>}/>
        <Route path="/SignIn" render={(routerProps) => <SignIn/>}/>
        <Route exact path="/Profile" render={(routerProps) => <Profile/>}/>
        <Route exact path="/" render={(routerProps) => <MainContainer/>}/>
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
export default connect(mapStateToProps)(App)
