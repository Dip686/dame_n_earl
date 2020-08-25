import React from 'react';
import { connect } from 'react-redux';
import { Grid, Menu } from 'semantic-ui-react';
import EditProfile from './editProfile';

const mapStateToProps = (state, ownProps) => {
  return {
    activeUser: state.activeUser
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {

  }
}
class UserProfile extends React.Component {
  state = {
      userDetail: this.props.activeUser.activeUser,
      activeCategory: 'profile'
  };
  handleItemClick = (e, { name }) => this.setState({ activeCategory: name });
  render() {
    const userDetail = this.state.userDetail,
      activeCategory = this.state.activeCategory;
    return(
      <Grid className="de-userprofile">
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column width={3}>
              <Menu pointing vertical>
                <Menu.Item
                  name='profile'
                  active={activeCategory === 'profile'}
                  onClick={this.handleItemClick}
                > Profile
                </Menu.Item>
                <Menu.Item
                  name='orders'
                  active={activeCategory === 'orders'}
                  onClick={this.handleItemClick}
                >Orders
                </Menu.Item>
              </Menu>
            </Grid.Column>
            <Grid.Column width={13}>
              {
                <EditProfile userDetail = {userDetail} />
              }
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Grid>
    );
  }

}
export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);