import React, { Component } from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';

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
  let {dispatch} = this.props
  dispatch({type: "LOGIN_USER", payload:this.state})
}

  render() {
    // console.log(this.props);
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
        <h2>Sign In</h2>
        <label>Username</label>
        <input
         name='username'
         placeholder='Username'
         value={this.state.username}
         onChange={this.handleChange}
         /><br/>

       <label>Password</label>
       <input
         type='password'
         name='password'
         placeholder='Password'
         value={this.state.password}
         onChange={this.handleChange}
         /><br/>

         <input type='submit'/>

        </form>
        <h5>Not a member yet? <NavLink to="/Register"> Register </NavLink></h5>
      </div>
    )
  }
}

//
// function mapDispatchToProps(state) {a
//     return {username: state.username}
// }

export default withRouter(connect(null)(SignIn))
