// import  'semantic-ui-css/semantic.min.css'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, Switch } from 'react-router-dom'
import MainContainer from './container/MainContainer';
import SignIn from './components/SignIn';
import Profile from './components/ProfilePage';
import Register from './components/Register';
import About from './components/About';
import { getProfileFetch } from './actions/userActions';
import { getItemFetch } from './actions/ItemAction';


class App extends Component {
  componentDidMount() {
    // debugger
    this.props.getProfileFetch()
    this.props.getItemFetch()
  }
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
        <Route path="/Register" render={(routerProps) => <Register {...routerProps}/>}/>
        <Route path="/SignIn" render={(routerProps) => <SignIn/>}/>
        <Route exact path="/Profile" render={(routerProps) => <Profile/>}/>
        <Route exact path="/About" render={(routerProps) => <About/>}/>
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

const mapDispatchToProps = (dispatch) => ({
    getProfileFetch: () => dispatch(getProfileFetch()),
    getItemFetch: () => dispatch(getItemFetch())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
