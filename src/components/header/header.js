import { Dropdown, Menu, Icon, Image, Grid, Popup, Header as Heading, Button, Modal, Input } from 'semantic-ui-react';
import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Header extends React.Component {
  constructor(){
    super();
    this.state = {
      userName: '',
      password: '',
      isLoginModal: true,
      successFulEntry: false,
      isLoginPopUpOpen: false,
      modalState: {
        isOpen: false,
        isLogin: true
      }
    };
  }
  VerifysignIn() {
    const state = this.state,
      that = this;
    if (state.userName){
      if (state.password) {
        this.setState({successFulEntry: true});
        axios.post('http://localhost:5000/api/v1/auth/login', {
          params: {
            "email": state.userName,
            "password": state.password
          }
        })
        .then(function (response){
          console.log(response);
          if (response.isValidUser) {
            that.setState({modalState: {...state.modalState, isOpen: false}})
          } else {

          }
        })
        .catch(function (error) {
          console.log(error);
        });
      } else {

      }
    } else {

    }
  }
  render() {
    const activeItem = this.props.headerSelected;
    const modalState = this.state.modalState;
    return (
      <div className="de-sticky-header-wrapper">
        <Menu size='large' className="de-header" secondary pointing>
          <Menu.Item style={{padding: '0'}}>
            <Image height="32" width="200" src="resources/logo/logo.png" />
          </Menu.Item>
          <Link to='/home'>
            <Menu.Item
              name='Home'
              active={activeItem === 'Home'}
              onClick={()=> {this.props.setHeaderSelected('Home')} }
            />
          </Link>
          <Link to='/shop'>
            <Menu.Item
              name='Shop'
              active={activeItem === 'Shop'}
              onClick={()=> {this.props.setHeaderSelected('Shop')} }
            />
          </Link>
          {/* <Link to='/gallery'>
            <Menu.Item
              name='Gallery'
              active={activeItem === 'Gallery'}
              onClick={()=> {this.props.setHeaderSelected('Gallery')} }
            />
          </Link> */}
          <Link to='/blog'>    
            <Menu.Item
              name='Blog'
              active={activeItem === 'Blog'}
              onClick={()=> {this.props.setHeaderSelected('Blog')} }
            />
          </Link>  
          <Menu.Menu position='right'>
            <Menu.Item>
              <Image src='/resources/bag.svg'/>
            </Menu.Item>
            <Menu.Item>
            <Image src='/resources/wishlist.svg'/>
            </Menu.Item>
            <Menu.Item as="a">
              <Popup 
                hoverable 
                onOpen={()=>{this.setState({isLoginPopUpOpen: true});}}
                open={this.state.isLoginPopUpOpen}
                trigger={<Icon name="user outline"/>} 
                position='bottom right'
              >
                <Heading as="h6">Welcome</Heading>
                <span>To access account and manage orders</span>
                <div>
                  <Button
                    icon='sign-in'
                    color='teal'
                    content='Sign in'
                    onClick={() => this.setState({ isLoginModal: true, isLoginPopUpOpen: false, modalState: {...modalState, isOpen: true,isLogin: true }})}
                  />
                  <Button
                    icon='signup'
                    color='blue'
                    content='Sign up'
                    onClick={() => this.setState({ isLoginModal: false, isLoginPopUpOpen: false, modalState: {...modalState, isOpen: true, isLogin: false}})}
                  />
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
        <form>
          <Modal
          centered={false}
          size='mini'
          open={modalState.isOpen}
          onClose={() => this.setState({modalState: {...modalState, isOpen: false}})}
          >
            <Modal.Header> {this.state.isLoginModal ? 'Login' : 'SignUp' }</Modal.Header>
            <Modal.Content>
              <p>Please enter your details:</p>
              {modalState.isLogin ?
                <Grid columns={1}>
                  <Grid.Row>
                    <Grid.Column>
                      <Input onChange={(e, data)=> { this.setState({userName: data.value});}} fluid icon='user' iconPosition='left' placeholder='Please enter your user name' />
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row> 
                    <Grid.Column>
                      <Input onChange={(e, data)=> { this.setState({password: data.value});}} type="password" fluid icon='user secret' iconPosition='left' placeholder='Please enter your password' />
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
              <Button secondary onClick={() => this.setState({modalState: {...modalState, isOpen: false}})}>
                cancel
              </Button>
              <Button loading={this.state.successFulEntry} primary onClick={() => {this.VerifysignIn();}}>
                Sign in
              </Button>
            </Modal.Actions>
          </Modal>
        </form>  
      </div>
    )
  }
}