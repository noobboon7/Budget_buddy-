import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';

class NavBar extends Component {
  render() {
    return(
      <Link to= "/">
        <h2>Home</h2>
      </Link>,
      <Link to = "/user">
      <img className="ui avatar image" src={this.props.user.avatar} alt={this.props.user.username}/>
      <span>{this.props.user.username}</span>
      </Link>
    )
  }
};
const mapStateToProps = (state) => {
  console.log(state);
  return{
    user: state.UserReducer
  }
}
export default withRouter(connect(mapStateToProps)(NavBar));
