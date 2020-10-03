import React from "react";
import { Grid, Button, Icon, Label, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
  return {
    activeUser: state.activeUser,
  };
};
class ProductAction extends React.Component {
  render() {
    const userDetails = this.props.activeUser.userDetails;
    const { productDetails } = this.props;
    console.log(`Product Details: ${JSON.stringify(productDetails)}`);
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
          <Link
            to={
              userDetails && productDetails && productDetails.p_id
                ? `/shop/cart/${productDetails.p_id}`
                : "#"
            }
            style={{ display: "block", width: "100%" }}
          >
            <Button
              className="de-product-action-button"
              fluid
              as="div"
              labelPosition="right"
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
                Add to cart
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
export default connect(mapStateToProps, null)(ProductAction);
