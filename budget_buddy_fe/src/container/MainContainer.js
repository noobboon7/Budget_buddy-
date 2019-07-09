import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from './NavBar';
import SideMenu from './SideMenu';
import Chart from '../components/Chart';


class MainContainer extends Component {
  render() {
    return (
      <>
      <div className="ui fluid container">
        <NavBar/>
        <SideMenu/>
        <Chart/>
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
