import React from 'react';
import { Menu, Grid } from 'semantic-ui-react';
import ItemContainer from './items/items-container';
import Product from './product';

export default class Shop extends React.Component{
  state = { 
    activeProducts: '3',
    shopView: 'product-details',
    products: {
      3: {
        count: 10,
        items: [
          {
            url: 'resources/products/earrings/1.jpeg',
            header: 'Earring',
            currency: '₹',
            oldPrice: '1000',
            currentPrice: '900',
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
            currentPrice: '900',
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
            currentPrice: '900',
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
            currentPrice: '900',
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
            currentPrice: '900',
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
            currentPrice: '900',
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
            currentPrice: '900',
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
            currentPrice: '900',
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
            currentPrice: '900',
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
            currentPrice: '900',
            discountAmount: '100',
            discountPercentage: '10',
            rating: '4.5',
            maxRating: '5'
          },            {
            url: 'resources/products/earrings/1.jpeg',
            header: 'Earring',
            currency: '₹',
            oldPrice: '1000',
            currentPrice: '900',
            discountAmount: '100',
            discountPercentage: '10',
            rating: '4.5',
            maxRating: '5'
          }
        ]
      }
    }
  }
  handleItemClick = (e, { name }) => this.setState({ activeProducts: name });

  render(){
    const { activeProducts, shopView, products } = this.state;
    return(
      <Grid className="de-shop">
        { shopView === 'shop' ?
          <Grid columns={2}>
            <Grid.Row>
              <Grid.Column width={3}>
                  <Menu pointing vertical>
                  <Menu.Item
                    name='1'
                    active={activeProducts === '1'}
                    onClick={this.handleItemClick}
                  > Indian Wear</Menu.Item>
                  <Menu.Item
                    name='2'
                    active={activeProducts === '2'}
                    onClick={this.handleItemClick}
                  >Western Wear</Menu.Item>
                  <Menu.Item
                    name='3'
                    active={activeProducts === '3'}
                    onClick={this.handleItemClick}
                  >Earrings</Menu.Item>
                </Menu>
              </Grid.Column>
              <Grid.Column width={13}>
                <ItemContainer products={products} selectedProduct={activeProducts}/>
              </Grid.Column>
            </Grid.Row>
          </Grid> : ''
        }
        {
          shopView === 'product-details' ? <Product productDetails={products[activeProducts].items[0]} /> : ''
        }
      </Grid>  
    );
  }
}