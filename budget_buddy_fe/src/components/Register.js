import React, { Component } from 'react';
import { connect } from 'react-redux';


class Register extends Component {

  state = {
    firstName: "",
    lastName: "",
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
    const { dispatch } = this.props
    dispatch({type: "SAVE_USER_TO_STATE", payload:newUser})
  }

  render() {
    const {username, password, email, firstName, lastName,bio} = this.state
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <div className="ui large icon input">
          <label>
            First Name:
            <input type="text" name="firstName" value={firstName} onChange={this.handleChange}/>
          </label>
          </div>
          <div className="ui large icon input">
          <label>
            Last Name:
            <input type="text" name="lastName" value={lastName} onChange={this.handleChange}/>
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
            Email:
            <input type="text" name="email" value={email} onChange={this.handleChange}/>
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

// const mapDispatchToProps = (dispatch) => {
//   return {
//     register: (newUser) => dispatch({type: "SAVE_USER_TO_STATE", payload:newUser})
//   }
// }
export default connect(null)(Register);
