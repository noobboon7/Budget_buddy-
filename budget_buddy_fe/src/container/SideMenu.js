import React, {Component} from 'react';
import {connect} from 'react-redux';
import ItemForm from '../components/ItemForm';
import DreamItemCard from '../components/DreamItemCard';
import Popup from "reactjs-popup";
import { deleteItem } from '../actions/ItemAction';



class SideMenu extends Component {
  itemButton = (id, dispatch) => {
    // debugger
    console.log("item bnt clicked", id);
    dispatch(deleteItem())
  }
  render() {
    return(
      <div className="ui vertical menu ">
        <div className="PopupMenu">
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
          // console.log(item)
          return(
            <li key={item.id}>

            <DreamItemCard key={item.id} itemButton={this.itemButton} item={item}/>
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
