import React, { Component } from 'react';
import { connect } from 'react-redux';

class MainContainer extends Component {
  render() {
    return (
      <div>
      <h1> user:{this.props.user.firstName} </h1>
      </div>
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
