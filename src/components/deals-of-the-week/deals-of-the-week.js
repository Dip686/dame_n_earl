import React from 'react';
import { Header, Image } from 'semantic-ui-react';

export default class DealsOfTheDay extends React.Component{

  render(){
    return(
      <div className="de-deals-of-the-week-wrapper">
        <Header as='h1'> Deals of this Week </Header>
        <div className="de-deals-of-the-week-container">
          <Image className="de-deals-of-the-week" src='resources/deals-of-the-week/buy1get1.jpeg'/>
          <Image className="de-deals-of-the-week" src='resources/deals-of-the-week/oxidisedearrings.jpeg'/>
          <Image className="de-deals-of-the-week" src='resources/deals-of-the-week/off.jpeg'/>
        </div>
      </div>  
    );
  }
}