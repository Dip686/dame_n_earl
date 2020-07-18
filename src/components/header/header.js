import { Label, Dropdown, Menu, Icon, Image, Grid } from 'semantic-ui-react';
import React from 'react';

export default class Header extends React.Component {
  state = { activeItem: 'Home' };
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu size='large' className="de-header">
        <Menu.Item>
          <Label as='a' basic color='red' pointing='right'>
            Logo
          </Label>
        </Menu.Item>
        <Menu.Item
          name='Home'
          active={activeItem === 'Home'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Shop'
          active={activeItem === 'Shop'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Gallery'
          active={activeItem === 'Gallery'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Blog'
          active={activeItem === 'Blog'}
          onClick={this.handleItemClick}
        />
        <Menu.Menu position='right'>
          <Menu.Item>
            <Image src='/resources/bag.svg'/>
          </Menu.Item>
          <Menu.Item>
          <Image src='/resources/wishlist.svg'/>
          </Menu.Item>
          <Menu.Item>
            <Icon name="user outline"/>
          </Menu.Item>
          <Dropdown item text='Language'>
            <Dropdown.Menu>
              <Dropdown.Item>English</Dropdown.Item>
              <Dropdown.Item disabled>
                <Grid columns={2} divided>
                  <Grid.Row>
                    <Grid.Column width={11}>हिन्दी</Grid.Column>
                    <Grid.Column width={4}><Icon position='right' name="write"/></Grid.Column>
                  </Grid.Row>
                </Grid>
              </Dropdown.Item>
              <Dropdown.Item disabled>
                <Grid columns={2} divided>
                  <Grid.Row>
                    <Grid.Column width={11}>বাংলা</Grid.Column>
                    <Grid.Column width={4}><Icon position='right' name="write"/></Grid.Column>
                  </Grid.Row>
                </Grid>
              </Dropdown.Item>
              <Dropdown.Item disabled>
                <Grid columns={2} divided>
                  <Grid.Row>
                    <Grid.Column width={11}>తెలుగు</Grid.Column>
                    <Grid.Column width={4}><Icon position='right' name="write"/></Grid.Column>
                  </Grid.Row> 
                </Grid>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Menu>
    )
  }
}