import React, {Component} from 'react';
import {connect} from 'react-redux';
import ItemForm from '../components/ItemForm';
import Popup from "reactjs-popup";
import { Progress, Segment } from 'semantic-ui-react';


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
            <li key={item.id}>
              <img className="ui small circular image" src={item.img_url} alt={item.item} />
              <h4>{item.item}</h4>
              <Segment inverted>
                <Progress percent={32} inverted color='green' size="small">
                <h4>{item.targetgoal}</h4>
                </Progress>
              </Segment>
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
