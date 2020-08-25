import React, {useState} from 'react';
import { Grid, Input, Dropdown, Header, Button, Icon } from 'semantic-ui-react';
import Address from './address';
import { useDispatch } from 'react-redux';
const genderOptions = [
  { key: 'female', text: 'female', value: 'female' },
  { key: 'male', text: 'male', value: 'male' },
  { key: 'other', text: 'other', value: 'other' },
];


const stateOptions = [
  { key: 'Andhra Pradesh', text: 'Andhra Pradesh', value: 'Andhra Pradesh' },
  { key: 'Andaman and Nicobar Islands', text: 'Andaman and Nicobar Islands', value: 'Andaman and Nicobar Islands' },
  { key: 'Arunachal Pradesh', text: 'Arunachal Pradesh', value: 'Arunachal Pradesh' },
  { key: 'Assam', text: 'Assam', value: 'Assam' },
  { key: 'Bihar', text: 'Bihar', value: 'Bihar' },
  { key: 'Chandigarh', text: 'Chandigarh', value: 'Chandigarh' },
  { key: 'Chhattisgarh', text: 'Chhattisgarh', value: 'Chhattisgarh' },
  { key: 'Dadar and Nagar Haveli', text: 'Dadar and Nagar Haveli', value: 'Dadar and Nagar Haveli' },
  { key: 'Daman and Diu', text: 'Daman and Diu', value: 'Daman and Diu' },
  { key: 'Delhi', text: 'Delhi', value: 'Delhi' },
  { key: 'Lakshadweep', text: 'Lakshadweep', value: 'Lakshadweep' },
  { key: 'Puducherry', text: 'Puducherry', value: 'Puducherry' },
  { key: 'Goa', text: 'Goa', value: 'Goa' },
  { key: 'Gujarat', text: 'Gujarat', value: 'Gujarat' },
  { key: 'Haryana', text: 'Haryana', value: 'Haryana' },
  { key: 'Himachal Pradesh', text: 'Himachal Pradesh', value: 'Himachal Pradesh' },
  { key: 'Jammu and Kashmir', text: 'Jammu and Kashmir', value: 'Jammu and Kashmir' },
  { key: 'Jharkhand', text: 'Jharkhand', value: 'Jharkhand' },
  { key: 'Karnataka', text: 'Karnataka', value: 'Karnataka' },
  { key: 'Kerala', text: 'Kerala', value: 'Kerala' },
  { key: 'Madhya Pradesh', text: 'Madhya Pradesh', value: 'Madhya Pradesh' },
  { key: 'Maharashtra', text: 'Maharashtra', value: 'Maharashtra' },
  { key: 'Manipur', text: 'Manipur', value: 'Manipur' },
  { key: 'Meghalaya', text: 'Meghalaya', value: 'Meghalaya' },
  { key: 'Mizoram', text: 'Mizoram', value: 'Mizoram' },
  { key: 'Nagaland', text: 'Nagaland', value: 'Nagaland' },
  { key: 'Odisha', text: 'Odisha', value: 'Odisha' },
  { key: 'Punjab', text: 'Punjab', value: 'Punjab' },
  { key: 'Rajasthan', text: 'Rajasthan', value: 'Rajasthan' },
  { key: 'Sikkim', text: 'Sikkim', value: 'Sikkim' },
  { key: 'Tamil Nadu', text: 'Tamil Nadu', value: 'Tamil Nadu' },
  { key: 'Telangana', text: 'Telangana', value: 'Telangana' },
  { key: 'Tripura', text: 'Tripura', value: 'Tripura' },
  { key: 'Uttar Pradesh', text: 'Uttar Pradesh', value: 'Uttar Pradesh' },
  { key: 'Uttarakhand', text: 'Uttarakhand', value: 'Uttarakhand' },
  { key: 'West Bengal', text: 'West Bengal', value: 'West Bengal' },
];

