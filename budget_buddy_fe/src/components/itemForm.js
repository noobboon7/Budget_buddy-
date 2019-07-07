import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../actions/ItemAction';




class ItemForm extends React.Component {
  state={
    itemName: "",
    targetGoal: 0,
    category: "",
    imgURL: ""
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }
  handleSubmit = (evt) => {
    evt.preventDefault()
    // let dreamItem = this.state
    // console.log(addItem);
    this.props.addItem(this.state)
  }
  render() {
    // console.log(this.props);
    const {imgURL, itemName, targetGoal,category} = this.state
    return(
      <form onSubmit={this.handleSubmit} className="ui form">
        <div className="field">
          <label>Item Name</label>
          <input onChange={this.handleChange} name="itemName" value={itemName} type="text" placeholder="Boosted Board"/>
        </div>
        <div className="field">
          <label>Price</label>
          <input onChange={this.handleChange} name="targetGoal" value={targetGoal} type="number" placeholder="$$$"/>
        </div>
        <div className="field">
          <label>Category</label>
          <select name="category" value={category} multiple="" onChange={this.handleChange} className="ui fluid dropdown">
            <option value="none">Category</option>
            <option value="entertainment">Entertainment</option>
            <option value="sports">Sports</option>
            <option value="travel">Travel</option>
            <option value="clothes">Clothes</option>
            <option value="event">Event</option>
            <option value="miscellaneous">Miscellaneous</option>
          </select>
        </div>
        <div className="field">
        <label>Image URL</label>
        <input onChange={this.handleChange} name="imgURL"  value={imgURL} type="url" placeholder="https://www.wikihow.com/aid-900px.jpg"/>
        </div>
          <input className="ui button" type="submit"/>
      </form>
    )
  }
};

const mapDispatchToProps = (dispatch) => {
  // console.log(dispatch);
  return{
    addItem: (dreamItem) => dispatch(addItem(dreamItem))
  }
}

export default connect(null, mapDispatchToProps)(ItemForm);
