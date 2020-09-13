import React from 'react';
import Home from '../home/home';
import Shop from '../shop/shop';
import Product from  '../shop/product';
import UserProfile from  '../userProfile/userProfile';
import Cart from  '../cart/cart';

import {
  Switch,
  Route
} from "react-router-dom";

function getViz(headerSelected) {
  switch(headerSelected) {
    case 'Home': return <Home />;
    case 'Shop': return <Shop />;
    default: return <Home/>;
  }
}
export default class Body extends React.Component{

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