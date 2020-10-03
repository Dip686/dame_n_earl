import React from 'react';
import { Card, Image, Rating } from 'semantic-ui-react';
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';

export default function Item(props) {
  const itemObj = props.itemObj;
  const history = useHistory();
  const dispatch = useDispatch();
  const currency = itemObj.currency.toLowerCase() === 'rupee' ? '₹' : '₹';
  return (
    <Card className="de-items" onClick={()=> {history.push('/shop/product'); dispatch({ type: 'ADD_ACTIVE_ITEM', payload: itemObj})}}>
    <Image src={itemObj.url} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{itemObj.header}</Card.Header>
      {/* <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta> */}
      <Card.Description>
    <span className="de-item-currency">{currency}</span>
        <span className="de-item-current-price">{itemObj.currentPrice}</span>
        <span className="de-item-old-price">{currency}{itemObj.price}</span>
    <span className="de-item-savings"> Save {currency}{itemObj.price - itemObj.currentPrice} ({itemObj.discount}%) </span>
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Rating icon='heart' defaultRating={itemObj.rating} maxRating={5} disabled />
    </Card.Content>
  </Card>
  );
}