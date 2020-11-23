import React from 'react';
import { connect } from 'react-redux';
import  { Grid, Image, Header, Label, Icon, Divider, Button, GridRow } from 'semantic-ui-react';

const mapStateToProps = (state, ownProps) => {
  return {
    cartDetails: state.cartDetails
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    removeItemFromCart: key => {
      dispatch({
        type: 'REMOVE_ITEM_FROM_CART',
        payload: key
      });
    },
    incItemInCart: key => {
      dispatch({
        type: 'INCREMENT_ITEM_FROM_CART',
        payload: key
      });
    },
    decItemInCart: key => {
      dispatch({
        type: 'DECREMENT_ITEM_FROM_CART',
        payload: key
      });
    }
  }
}

function getPriceInfo(obj) {
  let size = 0, key, price = 0;
  for (key in obj) {
      if (obj.hasOwnProperty(key)) {
        size++;
        price += +obj[key].currentPrice * obj[key].quantity;
      }
  }
  return [size, price];
};


class Cart extends React.Component {

  generateCartItem  = (productDetail, key, totalItems) => {
    const cartDetails = this.props.cartDetails;
    return (
      <Grid columns={3} className='nullify-grid-margin'>
        <Grid.Row>
          <Grid.Column width={4}>
            <Image size="small" fluid src={productDetail.url} />
          </Grid.Column>
          <Grid.Column width={11}>
            <Grid.Row>
              <Header as="h3">{productDetail.header}</Header>
            </Grid.Row>
            <Grid.Row className="de-product-price-details">
              <span className="de-product-price-details-currency">{productDetail.currency}</span>
              <span className="de-product-price-details-current-price">{productDetail.currentPrice}</span>
              <span className="de-product-price-details-old-price">{productDetail.currency}{productDetail.price}</span>
              <span className="de-product-price-details-savings"> Save {productDetail.currency}{productDetail.discountAmount} ({productDetail.discountPercentage}%) </span>
            </Grid.Row>
            <br />
            <Grid.Row>
              <Icon
                style={{cursor: 'pointer'}}
                disabled={cartDetails[key].quantity <= 0}
                onClick={()=>this.props.decItemInCart(key)}
                name="minus circle"
                color="brown"
              />
              <div style={{width: '50px', display: 'inline-block', marginLeft: '4px', marginRight: '4px'}}>
                <input style={{width: '100%'}} value={cartDetails[key].quantity} type="number" size="2" />
              </div>  
              <Icon
                style={{cursor: 'pointer'}}
                onClick={()=>this.props.incItemInCart(key)}
                color="green"
                name="add circle" 
              />
            </Grid.Row>
          </Grid.Column>
          <Grid.Column width={1}>
            <Icon
              name="trash alternate outline"
              className="de-trash-icon"
              onClick={()=>{ this.props.removeItemFromCart(key)}}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={16}> <Divider /></Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
  
  generateCartItems = (productDetails) => {
    const items = [];
    for (const key in productDetails) {
      if (productDetails.hasOwnProperty(key)) {
        const productDetail = productDetails[key];
        items.push(this.generateCartItem(productDetail, key));
      }
    }
    return items;
  }

  render() {
    const cartDetails = this.props.cartDetails;
    const [totalItems, price] = getPriceInfo(cartDetails);
    const deliveryCharge = 100;
    return (
      <>
      {
        totalItems ?
        <Grid columns={3} style={{marginLeft: '2rem'}}>
          <Grid.Column width={10} className="de-custom-card cart-wrapper">
            <div style={{
                backgroundColor:'#f9f9db',
                borderBottom: '1px solid grey'
              }}>
              <h3 style={{padding: '8px 1rem'}}>My Cart ({totalItems} items)</h3>
            </div>
            {this.generateCartItems(cartDetails)}
          </Grid.Column>
          <Grid.Column width={1}></Grid.Column>
          <Grid.Column width={4}>
            <Grid className="de-custom-card">
                <Label color='green' ribbon>
                  Price Details
                </Label>
              <Grid.Row>
                <Grid columns={2}>
                  <Grid.Row>
                    <Grid.Column width={6}><Header>Price ({totalItems} items)</Header></Grid.Column>
                    <Grid.Column width={6}> <Header>₹{price}</Header></Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column width={6}> <Header>Delivery charges</Header></Grid.Column>
                    <Grid.Column width={6}><Header>₹{deliveryCharge}</Header></Grid.Column>
                  </Grid.Row>
                  <hr style={{color: '#fffefe'}}/>
                  <Grid.Row>
                    <Grid.Column width={6}> <Header>Total</Header></Grid.Column>
                    <Grid.Column width={6}><Header>₹{price + deliveryCharge}</Header></Grid.Column>
                  </Grid.Row>
                </Grid>
              </Grid.Row>
            </Grid>
            <Grid>
              <Grid.Row>
                <Button size="large" fluid content='Place Order' primary />
              </Grid.Row>
            </Grid>
          </Grid.Column>
        </Grid>
        : <Header> No items added in your cart.</Header>
      }
      </>  
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);