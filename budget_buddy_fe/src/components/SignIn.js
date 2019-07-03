import React, { Component } from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { userLoginFetch } from '../actions/userActions';

class SignIn extends Component {
  state={
    username:'',
    password:''
  }

  handleChange = event => {
  this.setState({
    [event.target.name]: event.target.value
  });
}

handleSubmit = event => {
  event.preventDefault()
  let user = this.state
  this.props.userLoginFetch(user)
}

  render() {
    // console.log(this.props);
    return(
      <div className="ui form container segment">
        <form onSubmit={this.handleSubmit}>
        <h2>Sign In</h2>
        <div className="field">
          <label>Username</label>
          <div className="ui left icon input">
            <input
            name='username'
            placeholder='Username'
            value={this.state.username}
            onChange={this.handleChange}
            /><br/>
           <i className="user icon"></i>
          </div>
        </div>
        <div className="field">
          <label>Password</label>
          <div className="ui left icon input">
            <input
            type='password'
            name='password'
            placeholder='Password'
            value={this.state.password}
            onChange={this.handleChange}
            /><br/>
           <i className="lock icon"></i>
          </div>
          <input className="ui blue submit button" type='submit'/>
        </div>
        </form>
        <h5>Not a member yet? <NavLink to="/Register"> Register </NavLink></h5>
      </div>
    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    userLoginFetch: (user) => dispatch(userLoginFetch(user))
  }
}

export default withRouter(connect(null,mapDispatchToProps)(SignIn))
