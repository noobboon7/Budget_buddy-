import React, { Component } from 'react';
import { addToUserWallet } from '../actions/userActions';
import { connect } from 'react-redux';


class WalletForm extends Component {
  state={
    amount: 0
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }
  handleSubmit = (evt) => {
    evt.preventDefault()
    // console.log(addItem);
    this.props.addToUserWallet(this.state)

  }
  render() {
    return(
      <form onSubmit={this.handleSubmit} className="ui form">
      <div className="ui form">
        <div className="inline fields">
          <label>Add Balance</label>
          <div className="field">
            <input onChange={this.handleChange} name="amount" value={this.state.amount} type="number" placeholder="$$$"/>
          </div>
        </div>
      </div>
      <input className="ui button" type="submit"/>
      </form>
    )
  }
};

const mapDispatchToProps = (dispatch) => {
  return{
    addToUserWallet: (amount) => dispatch(addToUserWallet(amount))
  }
}

export default connect(null, mapDispatchToProps)(WalletForm);
