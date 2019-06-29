import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';

class NavBar extends Component {
  render() {
    return(
      <Link to= "/">
      <h1>this is a NavBar</h1>
      </Link>
    )
  }
};
export default withRouter(NavBar);
