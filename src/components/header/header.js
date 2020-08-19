import { Label, Dropdown, Menu, Icon, Image, Grid, Popup, Header as Heading, Button, Modal, Input } from 'semantic-ui-react';
import React from 'react';

export default class Header extends React.Component {
  constructor(){
    super();
    this.state = {
      modalState:{
        isOpen: true,
        isLogin: false
      }
    }
  }
  render() {
    const activeItem = this.props.headerSelected;
    const modalState = this.state.modalState;
    return (
      <div className="de-sticky-header-wrapper">
        <Menu size='large' className="de-header" secondary pointing>
          <Menu.Item style={{padding: '0', paddingBottom: '4px', paddingTop: '8px'}}>
            <Image height="32" width="200" src="resources/logo/logo.jpeg" />
          </Menu.Item>
          <Menu.Item
            name='Home'
            active={activeItem === 'Home'}
            onClick={()=> {this.props.setHeaderSelected('Home')} }
          />
          <Menu.Item
            name='Shop'
            active={activeItem === 'Shop'}
            onClick={()=> {this.props.setHeaderSelected('Shop')} }
          />
          <Menu.Item
            name='Gallery'
            active={activeItem === 'Gallery'}
            onClick={()=> {this.props.setHeaderSelected('Gallery')} }
          />
          <Menu.Item
            name='Blog'
            active={activeItem === 'Blog'}
            onClick={()=> {this.props.setHeaderSelected('Blog')} }
          />
          <Menu.Menu position='right'>
            <Menu.Item>
              <Image src='/resources/bag.svg'/>
            </Menu.Item>
            <Menu.Item>
            <Image src='/resources/wishlist.svg'/>
            </Menu.Item>
            <Menu.Item as="a">
              <Popup hoverable on='hover' trigger={<Icon name="user outline"/>} position='bottom right'>
                <Heading as="h6">Welcome</Heading>
                <span>To access account and manage orders</span>
                <div>
                  <Button icon='sign-in' color='teal' content='Sign in' onClick={() => this.setState({modalState: {isOpen: true}})}/>
                  <Button icon='signup' color='blue' content='Sign up'  onClick={() => this.setState({modalState: {isOpen: true, isLogin: false}})}/>
                </div>  
              </Popup>
            </Menu.Item>
            <Dropdown item text='English'>
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
        <Modal
        centered={false}
        size='mini'
        open={modalState.isOpen}
        onClose={() => this.setState({modalState: {isOpen: false}})}
        >
          <Modal.Header>Login</Modal.Header>
          <Modal.Content>
            <p>Please enter your details:</p>
            {modalState.isLogin ?
              <Grid columns={1}>
                <Grid.Row>
                  <Grid.Column>
                    <Input fluid icon='user' iconPosition='left' placeholder='Please enter your user name' />
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row> 
                  <Grid.Column>
                    <Input type="password" fluid icon='user secret' iconPosition='left' placeholder='Please enter your password' />
                  </Grid.Column>  
                </Grid.Row> 
              </Grid>  
              :
              <Grid columns={1}>
                <Grid.Row>
                  <Grid.Column>
                    <Input fluid icon='mail' iconPosition='left' placeholder='Please enter your email id' />
                  </Grid.Column>  
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <Input type="number" fluid icon='mobile' iconPosition='left' placeholder='Please enter your mobile number' />
                  </Grid.Column>  
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <Input type="password" fluid icon='user secret' iconPosition='left' placeholder='Please enter your password' />
                  </Grid.Column>  
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <Input type="password" fluid icon='user secret' iconPosition='left' placeholder='Please confirm your password' />
                  </Grid.Column>  
                </Grid.Row> 
              </Grid>

            }
          </Modal.Content>
          <Modal.Actions>
            <Button secondary onClick={() => this.setState({modalState: {isOpen: false}})}>
              cancel
            </Button>
            <Button primary onClick={() => this.setState({modalState: {isOpen: false}})}>
              Sign in
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}