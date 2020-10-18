import React from 'react';
import { connect } from 'react-redux';
import { Grid, Divider, Label, Header, Accordion, Icon, Image, Input, Button } from 'semantic-ui-react';
import { getPriceInfo } from '../../utils/util';
import AddressCard from '../address-card/addressCard';

const mapStateToProps = (state, ownProps) => {
  console.log('state',state);
  return {
    userDetails: state.activeUser.userDetails,
    cartDetails: state.cartDetails
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    }
}
class BuyFlow extends React.Component {
  state = { activeIndex: 2, deliveryAddressIndex: 0 };
  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }
  handleGotoNext = (activeIndex, deliveryAddressIndex) => {
    this.setState({activeIndex, deliveryAddressIndex});
  }
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
    const userDetails = this.props.userDetails;
    const [totalItems, price] = getPriceInfo(cartDetails), deliveryCharge = 100;
    const { activeIndex, deliveryAddressIndex } = this.state;
    return (
      <Grid columns={4} className='de-buy-flow-container'>
        <Grid.Row>
          <Grid.Column width={1}></Grid.Column>
          <Grid.Column width={10}>
            <Accordion fluid>
              <Accordion.Title
                active={activeIndex === 0}
                index={0}
                onClick={this.handleClick}
                className='de-buy-flow'
              >
                <Icon name='dropdown' />
                Order summary
              </Accordion.Title>
              <Accordion.Content className='de-buy-flow-content' active={activeIndex === 0}>
                {this.generateCartItems(cartDetails)}
              </Accordion.Content>

              <Accordion.Title
                active={activeIndex === 1}
                index={1}
                onClick={this.handleClick}
                className='de-buy-flow'
              >
                <Icon name='dropdown' />
                Delivery Address
              </Accordion.Title>
              <Accordion.Content className='de-buy-flow-content' active={activeIndex === 1}>
                {
                  userDetails.addresses.map((address, index)=> {
                    return <AddressCard 
                              address={address}
                              handleGotoNext={this.handleGotoNext}
                              addressKey={index}
                              deliveryAddKey={deliveryAddressIndex}
                            />
                  })
                }
              </Accordion.Content>
              <Accordion.Title
                active={activeIndex === 2}
                index={2}
                onClick={this.handleClick}
                className='de-buy-flow'
              >
                <Icon name='dropdown' />
                Payment
              </Accordion.Title>
              <Accordion.Content className='de-buy-flow-content' active={activeIndex === 2}>
                <Grid columns={3}>
                  <Grid.Row>
                    <Grid.Column width={6}>
                      <Header as="h4">PAYMENT INFO:</Header>
                      <span class="de-payment-info"> <b>Mobile:</b> 8981525065</span>
                      <span class="de-payment-info"> <b>UPI id:</b> dip686@icici</span>
                    </Grid.Column>
                    <Grid.Column width={6}>
                      <Input fluid placeholder='Enter the payment Receipt ID' />
                    </Grid.Column>
                    <Grid.Column width={4}>
                      <Button primary> Submit Payment Info</Button>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Accordion.Content>
            </Accordion>
          </Grid.Column>
          <Grid.Column width={1}></Grid.Column>
          <Grid.Column width={3}>
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
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BuyFlow);