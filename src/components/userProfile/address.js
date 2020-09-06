import React from 'react';
import { Grid, Icon } from 'semantic-ui-react';

export default function Address(props) {
  const receiverAddress = props.receiverAddress;
  return (
    <Grid columns={2}>
      <Grid.Row>
        <Grid.Column width={2}></Grid.Column>
        <Grid.Column width={12} className="de-custom-address">
          <p style={{fontWeight: 'bold', display: 'flex', justifyContent: 'space-between', cursor:'pointer'}}>
            {receiverAddress.receiverName} {receiverAddress.receiverContact}
            <Icon name="trash alternate outline" color="red" onClick={()=>{props.onAddressDelete(props.addrIndex)}}/>
          </p>
          <span>{receiverAddress.address}</span><br/>
          <span>{receiverAddress.city} {receiverAddress.state}</span> <span style={{fontWeight: 'bold'}}>{receiverAddress.pin}</span>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}