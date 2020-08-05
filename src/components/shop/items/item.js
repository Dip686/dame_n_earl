import React from 'react';
import { Card, Image, Rating } from 'semantic-ui-react';

export default class Item extends React.Component{
  render(){
    const itemObj = this.props.itemObj;
    return (
      <Card className="de-items" onClick={this.props.buyProduct}>
      <Image src={itemObj.url} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{itemObj.header}</Card.Header>
        {/* <Card.Meta>
          <span className='date'>Joined in 2015</span>
        </Card.Meta> */}
        <Card.Description>
          <span className="de-item-currency">{itemObj.currency}</span>
          <span className="de-item-current-price">{itemObj.currentPrice}</span>
          <span className="de-item-old-price">{itemObj.currency}{itemObj.oldPrice}</span>
      <span className="de-item-savings"> Save {itemObj.currency}{itemObj.discountAmount} ({itemObj.discountPercentage}%) </span>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Rating icon='heart' defaultRating={itemObj.rating} maxRating={itemObj.maxRating} />
      </Card.Content>
    </Card>
    );
  }
}