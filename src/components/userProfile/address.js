import React from 'react';
import { Grid, Icon } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';

export default function Address(props) {
  const address = props.address;
  console.log(address);
  return (
    <Grid columns={2}>
      <Grid.Row>
        <Grid.Column width={2}></Grid.Column>
        <Grid.Column width={12} className="de-custom-address">
          <p style={{fontWeight: 'bold', display: 'flex', justifyContent: 'space-between', cursor:'pointer'}}>
            {address.c_recieverName} {address.c_recieverContact}
            <Icon name="trash alternate outline" color="red" onClick={()=>{props.onAddressDelete(props.addrIndex)}}/>
          </p>
          <span>{address.c_address}</span><br/>
          <span>{address.c_city} {address.c_state}</span> <span style={{fontWeight: 'bold'}}>{address.c_pin}</span>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}