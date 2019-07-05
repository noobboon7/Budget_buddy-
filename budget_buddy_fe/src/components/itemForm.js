import React from 'react';



export default class ItemForm extends React.Component {
  state={
    imgURL: "",
    itemName: "",
    targetGoal: 0
  }
  render() {
    return(
      <form className="ui form">
        <div class="field">
          <label>Image URL</label>
          <input type="url"/>
        </div>
        <div class="field">
          <label>Item Name</label>
          <input type="text"/>
        </div>
        <div class="field">
          <label>Price</label>
          <input type="number"/>
        </div>
          <input className="ui button" type="submit"/>
      </form>
    )
  }
};
