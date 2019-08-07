import React, {Component} from 'react';
import { connect } from 'react-redux';
import Expense from '../components/Expense';

class ExpenseReport extends Component {
  render() {
    return(
      <table className="ui celled table">
        <thead>
          <tr>
            <th>Type</th>
            <th>Description</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
        <Expense/>
        </tbody>
      </table>
    )
  }
}

export default connect(null)(ExpenseReport);
