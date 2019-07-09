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
  this.props.history.push('/')
}

  render() {
    console.log(this.props);
    return(
      
      <div className="SignIn">
        <div  className="ui center container">
          <div className="ui middle aligned center aligned grid">
            <div className="column">
            <div classname="ui mini image">
            <img src="../icon.png" alt="logo" />
            </div>
            <h2 className="ui teal image header">
            Sign in
            </h2>
                <form className="ui large form" onSubmit={this.handleSubmit}>
                  <div className="ui stacked segment">
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
                      />
                      <br/>
                      <i className="lock icon"></i>
                    </div>
                    </div>
                    <input className="ui fluid large teal submit button" type='submit'/>
                  </div>
                </form>
              <div className="ui message">
                <h5>Not a member yet? <NavLink to="/Register"> Register </NavLink></h5>
              </div>
            </div>
          </div>
        </div>
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
