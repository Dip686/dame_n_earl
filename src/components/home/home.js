import React from 'react';
import Poster from '../poster/poster';
import DealsOfTheDay from '../deals-of-the-week/deals-of-the-week';
import Categories from '../categories/categories';
import EyeCatcher from '../eye-catcher/eye-catcher';
import BottomEyeCatcher from '../bottom-eye-catcher/btm-eye-catcher';

export default class Home extends React.Component{

  render(){
    return(
      <>
        <Poster />
        <EyeCatcher />
        <DealsOfTheDay />
        <Categories />
        <BottomEyeCatcher/>
      </>  
    );
  }
}