import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from './NavBar';
import SideMenu from './SideMenu';
import ItemForm from '../components/itemForm';


class MainContainer extends Component {
  render() {
    return (
      <>
      <div className="ui fluid container">
        <NavBar/>
        <SideMenu/>
        <ItemForm/>

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
