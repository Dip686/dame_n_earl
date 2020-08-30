import React from 'react';
import { Grid, Button, Icon, Label, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class ProductAction extends React.Component {
  render(){
    return(
      <Grid>
        <Grid.Row>
          <Header as='h4'> Your Buy Options</Header>
        </Grid.Row>
        
        <Grid.Row>
        <Link to="/shop/buy" style={{display: 'block', width: '100%'}}>
          <Button className="de-product-action-button" fluid as='div' labelPosition='right'>
            <Button color='green'>
              <Icon name='box' />
            </Button>
            <Label className="de-product-action-label" as='div' basic color='green' pointing='left'>
              Buy Now
            </Label>
          </Button>
         </Link> 
          <Link to="/shop/cart" style={{display: 'block', width: '100%'}}>
            <Button className="de-product-action-button" fluid as='div' labelPosition='right'>
              <Button color='blue'>
                <Icon name='cart' />
              </Button>
              <Label className="de-product-action-label" as='div' basic color='blue' pointing='left'>
                Add to your cart
              </Label>
            </Button>
          </Link>  
          {/* <Button className="de-product-action-button" fluid as='div' labelPosition='right'>
            <Button color='yellow'>
              <Icon name='list' />
            </Button>
            <Label className="de-product-action-label" as='div' basic color='yellow' pointing='left'>
              Add to your wishList
            </Label>
          </Button> */}
        </Grid.Row>
      </Grid>
    );
  }
}