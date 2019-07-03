import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';

class NavBar extends Component {
  render() {
    const {username, avatar} = this.props.user
    return(
      <>
      <Link to= "/" className="item">
        <h2>Home</h2>
      </Link>
      <Link className="item">
      <h2>Budget</h2>
      </Link>
      <div className="right menu">
      <Link to= "/SignIn" className="item">
        <h2>Log Out</h2>
      </Link>
      <Link to="/Profile" className="item">
      <img className="ui avatar image" src={avatar} alt={username}/>
      <span>{username}</span>
      </Link>
      </div>
      </>
    )
  }
};
const mapStateToProps = (state) => {
  return{
    user: state.UserReducer
  }
}
export default withRouter(connect(mapStateToProps)(NavBar));
