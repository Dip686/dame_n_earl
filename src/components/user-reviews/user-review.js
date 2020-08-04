import React from 'react';
import { Grid, Header, Comment } from 'semantic-ui-react';

export default class UserReview extends React.Component {
  render(){
    const productDetails = this.props.productDetails;
    console.log(productDetails);
    return(
      <Grid>
        <Grid.Row>
          <Comment.Group>
            <Header as='h3' dividing>
              Comments
            </Header>
            <Comment>
              <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
              <Comment.Content>
                <Comment.Author as='a'>Matt</Comment.Author>
                <Comment.Metadata>
                  <div>Today at 5:42PM</div>
                </Comment.Metadata>
                <Comment.Text>How beautiful!</Comment.Text>
              </Comment.Content>
            </Comment>
          </Comment.Group>
        </Grid.Row>
      </Grid>
    );
  }
}