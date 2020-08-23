import React from 'react';
import Item from './item';
import { Card } from 'semantic-ui-react';

export default function ItemContainer(props) {
  const selectedProduct = props.selectedProduct,
    items = props.products[selectedProduct].items;

  return (
    <Card.Group>
      {
        items.map((itemObj)=> <Item addActiveItem={props.addActiveItem} itemObj={itemObj} />)
      }
    
    </Card.Group>
  );
}