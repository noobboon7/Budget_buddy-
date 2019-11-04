import React from 'react';
import { connect } from 'react-redux';
import { addItemToBackend } from '../actions/ItemAction';


class ItemForm extends React.Component {
  state={
    item: "",
    targetgoal: 0,
    category: "",
    img_url: ""
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }
  handleSubmit = (evt) => {
    evt.preventDefault()
    // console.log(addItem);
    this.props.addItemToBackend(this.state)

  }
  render() {
    // console.log(this.props);
    const {img_url, item, targetgoal,category} = this.state
    return(
      <form onSubmit={this.handleSubmit} className="ui form">
        <div className="field">
          <label>Item Name</label>
          <input onChange={this.handleChange} name="item" value={item} type="text" placeholder="Boosted Board"/>
        </div>
        <div className="field">
          <label>Price</label>
          <input onChange={this.handleChange} name="targetgoal" value={targetgoal} type="number" placeholder="$$$"/>
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
        <input onChange={this.handleChange} name="img_url" value={img_url} type="url" placeholder="https://www.wikihow.com/aid-900px.jpg"/>
        </div>
          <input className="ui button" type="submit"/>
      </form>
    )
  }
};

const mapDispatchToProps = (dispatch) => {
  // console.log(dispatch);
  return{
    addItemToBackend: (item) => dispatch(addItemToBackend(item))
  }
}

export default connect(null, mapDispatchToProps)(ItemForm);
