import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from './NavBar';

class MainContainer extends Component {
  render() {
    return (
      <>
      <div className="ui fluid container">
        <div className="ui menu">
          <NavBar/>
        </div>
        <div className="ui vertical menu">
          <div>
            <button className=" green circular ui icon button"><i className="plus icon"></i> Add Item</button>
          </div>
          <div className= "item">
            <h3>Budget item</h3>
          </div>
          <div className= "item">
            <h3>Budget item</h3>
          </div>
        </div>
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
