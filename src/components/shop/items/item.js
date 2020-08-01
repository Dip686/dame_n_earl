import React from 'react';
import { Card, Image, Rating } from 'semantic-ui-react';

export default class Item extends React.Component{
  render(){
    const itemObj = this.props.itemObj;
    return (
      <Card className="de-items">
      <Image src={itemObj.url} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{itemObj.header}</Card.Header>
        {/* <Card.Meta>
          <span className='date'>Joined in 2015</span>
        </Card.Meta> */}
        <Card.Description>
          <span>{itemObj.currency}</span>
          <span>{itemObj.currentPrice}</span>
          <span>{itemObj.oldPrice}</span>
          <span>Save {itemObj.discountAmount}({itemObj.percentageSavings})%</span>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Rating icon='heart' defaultRating={itemObj.rating} maxRating={itemObj.maxRating} />
      </Card.Content>
    </Card>
    );
  }
}