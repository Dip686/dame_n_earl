import React from 'react';
import { Menu, Grid } from 'semantic-ui-react';
import ItemContainer from './items/items-container';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return {
    products: state.products
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onActiveItemAdd: productDetail => {
      dispatch({
        type: 'ADD_ACTIVE_ITEM',
        payload: productDetail
      });
    }
  }
}

class Shop extends React.Component{
  state = { 
    activeCategory: this.props.products.activeCategory,
    products: this.props.products.products
  }
  handleItemClick = (e, { name }) => this.setState({ activeCategory: name });
  
  render(){
    console.log(this.props, this.state);
    const { activeCategory, products } = this.state;
    return(
      <Grid className="de-shop">
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column width={3}>
              <Menu pointing vertical>
                <Menu.Item
                  name='indian_wear'
                  active={activeCategory === 'indian_wear'}
                  onClick={this.handleItemClick}
                > Indian Wear
                </Menu.Item>
                <Menu.Item
                  name='western_wear'
                  active={activeCategory === 'western_wear'}
                  onClick={this.handleItemClick}
                >Western Wear
                </Menu.Item>
                <Menu.Item
                  name='earrings'
                  active={activeCategory === 'earrings'}
                  onClick={this.handleItemClick}
                >Earrings
                </Menu.Item>
              </Menu>
            </Grid.Column>
            <Grid.Column width={13}>
              <ItemContainer addActiveItem={this.props.onActiveItemAdd} products={products} selectedProduct={activeCategory}/>
            </Grid.Column>
          </Grid.Row>
        </Grid> : ''
      </Grid>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop)