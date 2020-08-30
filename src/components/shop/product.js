import React from 'react';
import { Grid, Image, Header, Rating, Icon, Divider } from 'semantic-ui-react';
import UserReview from '../user-reviews/user-review';
import ProductAction from '../product-action/product-action';
import { connect } from 'react-redux';


class Product extends React.Component {
  render(){
    const productDetails = this.props.pId.activeProduct;
    return(
      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column width={6}>
            <Image src={productDetails.url}/>
          </Grid.Column>
          <Grid.Column width={7}>
            <Header as="h2">Gold Plated Earrings -The Diva Collection</Header>
            <Rating icon='heart' defaultRating={productDetails.rating} maxRating={productDetails.maxRating} disabled />
            <span className="de-ratings-summary">212 Ratings</span>
            <span>|</span>
            <span className="de-review-summary">55 Reviews</span>
            <div className="de-product-price-details">
              Price:
              <span className="de-product-price-details-currency">{productDetails.currency}</span>
              <span className="de-product-price-details-current-price">{productDetails.currentPrice}</span>
              <span className="de-product-price-details-old-price">{productDetails.currency}{productDetails.price}</span>
              <span className="de-product-price-details-savings"> Save {productDetails.currency}{productDetails.discountAmount} ({productDetails.discountPercentage}%) </span>
            </div>
            <Header as="h4">Product Description</Header>
            <ul>
              <li>Lorem ipsum fogut the too.</li>
              <li>Lorem ipsum fogut the too his rugat for dea.</li>
              <li>Lorem ipsum fogut the too tests.</li>
              <li>Lorem ipsum fogut the too the alternative soltuion.</li>
            </ul>
            {/* <div>
              <Header as="h4">Share it in</Header>
              <Icon className="de-product-share-icon" size="large" name="facebook official" />
              <Icon className="de-product-share-icon" size="large" name="whatsapp" />
              <Icon className="de-product-share-icon" size="large" name="twitter" />
              <Icon className="de-product-share-icon" size="large" name="instagram" />
              <Icon className="de-product-share-icon" size="large" name="pinterest" />

            </div> */}
          </Grid.Column>
          <Grid.Column width={2}>
            <ProductAction />
          </Grid.Column>
        </Grid.Row>
        <Divider/>
        {/* <Grid.Row className="de-product-comments">
          <Grid.Column>
            <UserReview productDetails={productDetails} />
          </Grid.Column>
        </Grid.Row> */}
      </Grid>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    pId: state.activeProduct
  }
}

export default connect(mapStateToProps, null)(Product);