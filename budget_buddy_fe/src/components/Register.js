import React, { Component } from 'react';
import { connect } from 'react-redux';
import { persistUserToBackend } from '../actions/userActions';


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
    // const { dispatch } = this.props
    this.props.persistUserToBackend(newUser)
    // dispatch({type: "SAVE_USER_TO_STATE", payload:newUser})
  }

  render() {
    const {username, password, email, first_name, last_name,bio} = this.state
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <div className="ui large icon input">
          <label>
            First Name:
            <input type="text" name="first_name" value={first_name} onChange={this.handleChange}/>
          </label>
          </div>
          <div className="ui large icon input">
          <label>
            Last Name:
            <input type="text" name="last_name" value={last_name} onChange={this.handleChange}/>
          </label>
          </div>
          <div className="ui large icon input">
          <label>
          Email:
          <input type="text" name="email" value={email} onChange={this.handleChange}/>
          </label>
          </div>
          <div className="ui large icon input">
          <label>
            Username:
            <input type="text" name="username" value={username} onChange={this.handleChange}/>
          </label>
          </div>
          <div className="ui large icon input">
          <label>
            Password:
            <input type="password" name="password" value={password} onChange={this.handleChange}/>
          </label>
          </div>
          <div className="ui large icon input">
          <label>
            Bio:
            <input type="text" name="bio" value={bio} onChange={this.handleChange}/>
          </label>
          </div>
          <button className="ui button" type="submit">submit</button>

        </form>
      </div>
    );
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    persistUserToBackend: (userObj) => dispatch(persistUserToBackend(userObj)),
    // register: (newUser) => dispatch({type: "SAVE_USER_TO_STATE", payload:newUser})
  }
}
export default connect(null, mapDispatchToProps)(Register);
