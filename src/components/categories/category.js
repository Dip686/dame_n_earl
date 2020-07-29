import React from 'react';
import { Card, Image } from 'semantic-ui-react';

export default class Category extends React.Component{

  render(){
    const src = 'https://react.semantic-ui.com/images/wireframe/image.png';
    return(
      <Card.Group itemsPerRow={6}>
        <Card>
          <Image circular src={src}  ui={false} />
          <Card.Content>
            <Card.Header>Matthew</Card.Header>
          </Card.Content>
        </Card>
        <Card>
          <Image circular src={src}  ui={false} />
          <Card.Content>
            <Card.Header>Matthew</Card.Header>
          </Card.Content>
        </Card>
        <Card>
          <Image circular src={src}  ui={false} />
          <Card.Content>
            <Card.Header>Matthew</Card.Header>
          </Card.Content>
        </Card>
        <Card>
          <Image circular src={src}  ui={false} />
          <Card.Content>
            <Card.Header>Matthew</Card.Header>
          </Card.Content>
        </Card>
        <Card>
          <Image circular src={src}  ui={false} />
          <Card.Content>
            <Card.Header>Matthew</Card.Header>
          </Card.Content>
        </Card>
        <Card>
          <Image circular src={src}  ui={false} />
          <Card.Content>
            <Card.Header>Matthew</Card.Header>
          </Card.Content>
        </Card>
    </Card.Group>
    );
  }
}