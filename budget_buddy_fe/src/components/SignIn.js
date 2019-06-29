import React, { Component } from 'react';
// import {  } from '';
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
  this.props.userPostFetch(this.state)
}

  render() {
    console.log(this.props);
    return(
      <div>
        <form>
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
      </div>
    )
  }
}


function mapDispatchToProps(state) {
    return {username: state.username}
}

export default connect(null, mapDispatchToProps)(SignIn);
