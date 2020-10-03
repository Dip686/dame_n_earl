import React from 'react';
import { Image, Header, Grid } from 'semantic-ui-react';

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
        <Grid columns={5}>
          <Grid.Row>
            <Grid.Column width={3.5} className="de-categories-wrapper">
              <span className='de-category-name'>Indian Wear</span>
              <Image fluid className="de-categories-to-bag" alt="Indian Wear" src="resources/categories/indian-wear.png" />
            </Grid.Column>
            <Grid.Column width={3.5} className="de-categories-wrapper">
              <span className='de-category-name'>Earrings</span>
              <Image fluid className="de-categories-to-bag" alt="Earrings" src="resources/categories/earings.png" /> 
            </Grid.Column>
            <Grid.Column width={3.5} className="de-categories-wrapper">
              <span className='de-category-name'>Hair Accessories</span>
              <Image fluid className="de-categories-to-bag" alt="Hair Accessories" src="resources/categories/hair-accessories.png" />
            </Grid.Column>
            <Grid.Column width={3.5} className="de-categories-wrapper">
              <span className='de-category-name'>Nose Pins</span>
              <Image fluid className="de-categories-to-bag" alt="Nose Pins" src="resources/categories/nose-pins.png" /> 
            </Grid.Column>
            <Grid.Column width={3.5} className="de-categories-wrapper">
              <span className='de-category-name'>Western Wear</span>
              <Image fluid className="de-categories-to-bag" alt="Western Wear" src="resources/categories/western-wear.png" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}