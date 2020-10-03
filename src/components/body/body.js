import React from 'react';
import Home from '../home/home';
import Shop from '../shop/shop';
import Product from  '../shop/product';
import UserProfile from  '../userProfile/userProfile';
import Cart from  '../cart/cart';
import { GET_HAIR_ACESSORIES_LOCAL, GET_INDIAN_WEAR_LOCAL, GET_EARRINGS_LOCAL } from '../../utils/constants';
import axios from 'axios';

import {
  Switch,
  Route
} from "react-router-dom";
import { connect } from 'react-redux';


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setProductDetails: (category, items) => {
      dispatch({
        type: 'SET_PRODUCT_DETAILS',
        payload: {
          category,
          items
        }
      });
    }
  }
}

function getViz(headerSelected) {
  switch(headerSelected) {
    case 'Home': return <Home />;
    case 'Shop': return <Shop />;
    default: return <Home/>;
  }
}
class Body extends React.Component{
  componentDidMount() {
    // Hair Accessories
    let bodyComponent = this;
    axios.get(GET_HAIR_ACESSORIES_LOCAL,{

    }).then(function getHairAccessoriesSuccess(response){
      let attireDetails = response.data.attireDetails[0];
      bodyComponent.props.setProductDetails(attireDetails.category, attireDetails.items);
    }).catch(function getHairAccessoriesError(){
      console.log('Failed to load hair accessories details');
    });

    // Indian Wear
    axios.get(GET_INDIAN_WEAR_LOCAL,{

    }).then(function getIndianWearSuccess(response){
      let attireDetails = response.data.attireDetails[0];
      bodyComponent.props.setProductDetails(attireDetails.category, attireDetails.items);
    }).catch(function getIndianWearError(){
      console.log('Failed to load indian wear details');
    });

    //Earrings
    axios.get(GET_EARRINGS_LOCAL,{

    }).then(function getEarringsSuccess(response){
      let attireDetails = response.data.attireDetails[0];
      bodyComponent.props.setProductDetails(attireDetails.category, attireDetails.items);
    }).catch(function getEarringsError(){
      console.log('Failed to load earrings details');
    });
  }
  render(){
    const headerSelected = this.props.headerSelected;
    return(
      <div>
        <div className="de-body">
          <Switch>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/shop">
              <Shop />
            </Route>
            <Route exact path="/shop/product">
              <Product />
            </Route>
            <Route exact path="/shop/cart">
              <Cart />
            </Route>
            <Route exact path="/user/profile">
              <UserProfile />
            </Route>
            <Route exact path="/user/buy">
              <UserProfile />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    );
  }
}
export default connect(null, mapDispatchToProps)(Body);