export default function EditProfile(props){
  const userDetail = props.userDetail;
  const [locality, updateLocality] = useState('');
  const [recieverName, updateRecieverName] = useState(userDetail.c_fname);
  const [recieverContact, updateRecieverContact] = useState(userDetail.c_contactno);
  const [city, updateCity] = useState(null);
  const [state, updateState] = useState(null);
  const [pin, updatePin] = useState(null);
  const [addNewAddress, updateAddNewAddress] = useState(false);

  const dispatch = useDispatch();
  const onAddressDelete = (key) => {
    userDetail.c_addresses.splice(key, 1);
    dispatch({
      type: 'UPDATE_ADDRESS',
      payload: userDetail.c_addresses
    });
  }
  const onAddressAdd = () => {
    if( recieverName && recieverContact && city && pin && state && locality) {
      userDetail.c_addresses.push({
        c_recieverName: recieverName,
        c_recieverContact: recieverContact,
        c_city: city,
        c_pin: pin,
        c_state: state,
        c_address: locality
      });
      dispatch({
        type: 'UPDATE_ADDRESS',
        payload: userDetail.c_addresses
      });
    }
  }
  return(
    <form target="_self" href="#">
      <Grid columns={1} className="de-custom-card">
        <Header as="h3">Personal Information: </Header>
        <Grid.Row>
          <Grid.Column width={2}>
            <Header as='h4'>Name: </Header>
          </Grid.Column>
          <Grid.Column width={2}>
            <Input value={userDetail.c_fname} disabled/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={2}>
            <Header as='h4'>Contact: </Header>
          </Grid.Column>
          <Grid.Column width={2}>
            <Input value={userDetail.c_contactno} disabled/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={2}>
            <Header as='h4'>gender: </Header>
          </Grid.Column>
          <Grid.Column width={2}>
            <Dropdown
              placeholder='Select gender'
              selection
              options={genderOptions}
              value={userDetail.c_gender}
              disabled
            />
          </Grid.Column>
        </Grid.Row>
        <Header as="h3">Address: </Header>
        <Grid.Row>
          {userDetail.c_addresses.map((address, index) => <Address key={index} addrIndex={index} onAddressDelete={onAddressDelete} address={address}/>)}
        </Grid.Row>  
        <Grid.Row>
          <Grid.Column width={2}>
            <Header as="h4">Add new Address</Header>
          </Grid.Column>
          {
            !addNewAddress ?
            <Button onClick={(e)=>{ updateAddNewAddress(true); e.preventDefault();}} icon labelPosition='left' basic primary>
              <Icon name='add' />
              Add new Address
            </Button>
            :<Grid.Column width={14}>
              <Grid>
                <Grid.Row>
                  <Grid.Column width={2}>
                    <Header as="h5">Reciever's name</Header>
                  </Grid.Column>
                  <Grid.Column width={2}>
                    <Input required value={recieverName} onChange={(e, data)=>{updateRecieverName(data.value)}}/>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
              <Grid>
                <Grid.Row>
                  <Grid.Column width={2}>
                    <Header as="h5">Reciever's contact</Header>
                  </Grid.Column>
                  <Grid.Column width={2}>
                    <Input required value={recieverContact} onChange={(e, data)=>{updateRecieverContact(data.value)}}/>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
              <Grid>
                <Grid.Row>
                  <Grid.Column width={2}>
                    <Header as="h5"> Locality/ steet/ house no. etc.</Header>
                  </Grid.Column>
                  <Grid.Column width={12}>
                    <Input required fluid value={locality} onChange={(e, data)=>{updateLocality(data.value)}} />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
              <Grid>
                <Grid.Row>
                  <Grid.Column width={2}>
                    <Header as="h5">City</Header>
                  </Grid.Column>
                  <Grid.Column width={2}>
                    <Input required value={city} onChange={(e, data)=>{updateCity(data.value)}}/>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
              <Grid>
                <Grid.Row>
                  <Grid.Column width={2}>
                    <Header as="h5">Pin code</Header>
                  </Grid.Column>
                  <Grid.Column width={2}>
                    <Input required type="number" value={pin} onChange={(e, data)=>{updatePin(data.value)}}/>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
              <Grid>
                <Grid.Row>
                  <Grid.Column width={2}>
                    <Header as="h5">State</Header>
                  </Grid.Column>
                  <Grid.Column width={2}>
                    <Dropdown
                      required
                      placeholder='Select State'
                      selection
                      options={stateOptions}
                      value={state}
                      onChange={(e, data)=>{updateState(data.value)}}
                    />
                  </Grid.Column>
                </Grid.Row>
              </Grid>  
            </Grid.Column>
          }
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={2}></Grid.Column>
          <Grid.Column width={10}>
            <Input type="submit" value="Update" onClick={(e)=>{ onAddressAdd();}}/>
          </Grid.Column>  
        </Grid.Row>
        </Grid>  
    </form>
  );
}