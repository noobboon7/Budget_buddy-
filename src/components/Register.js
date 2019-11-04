import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUserToBackend } from '../actions/userActions';
import CarouselReg from './Carousel';

class Register extends Component {

  state = {
    first_name: "",
    last_name: "",
    username: "",
    password: "",
    email: "",
    bio: "",
    amount: 5,
    avatar:"../avatar.png"
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const newUser = this.state
    this.props.addUserToBackend(newUser)
    this.props.history.push("/")
    // dispatch({type: "SAVE_USER_TO_STATE", payload:newUser})
  }

  render() {
    const {username, password, email, first_name, last_name,bio} = this.state
    return (
      <>
      <div className="RegisterPage">
      <CarouselReg className="Carousel"/>
        <div className = "ui container ">
          <form className="ui form" onSubmit={this.handleSubmit}>
          <br/>
          <h4 id="registerform" className="ui dividing header">Register</h4>

          <div id="registerform" className=" two fields">
            <div  className="field">
              <label id="registerform">First Name:</label>
              <div className="ui left icon input">
                <input type="text" name="first_name" value={first_name} onChange={this.handleChange}/>
                <i className="keyboard outline icon"></i>
              </div>
            </div>
            <div id="registerform" className="field">
              <label id="registerform">Last Name:</label>
              <div className="ui left icon input">
                <input type="text" name="last_name" value={last_name} onChange={this.handleChange}/>
                <i className="keyboard outline icon"></i>
              </div>
            </div>
          </div>
            <div className="field">
              <label id="registerform">Email:</label>
              <div className="ui left icon input">
              <input type="email" name="email" value={email} onChange={this.handleChange}/>
              <i className="envelope icon"></i>
              </div>
            </div>
            <div className="field">
              <label id="registerform">Username:</label>
              <div className="ui left icon input">
                <input type="text" name="username" value={username} onChange={this.handleChange}/>
                <i className="user icon"></i>
              </div>
            </div>
            <div className="field">
              <label id="registerform">Password:</label>
              <div className="ui left icon input">
                <input type="password" name="password" value={password} onChange={this.handleChange}/>
                <i className="lock icon"></i>
              </div>
            </div>
            <div  className="field">
              <label id="registerform">Bio:</label>
              <div className="ui left icon input">
                <input type="text" name="bio" value={bio} onChange={this.handleChange}/>
                <i className="keyboard outline icon"></i>
              </div>
            </div>
            <button className="ui blue submit button" type="submit">submit</button>

          </form>
        </div>
      </div>
      </>
    );
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    addUserToBackend: (userObj) => dispatch(addUserToBackend(userObj)),
    // register: (newUser) => dispatch({type: "SAVE_USER_TO_STATE", payload:newUser})
  }
}
export default connect(null, mapDispatchToProps)(Register);
