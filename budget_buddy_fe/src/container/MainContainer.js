import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from './NavBar';
import SideMenu from './SideMenu';
import UserChart from '../components/UserChart';


class MainContainer extends Component {
  render() {
    return (
      <>
      <div id="main" className="ui fluid container">
        <NavBar/>
        <SideMenu/>
        <UserChart/>
      </div>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state);

  return{
    user: state.UserReducer
  }
}

export default connect(mapStateToProps)(MainContainer);
