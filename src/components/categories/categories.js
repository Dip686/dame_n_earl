import React from 'react';
import { Image, Header, Grid, Divider } from 'semantic-ui-react';

export default class Categories extends React.Component{

  render(){
    const src = 'https://react.semantic-ui.com/images/wireframe/image.png';
    return(
      <div className="de-categories">
        <Header as='h1'> Categories to Bag</Header>
        <div className="de-catergory-container">
        <div className="de-catergory-wrapper">
          <img src="resources/categories/indian-wear.png" /> 
        </div>
        <div className="de-catergory-wrapper">
          <img src="resources/categories/western-wear.png" /> 
        </div>
        <div className="de-catergory-wrapper">
          <img src="resources/categories/earings.png" /> 
        </div>
        <div className="de-catergory-wrapper">
          <img src="resources/categories/hair-accessories.png" /> 
        </div>
        <div className="de-catergory-wrapper">
          <img src="resources/categories/nose-pins.png" /> 
        </div>
        </div>
      </div>
    );
  }
}