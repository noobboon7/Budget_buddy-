import React from 'react';



export default class ItemForm extends React.Component {
  state={
    imgURL: "",
    itemName: "",
    targetGoal: 0
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }
  render() {
    const {imgURL, itemName, targetGoal} = this.state
    return(
      <form className="ui form">
        <div class="field">
          <label>Image URL</label>
          <input onChange={this.handleChange} name="imgURL"  value={imgURL} type="url" placeholder="https://www.wikihow.com/aid2627945-v4-900px-2627945-1-1.jpg"/>
        </div>
        <div class="field">
          <label>Item Name</label>
          <input onChange={this.handleChange} name="itemName" value={itemName} type="text" placeholder="Boosted Board"/>
        </div>
        <div class="field">
          <label>Price</label>
          <input onChange={this.handleChange} name="targetGoal" value={targetGoal} type="number" placeholder="$$$"/>
        </div>
          <input className="ui button" type="submit"/>
      </form>
    )
  }
};
