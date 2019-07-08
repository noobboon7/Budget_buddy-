import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from './NavBar';
import SideMenu from './SideMenu';



class MainContainer extends Component {
  render() {
    return (
      <>
      <div className="ui fluid container">
        <NavBar/>
        <SideMenu/>
      </div>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);

  return{
    user: state.UserReducer
  }
}

export default connect(mapStateToProps)(MainContainer);
