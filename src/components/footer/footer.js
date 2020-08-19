import { Segment, Container, Grid, Header, List, Icon, Image } from 'semantic-ui-react';
import React from 'react';

export default class Footer extends React.Component {


  render() {
    return (
      <Segment vertical inverted style={{padding: '6rem' }}>
        <Container>
          <Grid columns={4} divided>
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
                  <List.Item as="a" href="https://www.instagram.com/dameandearl/"><Icon name="instagram" /> Instagram</List.Item>
                  <List.Item as="a" href="https://www.facebook.com/dameandearl"><Icon name="facebook official" />Facebook</List.Item>
                  <List.Item as="a" href="https://twitter.com/dameandearl"><Icon name="twitter" />Twitter</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={4}>
                <List inverted link>
                  <List.Item as="a">
                    <Image height="32" width="32" src="resources/footer-image/sewing-machine.svg"/>
                    <p style={{ paddingTop: '4px', display: 'inline-block', paddingLeft: '8px' }} as="h4" inverted>Made in India</p>
                  </List.Item>
                  <List.Item as="a">
                    <Image height="32" width="32" src="resources/footer-image/quality-assured.svg"/>
                    <p style={{ paddingTop: '4px', display: 'inline-block', paddingLeft: '8px'}} as="h4" inverted>Quality Assured</p>
                  </List.Item>
                  <List.Item as="a">
                    <Image height="32" width="32" src="resources/footer-image/packaged-with-care.svg"/>
                    <p style={{ paddingTop: '4px', display: 'inline-block', paddingLeft: '8px'}} as="h4" inverted>Packed with Care</p>
                  </List.Item>
                </List>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    )
  }
}