import React from 'react';
import { connect } from 'react-redux';
import { Grid, Menu } from 'semantic-ui-react';
import EditProfile from './editProfile';
import OrderView from '../orders/order';

const mapStateToProps = (state, ownProps) => {
  return {
    activeUser: state.activeUser
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {

  }
}
const orderDetails = [{
  totalAmount: 2222,
  orderId: 58323210,
  deliveryStatus: 'success',
  "products": [{
    url: '1.png',
    price: '',
    productId: ''
  },
  {
    url: '1.png',
    price: '',
    productId: ''
  },
  {
    url: '1.png',
    price: '',
    productId: ''
  }]
},
{
  totalAmount: 222,
  orderId: 58323220,
  deliveryStatus: 'failed',
  "products": [{
    url: '1.png',
    price: '',
    productId: ''
  }]
}];
class UserProfile extends React.Component {
  state = {
    userDetails: this.props.activeUser.userDetails,
    activeCategory: 'order'
  };
  handleItemClick = (e, { name }) => this.setState({ activeCategory: name });
  render() {
    const userDetails = this.state.userDetails,
      activeCategory = this.state.activeCategory;
    return(
      <Grid className="de-userprofile">
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column width={3}>
              <Menu pointing vertical>
                <Menu.Item
                  name='profile'
                  active={activeCategory === 'profile'}
                  onClick={this.handleItemClick}
                > Profile
                </Menu.Item>
                <Menu.Item
                  name='orders'
                  active={activeCategory === 'orders'}
                  onClick={this.handleItemClick}
                >Orders
                </Menu.Item>
              </Menu>
            </Grid.Column>
            <Grid.Column width={13}>
              {
                activeCategory === 'profile' ?
                  <EditProfile userDetails = {userDetails} />
                : <OrderView orderDetails={orderDetails} />
              }
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Grid>
    );
  }

}
export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);