import React from 'react';
import Item from './item';
import { Card } from 'semantic-ui-react';

export default class ItemContainer extends React.Component{
  constructor() {
    super();
    this.state = {
      products: {
        3: {
          count: 10,
          items: [
            {
              url: 'resources/products/earrings/1.jpeg',
              header: 'Earring',
              currency: '₹',
              oldPrice: '1000',
              newPrice: '900',
              discountAmount: '100',
              discountPercentage: '10',
              rating: '4.5',
              maxRating: '5'
            },
            {
              url: 'resources/products/earrings/1.jpeg',
              header: 'Earring',
              currency: '₹',
              oldPrice: '1000',
              newPrice: '900',
              discountAmount: '100',
              discountPercentage: '10',
              rating: '4.5',
              maxRating: '5'
            },
            {
              url: 'resources/products/earrings/1.jpeg',
              header: 'Earring',
              currency: '₹',
              oldPrice: '1000',
              newPrice: '900',
              discountAmount: '100',
              discountPercentage: '10',
              rating: '4.5',
              maxRating: '5'
            },
            {
              url: 'resources/products/earrings/1.jpeg',
              header: 'Earring',
              currency: '₹',
              oldPrice: '1000',
              newPrice: '900',
              discountAmount: '100',
              discountPercentage: '10',
              rating: '4.5',
              maxRating: '5'
            },
            {
              url: 'resources/products/earrings/1.jpeg',
              header: 'Earring',
              currency: '₹',
              oldPrice: '1000',
              newPrice: '900',
              discountAmount: '100',
              discountPercentage: '10',
              rating: '4.5',
              maxRating: '5'
            },
            {
              url: 'resources/products/earrings/1.jpeg',
              header: 'Earring',
              currency: '₹',
              oldPrice: '1000',
              newPrice: '900',
              discountAmount: '100',
              discountPercentage: '10',
              rating: '4.5',
              maxRating: '5'
            },
            {
              url: 'resources/products/earrings/1.jpeg',
              header: 'Earring',
              currency: '₹',
              oldPrice: '1000',
              newPrice: '900',
              discountAmount: '100',
              discountPercentage: '10',
              rating: '4.5',
              maxRating: '5'
            },
            {
              url: 'resources/products/earrings/1.jpeg',
              header: 'Earring',
              currency: '₹',
              oldPrice: '1000',
              newPrice: '900',
              discountAmount: '100',
              discountPercentage: '10',
              rating: '4.5',
              maxRating: '5'
            },
            {
              url: 'resources/products/earrings/1.jpeg',
              header: 'Earring',
              currency: '₹',
              oldPrice: '1000',
              newPrice: '900',
              discountAmount: '100',
              discountPercentage: '10',
              rating: '4.5',
              maxRating: '5'
            },
            {
              url: 'resources/products/earrings/1.jpeg',
              header: 'Earring',
              currency: '₹',
              oldPrice: '1000',
              newPrice: '900',
              discountAmount: '100',
              discountPercentage: '10',
              rating: '4.5',
              maxRating: '5'
            },            {
              url: 'resources/products/earrings/1.jpeg',
              header: 'Earring',
              currency: '₹',
              oldPrice: '1000',
              newPrice: '900',
              discountAmount: '100',
              discountPercentage: '10',
              rating: '4.5',
              maxRating: '5'
            }
          ]
        }
      }
    };
  }
  render(){
    const selectedProduct = this.props.selectedProduct,
      items = this.state.products[selectedProduct].items;

    return (
      <Card.Group>
        {
          items.map((itemObj)=> <Item itemObj={itemObj} />)
        }
      </Card.Group>  
    );
  }
}