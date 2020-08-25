import React from 'react';
import { Menu, Grid , Pagination } from 'semantic-ui-react';
import ItemContainer from './items/items-container';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return {
    products: state.products
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateActiveCategory: activeCategory => {
      dispatch({
        type: 'UPDATE_ACTIVE_CATEGORY',
        payload: activeCategory
      });
    },
    updateActivePage: activePage => {
      dispatch({
        type: 'UPDATE_ACTIVE_PAGE',
        payload: activePage
      });
    }
  }
}

class Shop extends React.Component{

  handleItemClick = (e, { name }) => {this.props.updateActiveCategory(name)};
  handlePageChange = (e, data) => {this.props.updateActivePage(data.activePage);};

  render(){
    let { activeCategory, products, activePage } = this.props.products;
    let tmpActivePage = activePage - 1;
    let totalItems = products[activeCategory].items.length;
    let totalPages = Math.ceil(totalItems / 10);
    let startItemIndex = tmpActivePage * 10;
    let endItemIndex = Math.min(startItemIndex + 9, totalItems - 1);
 
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
              <ItemContainer
                startIndex={startItemIndex}
                endItemIndex = {endItemIndex}
                products={products}
                activeCategory={activeCategory}
              />
              <br />
              <br />
              <br />
              <Pagination onPageChange={this.handlePageChange} activePage={activePage} defaultActivePage={1} totalPages={totalPages} />
            </Grid.Column>
          </Grid.Row>
        </Grid> : ''
      </Grid>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop)