import React from 'react';
import { Image, Header, Grid, Divider } from 'semantic-ui-react';

export default class Categories extends React.Component{

  render(){
    const src = 'https://react.semantic-ui.com/images/wireframe/image.png';
    return(
      <div className="de-categories">
        <Header as='h1'> Categories to Bag</Header>
        {/* <div className="de-catergory-container">
        <div className="de-catergory-wrapper">
          <img src="resources/categories/indian-wear.jpeg" /> 
        </div>
        <div className="de-catergory-wrapper">
          <img src="resources/categories/western-wear.jpeg" /> 
        </div>
        <div className="de-catergory-wrapper">
          <img src="resources/categories/earings.jpeg" /> 
        </div>
        <div className="de-catergory-wrapper">
          <img src="resources/categories/hair-accessories.jpeg" /> 
        </div>
        <div className="de-catergory-wrapper">
          <img src="resources/categories/nose-pins.jpeg" /> 
        </div>
        </div> */}
        <Grid columns={4}>
          <Grid.Row>
            <Grid.Column width={4}>
              <img alt="Indian Wear" src="resources/categories/indian-wear.jpeg" />
            </Grid.Column>
            <Grid.Column width={4}>
              <img alt="Earrings" src="resources/categories/earings.jpeg" /> 
            </Grid.Column>
            <Grid.Column width={4}>
              <img alt="Hair Accessories" src="resources/categories/hair-accessories.jpeg" />
            </Grid.Column>
            <Grid.Column width={4}>
            <img alt="Nose Pins" src="resources/categories/nose-pins.jpeg" /> 
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}