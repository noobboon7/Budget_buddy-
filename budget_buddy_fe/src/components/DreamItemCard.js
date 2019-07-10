import React from 'react';
import { Progress, Segment } from 'semantic-ui-react';


const DreamItemCard = (props) => {
  const {id, item, img_url, targetgoal } = props.item
  const {itemButton} = props
  console.log(props);
  return (


      <div key = {id} className="ItemCard">
          <img className="ui small circular image" src={img_url} alt={item} />
          <h4>{item}</h4>
          <Segment inverted>
            <Progress percent={32} inverted color='green' size="small">
            <span>TargetGoal: {targetgoal}</span>
            </Progress>
          </Segment>
          <button  onClick={ () => itemButton(id)}
          name="delete"
          className="ui red button">
          Delete
          </button>
          <hr/>)
      </div>
    )
  }

export default DreamItemCard;
