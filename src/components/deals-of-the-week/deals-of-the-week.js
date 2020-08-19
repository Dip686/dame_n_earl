import React from 'react';
import { Header, Image, Grid } from 'semantic-ui-react';

export default class DealsOfTheDay extends React.Component{

  render(){
    return(
      <div className="de-deals-of-the-week-wrapper">
        <Header as='h1'> Deals of this Week </Header>
        {/* <div className="de-deals-of-the-week-container">
          <Image className="de-deals-of-the-week" src='resources/deals-of-the-week/buy1get1.jpeg'/>
          <Image className="de-deals-of-the-week" src='resources/deals-of-the-week/oxidisedearrings.jpeg'/>
          <Image className="de-deals-of-the-week" src='resources/deals-of-the-week/oxidisedearrings.jpeg'/>
          <Image className="de-deals-of-the-week" src='resources/deals-of-the-week/off.jpeg'/>
        </div> */}
        <Grid columns={4}>
          <Grid.Row>
            <Grid.Column width={4}>
            <Image className="de-deals-of-the-week" src='resources/deals-of-the-week/buy1get1.jpeg'/>
            </Grid.Column>
            <Grid.Column width={4}>
            <Image className="de-deals-of-the-week" src='resources/deals-of-the-week/oxidisedearrings.jpeg'/>
            </Grid.Column>
            <Grid.Column width={4}>
              <Image className="de-deals-of-the-week" src='resources/deals-of-the-week/firstTimeUser.png'/>
            </Grid.Column>
            <Grid.Column width={4}>
              <Image className="de-deals-of-the-week" src='resources/deals-of-the-week/off.jpeg'/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>  
    );
  }
}