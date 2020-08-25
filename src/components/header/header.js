import { Dropdown, Menu, Icon, Image, Grid, Popup, Header as Heading, Button, Modal, Input } from 'semantic-ui-react';
import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return {
    activeUser: state.activeUser
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    signInActiveUser: userDetail => {
      dispatch({
        type: 'ADD_ACTIVE_USER',
        payload: userDetail
      });
    },
    signOutActiveUser: userDetail => {
      dispatch({
        type: 'ADD_ACTIVE_USER',
        payload: userDetail
      });
    }
  }
}

class Header extends React.Component {
  constructor(){
    super();
    this.state = {
      userName: '',
      password: '',
      isLoginModal: true,
      successFulEntry: 'in progress',
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
        this.setState({successFulEntry: 'sending'});
        axios.post('http://localhost:5000/api/v1/auth/login', {
          "email": state.userName,
          "password": state.password
        })
        .then(function (response){
          if (response.data.success) {
            that.props.signInActiveUser({
              "name": "Sourav Debnath",
              "avatar": "//www.gravatar.com/avatar/9d9d58a0780d938cba1da99ddd7353a3?s=200&r=pg&d=mm",
              c_fname: "Sourav Debnath",
              c_email: "sourav2012d@gmal.com",
              c_contactno: "8981692691",
              c_addresses: [{
                c_recieverName: 'Debu1',
                c_recieverContact: '9900990099',
                c_city: "Chnandernagore",
                c_pin: "712137",
                c_state: "West bengal",
                c_address: "dinemar danga, cgr"
              },
              {
                c_recieverName: 'Debu2',
                c_recieverContact: '9900990099',
                c_city: "Chnandernagore",
                c_pin: "712137",
                c_state: "West bengal",
                c_address: "dinemar danga, cgr"
              },
              {
                c_recieverName: 'Debu3',
                c_recieverContact: '9900990099',
                c_city: "Chnandernagore",
                c_pin: "712137",
                c_state: "West bengal",
                c_address: "dinemar danga, cgr"
              }],
              c_gender: "male",
              c_usertype: "u3"
            });
            that.setState({modalState: {...state.modalState, isOpen: false, successFulEntry: 'in progress'}});
          } else {
            that.setState({modalState: {...state.modalState, isOpen: false, successFulEntry: 'in progress'}});
          }
        })
        .catch(function (error) {
          that.setState({successFulEntry: 'failed'});
        });
      } else {

      }
    } else {

    }
  }
  render() {
    const activeItem = this.props.headerSelected;
    const modalState = this.state.modalState;
    const activeUser = this.props.activeUser.activeUser;

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
                  <Button onClick={()=>{this.props.signOutActiveUser(null)}}>Logout</Button>
                  <Link to="/user/profile">
                    <a>Visit your Profile</a>
                  </Link>
                  </>
                  :
                  <>
                    <span>To access account and manage orders</span>
                    <div>
                      <Button
                        icon='sign-in'
                        color='teal'
                        content='Sign in'
                        onClick={() => this.setState({ isLoginModal: true, modalState: {...modalState, isOpen: true,isLogin: true }})}
                      />
                      <Button
                        icon='signup'
                        color='blue'
                        content='Sign up'
                        onClick={() => this.setState({ isLoginModal: false, modalState: {...modalState, isOpen: true, isLogin: false}})}
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
            <Modal.Header> {this.state.isLoginModal ? 'Login' : 'SignUp' }</Modal.Header>
            <Modal.Content>
              <form onSubmit={(e)=>{ this.VerifysignIn(); e.preventDefault();}}>
                <span>Please enter your details: </span>
                {this.state.successFulEntry ==='failed'
                  ?
                  <span style={{color: 'red'}}> Login Failed</span>
                  : ''
                }
                {modalState.isLogin ?
                  <Grid columns={1}>
                    <Grid.Row>
                      <Grid.Column>
                        <Input required onChange={(e, data)=> { this.setState({userName: data.value});}} fluid icon='user' iconPosition='left' placeholder='Please enter your user name' />
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row> 
                      <Grid.Column>
                        <Input required onChange={(e, data)=> { this.setState({password: data.value});}} type="password" fluid icon='user secret' iconPosition='left' placeholder='Please enter your password' />
                      </Grid.Column>  
                    </Grid.Row> 
                  </Grid>  
                  :
                  <Grid columns={1}>
                    <Grid.Row>
                      <Grid.Column>
                        <Input required fluid icon='mail' iconPosition='left' placeholder='Please enter your email id' />
                      </Grid.Column>  
                    </Grid.Row>
                    <Grid.Row>
                      <Grid.Column>
                        <Input required type="number" fluid icon='mobile' iconPosition='left' placeholder='Please enter your mobile number' />
                      </Grid.Column>  
                    </Grid.Row>
                    <Grid.Row>
                      <Grid.Column>
                        <Input required type="password" fluid icon='user secret' iconPosition='left' placeholder='Please enter your password' />
                      </Grid.Column>  
                    </Grid.Row>
                    <Grid.Row>
                      <Grid.Column>
                        <Input required type="password" fluid icon='user secret' iconPosition='left' placeholder='Please confirm your password' />
                      </Grid.Column>  
                    </Grid.Row> 
                  </Grid>

                }
                <div style={{marginTop: '16px'}}>
                  <Button secondary onClick={() => this.setState({modalState: {...modalState, isOpen: false}})}>
                    cancel
                  </Button>
                  <Button loading={this.state.successFulEntry === 'loading'} primary onClick={() => {this.VerifysignIn();}}>
                    Sign in
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