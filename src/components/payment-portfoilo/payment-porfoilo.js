import React from 'react';
import { Segment, Image, Grid, Header } from 'semantic-ui-react';

export default class PaymentPorfolio extends React.Component{

  render(){
    return(
      <Grid className="de-payment-supported-container">
        <Grid.Row>
          <Grid.Column width={2}><Image className="de-payment-supported-app" src="resources/digital-india/DigitalIndia.webp" /></Grid.Column>
          <Grid.Column width={4} style={{display: 'flex', 'justify-content': 'center', 'flex-direction': 'column'}}>
            <Header as='h2' style={{color: '#1f2554', 'margin-bottom': '0px'}}>Supporting Digital India</Header>
            <span> Accepting all payments from </span>
          </Grid.Column>
          <Grid.Column width={9}>
            <Grid.Row style={{display: 'flex', 'justify-content': 'space-around'}}>
              <Image className="de-payment-supported-app" src="resources/digital-india/bhim.png" />
              <Image className="de-payment-supported-app" src="resources/digital-india/googlepay.png" />
              <Image className="de-payment-supported-app" src="resources/digital-india/paytm.webp" />
              <Image className="de-payment-supported-app" src="resources/digital-india/phonepe.svg" />
              {/* <Image className="de-payment-supported-app" src="resources/digital-india/DigitalIndia.webp" /> */}
              <Image className="de-payment-supported-app" src="resources/digital-india/amazonpay.png" />
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}