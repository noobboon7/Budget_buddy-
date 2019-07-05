import React, {Component} from 'react';

class SideMenu extends Component {
  state = {
    itemList: []
  }
  handleClick = (e) => {
    console.log("clicked add button");

    this.setState({
      itemList: [...this.state.itemList,
        <div className= "item">
          <li >BUDGET ITEM</li>
        </div>]
    })
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
            <li>item</li>
          )
        })}
        <div className= "item">
          <li className= "item">BUDGET ITEM</li>
        </div>
        </ul>
      </div>
    )

  }
}

export default SideMenu;
