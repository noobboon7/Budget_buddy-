import React, { Component }from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';



class Profile extends Component {
  render() {
    console.log(this.props);
    const {firstName, lastName, username, avatar, bio } = this.props.user
    return(
      <>
      <Link to="/">
      <button class="ui right floated button"><h3>Back to Home</h3></button>
      </Link>
      <div>
      <img className="ui small circular image" src={avatar} alt={username} />
      <h1>o{username}</h1>
      <h3>Bio: {bio}</h3>
      </div>
      <hr/>
      <div>
      <h3>First Name: {firstName}</h3>
      <h3>Last Name: {lastName}</h3>
      </div>
      </>
    )

  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return{
    user: state.UserReducer
  }
}

export default connect(mapStateToProps)(Profile)
