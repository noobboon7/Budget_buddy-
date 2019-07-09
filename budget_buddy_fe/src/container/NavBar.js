import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';

class NavBar extends Component {
  signOut = () => {
   localStorage.removeItem("token")
   // debugger
 }
  render() {
    const {username, avatar} = this.props.user
    return(
      <>
      <div className="ui menu">
      
        <Link to= "/" className="item">
          <h2>Home</h2>
        </Link>
        <Link to="/About" className="item">
        <h2>About</h2>
        </Link>
        <div className="right menu">
        <Link onClick= {this.signOut} to= "/SignIn" className="item">
          <h2>Log Out</h2>
        </Link>
        <Link to="/Profile" className="item">
        <img className="ui avatar image" src={avatar} alt={username}/>
        <span>{username}</span>
        </Link>
        </div>
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
