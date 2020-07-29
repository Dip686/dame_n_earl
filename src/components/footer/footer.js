import { Segment, Container, Grid, Header, List } from 'semantic-ui-react';
import React from 'react';

export default class Footer extends React.Component {


  render() {
    return (
      <Segment vertical inverted style={{padding: '6rem' }}>
        <Container>
          <Grid columns={3} divided>
            <Grid.Row>
              <Grid.Column width={3}>
                <Header as="h4" inverted>Dame & Earl</Header>
                <List inverted link>
                  <List.Item>About</List.Item>
                  <List.Item>Team</List.Item>
                  <List.Item>Career</List.Item>
                  <List.Item>Contact Us</List.Item>
                  <List.Item>Legal</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header as="h4" inverted>Help</Header>
                <List inverted link>
                  <List.Item>Return</List.Item>
                  <List.Item>Refund</List.Item>
                  <List.Item>Cancellation</List.Item>
                  <List.Item>FAQs</List.Item>
                  <List.Item>T&C</List.Item>
                  <List.Item>Privacy Policies</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header as="h4" inverted>Follow Us</Header>
                <List inverted link>
                  <List.Item>Instagram</List.Item>
                  <List.Item>Facebook</List.Item>
                  <List.Item>LinkedIn</List.Item>
                </List>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    )
  }
}