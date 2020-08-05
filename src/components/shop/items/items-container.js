import React from 'react';
import Item from './item';
import { Card } from 'semantic-ui-react';

export default class ItemContainer extends React.Component{
  
  render(){
    const selectedProduct = this.props.selectedProduct,
      items = this.props.products[selectedProduct].items;

    return (
      <Card.Group>
        {
          items.map((itemObj)=> <Item buyProduct={this.props.buyProduct} itemObj={itemObj} />)
        }
      </Card.Group>  
    );
  }
}