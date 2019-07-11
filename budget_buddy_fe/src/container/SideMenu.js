import React, {Component} from 'react';
import {connect} from 'react-redux';
import ItemForm from '../components/ItemForm';
import DreamItemCard from '../components/DreamItemCard';
import Popup from "reactjs-popup";
import { deleteItemFetch } from '../actions/ItemAction';



class SideMenu extends Component {
  itemButton = (id) => {
    // debugger
    console.log("item bnt clicked", id);
    this.props.deleteItemFetch(id)
  }
  render() {
    return(
      <div id="SideMenu" className="ui vertical menu ">
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
            <DreamItemCard wallet={this.props.wallet} key={item.id} itemButton={this.itemButton} items={item}/>
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
    items: state.BudgetReducer.itemList,
    wallet: state.UserReducer.amount
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteItemFetch: (id) => {dispatch(deleteItemFetch(id))}
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);
