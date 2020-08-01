import React from 'react';
import { Menu, Grid } from 'semantic-ui-react';
import ItemContainer from './items/items-container';

export default class Shop extends React.Component{
  state = { activeProducts: '3' }
  handleItemClick = (e, { name }) => this.setState({ activeProducts: name });

  render(){
    const { activeProducts } = this.state;
    return(
      <Grid className="de-shop" columns={2}>
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
            <ItemContainer selectedProduct={activeProducts}/>
          </Grid.Column>
        </Grid.Row>
      </Grid>  
    );
  }
}