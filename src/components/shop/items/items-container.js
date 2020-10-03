import React from 'react';
import Item from './item';
import { Card } from 'semantic-ui-react';

function generateCards (start, end, items) {
  const itemCards = [];
  for (let index = start; index <= end; index++) {
    itemCards.push(<Item itemObj={items[index]} />);
  }
  return itemCards;
}

export default function ItemContainer(props) {
  const activeCategory = props.activeCategory,
    items = props.products[activeCategory];
  return <Card.Group>{generateCards(props.startIndex, props.endItemIndex, items)}</Card.Group>;
}