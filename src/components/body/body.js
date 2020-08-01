import React from 'react';
import Home from '../home/home';
import Shop from '../shop/shop';

export default class Body extends React.Component{

  render(){
    return(
      <div>
        <div className="de-body">
          <Home/>
          <Shop/>
        </div>
      </div>
    );
  }
}