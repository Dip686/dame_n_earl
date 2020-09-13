import { Dropdown, Menu, Icon, Image, Grid, Popup, Header as Heading, Button, Modal, Input } from 'semantic-ui-react';
import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import jwt from 'jsonwebtoken';
import  { LOGIN_API, SIGNUP_API } from '../../utils/constants';

const findAuthMessage = (loginState) => {
  if (loginState === 'failed') return <span style={{color: 'red'}}> Login Failed</span>;
  if (loginState === 'password mismatch') return <span style={{color: 'red'}}> The password does not match</span>;
  if (loginState === 'sign-up failed') return <span style={{color: 'red'}}> sign-up failed</span>;

}
const mapStateToProps = (state, ownProps) => {
  return {
    activeUser: state.activeUser
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    signInActiveUser: userDetails => {
      dispatch({
        type: 'ADD_ACTIVE_USER',
        payload: userDetails
      });
    },
    signOutActiveUser: () => {
      dispatch({
        type: 'ADD_ACTIVE_USER',
        payload: null
      });
    }
  }
}

class Header extends React.Component {
  constructor(){
    super();
    this.state = {
      email: '',
      password: '',
      signUpDetails: {
        fullName: '',
        email: '',
        contactNo: '',
        password: '',
        rePassword: ''
      },
      successFulEntry: 'in progress',
      modalState: {
        isOpen: false,
        isLogin: true
      }
    };
  }
  VerifyAuth() {
    const state = this.state,
      that = this;
    if (state.modalState.isLogin) {
      // sign in flow
      if (state.email && state.password) {
        this.setState({successFulEntry: 'loading'});
        axios.post('http://localhost:5000/api/v1/auth/login', {
          "email": state.email,
          "password": state.password
        })
        .then(function (response){
          if (response.data.success) {
            let token = response.data.token;
            token = token.replace('Bearer', '');
            token = token.trim();
            let data = jwt.decode(token);
            that.props.signInActiveUser({
              ...data.userDetails
            });
            that.setState({successFulEntry: 'sucess', modalState: {...state.modalState, isOpen: false}});
          } else {
            that.setState({ successFulEntry: 'in progress', modalState: {...state.modalState, isOpen: false}});
          }
        })
        .catch(function (error) {
          that.setState({successFulEntry: 'failed'});
        });
      }
    } else {
      // sign up flow
      let signUpDetails = state.signUpDetails,
        fullName = signUpDetails.fullName,
        email = signUpDetails.email,
        contactNo = signUpDetails.contactNo,
        pass =  signUpDetails.password,
        rePass = signUpDetails.rePassword;

      if (fullName && email && contactNo && pass && rePass) {
        if (pass !== rePass) {
          that.setState({successFulEntry: 'password mismatch'});
          return;
        }
        this.setState({successFulEntry: 'loading'});
        axios.post('http://localhost:5000/api/v1/auth/register', {
          "name": fullName,
          "email": email,
          "contactno": contactNo,
          "password": pass
        }).then(function(response){
          if (response.data) {
            that.setState({successFulEntry: 'sucess', modalState: {...state.modalState, isOpen: false}});
          } else {
            that.setState({ successFulEntry: 'in progress', modalState: {...state.modalState, isOpen: false}});
          }
        }).catch(function(err){
          that.setState({successFulEntry: 'sign-up failed'});
        });
      }


    }

  }
  render() {
    const activeItem = this.props.headerSelected;
    const modalState = this.state.modalState;
    const activeUser = this.props.activeUser.userDetails;

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
              <Link to="/shop/cart">
                <Image src='/resources/bag.svg'/>
              </Link>
            </Menu.Item>
            {/* <Menu.Item>
            <Image src='/resources/wishlist.svg'/>
            </Menu.Item> */}
            <Menu.Item as="a">
              <Popup 
                hoverable 
                closeOnPortalMouseLeave
                closeOnDocumentClick
                closeOnEscape
                trigger={<Icon name="user outline"/>} 
                position='bottom right'
              >
                <Heading as="h6">Welcome {activeUser && activeUser.name}</Heading>
                {
                  activeUser ?
                  <>
                    <Link to="/">
                      <Button onClick={this.props.signOutActiveUser}>Logout</Button>
                    </Link>
                    <Link to="/user/profile">
                      <a>Visit your Profile</a>
                    </Link>
                  </>
                  :
                  <>
                    <span>To access account and manage orders</span>
                    <div style={{ display: 'flex'}}>
                      <Button
                        icon='sign-in'
                        color='teal'
                        content='Sign in'
                        size='medium'
                        onClick={() => this.setState({ modalState: {...modalState, isOpen: true,isLogin: true } })}
                      />
                      <Button
                        icon='signup'
                        color='blue'
                        content='Sign up'
                        size='medium'
                        onClick={() => this.setState({ modalState: {...modalState, isOpen: true, isLogin: false} })}
                      />
                    </div>  
                  </>
                }  
              </Popup>
            </Menu.Item>
            {/* <Dropdown item text='English'>
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
            </Dropdown> */}
          </Menu.Menu>
        </Menu>
          <Modal
          centered={false}
          size='mini'
          open={modalState.isOpen}
          onClose={() => this.setState({modalState: {...modalState, isOpen: false}})}
          >
            <Modal.Header> {modalState.isLogin ? 'Login' : 'SignUp' }</Modal.Header>
            <Modal.Content>
              <form onSubmit={(e)=>{e.preventDefault();}}>
                <span>Please enter your details: </span>
                {findAuthMessage(this.state.successFulEntry)}
                {modalState.isLogin ?
                  <Grid columns={1}>
                    <Grid.Row>
                      <Grid.Column>
                        <Input type="email" required onChange={(e, data)=> { this.setState({email: data.value});}} fluid icon='mail' iconPosition='left' placeholder='Please enter your email id' />
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row> 
                      <Grid.Column>
                        <Input required onChange={(e, data)=> { let payload = data.value; this.setState({password: jwt.sign(payload, 'encryptedtokenblabla')});}} type="password" fluid icon='user secret' iconPosition='left' placeholder='Please enter your password' />
                      </Grid.Column>  
                    </Grid.Row> 
                  </Grid>  
                  :
                  <Grid columns={1}>
                    <Grid.Row>
                      <Grid.Column>
                        <Input required onChange={(e, data)=> { this.setState({ signUpDetails: {...this.state.signUpDetails, fullName: data.value}});}} fluid icon='user' iconPosition='left' placeholder='Please enter your full name' />
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                      <Grid.Column>
                        <Input required type="email" onChange={(e, data)=> { this.setState({ signUpDetails: {...this.state.signUpDetails, email: data.value}});}} fluid icon='mail' iconPosition='left' placeholder='Please enter your email id' />
                      </Grid.Column>  
                    </Grid.Row>
                    <Grid.Row>
                      <Grid.Column>
                        <Input required onChange={(e, data)=> { this.setState({ signUpDetails: {...this.state.signUpDetails, contactNo: data.value}});}} type="number" fluid icon='mobile' iconPosition='left' placeholder='Please enter your contact number' />
                      </Grid.Column>  
                    </Grid.Row>
                    <Grid.Row>
                      <Grid.Column>
                        <Input required onChange={(e, data)=> { let payload= data.value; this.setState({ signUpDetails: {...this.state.signUpDetails, password: jwt.sign(payload, 'encryptedtokenblabla')}});}} type="password" fluid icon='user secret' iconPosition='left' placeholder='Please enter your password' />
                      </Grid.Column>  
                    </Grid.Row>
                    <Grid.Row>
                      <Grid.Column>
                        <Input required onChange={(e, data)=> { let payload= data.value; this.setState({ signUpDetails: {...this.state.signUpDetails, rePassword: jwt.sign(payload, 'encryptedtokenblabla')}});}} type="password" fluid icon='user secret' iconPosition='left' placeholder='Please confirm your password' />
                      </Grid.Column>  
                    </Grid.Row> 
                  </Grid>

                }
                <div style={{marginTop: '16px'}}>
                  <Button secondary onClick={() => this.setState({modalState: {...modalState, isOpen: false}})}>
                    cancel
                  </Button>
                  <Button loading={this.state.successFulEntry === 'loading'} primary onClick={() => {this.VerifyAuth();}}>
                    {modalState.isLogin ? 'Sign in' : 'Sign up'}
                  </Button>
                </div>  
              </form>
            </Modal.Content>
          </Modal>
      </div>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);