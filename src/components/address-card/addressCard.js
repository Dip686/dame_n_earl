import React from 'react';
import { Button, Grid, Radio, Icon } from 'semantic-ui-react';

export default function AddressCard ({address, handleGotoNext, addressKey, deliveryAddKey}) {
  return (
    <Grid columns={3} className={ deliveryAddKey === addressKey ? 'de-addressItem de-addressitem-highlight' : 'de-addressItem' } onClick={()=> {handleGotoNext(2, addressKey);}}>
      <Grid.Row>
        <Grid.Column width={1} style={{ textAlign: 'center'}}> <Radio checked={deliveryAddKey === addressKey } /> </Grid.Column>
        <Grid.Column width={11}>
          <p style={{fontWeight: 'bold', display: 'flex', justifyContent: 'space-between', cursor:'pointer'}}>
            {address.receiverName} {address.receiverContact}
          </p>
          <span>{address.address}</span><br/>
          <span>{address.city} {address.state}</span> <span style={{fontWeight: 'bold'}}>{address.pin}</span>
        </Grid.Column>
        <Grid.Column width={4}>
        <Button icon labelPosition='right'>
          Deliver here
          <Icon name='right shipping' />
        </Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}