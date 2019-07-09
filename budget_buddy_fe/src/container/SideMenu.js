import React, {Component} from 'react';
import {connect} from 'react-redux';
import ItemForm from '../components/ItemForm';
import Popup from "reactjs-popup";


class SideMenu extends Component {
  itemButton = (evt) => {
    console.log("item bnt clicked", evt.target.name);
  }
  render() {
    return(
      <div className="ui vertical menu ">
        <div>
        <Popup trigger={
          <button className="green circular ui icon button">
          <i className="plus icon"></i>
        Add Item
          </button>} position="right top">
          <ItemForm/>
        </Popup>

        </div>
        <ul>
        {this.props.items.map(item => {
          // console.log(item);
          return(
            <li>
              <img src={item.imgURL} alt={item.itemName} />
              <h4>{item.itemName}</h4>
              <h4>{item.targetGoal}</h4>
              <button onClick={this.itemButton}
                      name="delete"
                      className="ui red button">
                Delete
              </button>

            </li>
          )
        })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return{
    items: state.BudgetReducer.itemList
  }
}

export default connect(mapStateToProps)(SideMenu);
