import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from './NavBar';
import SideMenu from './SideMenu';
import UserChart from '../components/UserChart';
import Popup from "reactjs-popup";
import WalletForm from '../components/WalletForm';



class MainContainer extends Component {
  render() {
    return (
      <>
      <NavBar/>
      <div id="main" className="ui fluid container" >
        <SideMenu/>
        <div id="chart" className="ui container" >
        <UserChart/>
        </div>
          <Popup trigger={
            <span>
            <button className="ui green button"><i className="plus icon">
            </i>Add to Wallet</button>
            </span>}
             position="left top">
             <WalletForm/>
            </Popup>
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
