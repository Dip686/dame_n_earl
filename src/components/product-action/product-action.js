import React from "react";
import axios from "axios";
import styled from "styled-components";
import {
  Grid,
  Button,
  Icon,
  Label,
  Header,
  Advertisement,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { ADD_TO_CART_API } from "../../utils/constants";

const mapStateToProps = (state, ownProps) => {
  return {
    activeUser: state.activeUser,
  };
};
class ProductAction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      isApiSuccess: false,
      cartButtonText: "Add to cart",
    };
  }

  handleCart = async () => {
    const { productDetails } = this.props;
    this.setState({
      isLoading: true,
    });
    const putRequestBody = {
      email: "admin@gmail.com", // fetch user email from store
      products: [
        {
          p_id: productDetails.p_id,
          quantity: 1,
        },
      ],
    };
    const {
      data: { isAddedToCart },
    } = await axios.put(ADD_TO_CART_API, putRequestBody);
    if (isAddedToCart) {
      this.setState({
        isLoading: false,
        isApiSuccess: true,
        cartButtonText: "View Cart",
      });
    }
  };

  viewCart = () => {
    const { productDetails, history } = this.props;
    // history.push(`/shop/cart/${productDetails.p_id}`);
    window.location.href = `/shop/cart`;
  };

  render() {
    const userDetails = this.props.activeUser.userDetails;
    const { isApiSuccess, isLoading } = this.state;
    const AddToCart = styled.div`
      display: block;
      width: 100%;
    `;

    return (
      <Grid>
        <Grid.Row>
          <Header as="h4"> Your Buy Options</Header>
        </Grid.Row>

        <Grid.Row>
          <Link
            to={userDetails ? "/shop/buy" : "#"}
            style={{ display: "block", width: "100%" }}
          >
            <Button
              className="de-product-action-button"
              fluid
              as="div"
              labelPosition="right"
            >
              <Button color="green">
                <Icon name="box" />
              </Button>
              <Label
                className="de-product-action-label"
                as="div"
                basic
                color="green"
                pointing="left"
              >
                Buy Now
              </Label>
            </Button>
          </Link>
          {/* <Link
            to={
              userDetails && productDetails && productDetails.p_id
                ? `/shop/cart/${productDetails.p_id}`
                : "#"
            }
            style={{ display: "block", width: "100%" }}
          > */}
          <AddToCart>
            <Button
              className="de-product-action-button"
              fluid
              loading={isLoading}
              as="div"
              labelPosition="right"
              onClick={isApiSuccess ? this.viewCart : this.handleCart}
            >
              <Button color="blue">
                <Icon name="cart" />
              </Button>
              <Label
                className="de-product-action-label"
                as="div"
                basic
                color="blue"
                pointing="left"
              >
                {this.state.cartButtonText}
              </Label>
            </Button>
          </AddToCart>
          {/* </Link> */}
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
export default connect(mapStateToProps, null)(ProductAction);
