import React, {Component} from 'react';

class SideMenu extends Component {
  state = {
    itemList: []
  }
  handleClick = (e) => {
    // console.log("clicked add button");
    this.setState({
      itemList: [...this.state.itemList,
        <div className= "item">
          <li >BUDGET ITEM</li>
        </div>]
    })
  }

  itemButton = (evt) => {
    console.log("item bnt clicked");
  }


  render() {
    return(

      <div className="ui vertical menu ">
        <div>
          <button onClick={this.handleClick} className=" green circular ui icon button"><i className="plus icon"></i>Add Item</button>
        </div>
        <ul>
        {this.state.itemList.map(item => {
          return(
            <li>
              <img src="" alt="img here" />
              <h4>item name</h4>
              <h4>target goal</h4>
              <button onClick={this.itemButton}
                      name="edit"
                      className="ui blue button">
                Edit
              </button>
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

export default SideMenu;
