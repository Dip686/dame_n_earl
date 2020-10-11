import React, {useState} from 'react';
import { Grid, Image, Button, Header, Icon, Modal, GridColumn } from 'semantic-ui-react';

function deliveryStatus (deliveryStatus) {
  switch(deliveryStatus) {
    case 'failed': return (<><Icon size='large' name='cancel' color='red' /><Header as='h5' style={{display: 'inline-block', marginTop: '0'}} color='red'> failed to deliver</Header></>);
    case 'userCancelled': return (<><Icon size='large' name='user cancel' color='orange' /><Header as='h5' style={{display: 'inline-block', marginTop: '0'}} color='orange'> cancelled </Header></>);
    default: return (<><Icon size='large' name='check circle outline' color='green' /><Header as='h5' style={{display: 'inline-block', marginTop: '0'}} color='green'> delivered </Header></>);
  }
}
function generateTrackingPath (location) {
  return (
    <Grid columns={2}>
      <Grid.Row>
        <Grid.Column width={4}>
          <div style={{ display: 'flex', justifyContent: 'center'}}><Icon name='circle' size='large' /></div>
          <div style={{ display: 'flex', justifyContent: 'center'}}><Icon name='long arrow alternate down' size='big' /></div>
        </Grid.Column>
        <Grid.Column width={12}>
          <div className="de-track-info-status">{ location.status } <span>{location.date}</span></div>
          <div className="de-track-info-detail">{ location.activity }</div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default function OrdersView(props){
  const orderDetails = props.orderDetails;
  const [open, setOpen] = useState(false);
  const [modalContentType, setModalContentType] = useState('track');
  const locations = [
    {
        "date": "2020-10-04 12:03:00",
        "status": "DLVD",
        "activity": "Delivered Shipment Delivered by SR: YadigiriAmarjinta, MobileNo: 7875274025, DeliveryDate: 2020-10-04 12:03:17, Receiver Name: Sharvaree karandikar ",
        "location": "PNQ/JMR, PUNE, MAHARASHTRA"
    },
    {
        "date": "2020-10-04 09:37:00",
        "status": "OFD",
        "activity": "Out for Delivery Out for delivery: 61602-YadigiriAmarjinta-PDS2027809374461602-FromMob",
        "location": "PNQ/JMR, PUNE, MAHARASHTRA"
    },
    {
        "date": "2020-10-04 08:48:00",
        "status": "RAD",
        "activity": "Reached at Destination InScan",
        "location": "PNQ/JMR, PUNE, MAHARASHTRA"
    },
    {
        "date": "2020-10-03 11:38:00",
        "status": "IT",
        "activity": "InTransit Shipment added in ParentBagNo: NXBB03653781",
        "location": "PNQ/CHK, Pune, Maharashtra"
    },
    {
        "date": "2020-09-27 19:52:00",
        "status": "PKD",
        "activity": "Picked Shipment InScan from Manifest",
        "location": "Asansol, Asansol, WEST BENGAL"
    },
    {
        "date": "2020-09-27 09:22:00",
        "status": "OFP",
        "activity": "Out for Pickup ",
        "location": "Asansol, Asansol, WEST BENGAL"
    },
    {
        "date": "2020-09-26 22:21:00",
        "status": "DRC",
        "activity": "Data Received ",
        "location": "Asansol, Asansol, WEST BENGAL"
    }
];
  const orderTemplate = (order)=> {
    return (
      <Grid columns={1} style={{border: '1px solid #c4c1c1'}}>
        <Grid.Row>
          <Grid columns={3}>
            <br />
            <Grid.Row>
              <Grid.Column width={7}><Icon size='large' name='shopping basket' /></Grid.Column>
              <Grid.Column width={5}><Header as='h4'>Total: {order.totalAmount}</Header></Grid.Column>
              <Grid.Column width={3}>{deliveryStatus(order.deliveryStatus)}</Grid.Column>
            </Grid.Row>
          </Grid>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column onClick={()=>{setOpen(true); setModalContentType('product')}} width={2}><Header className='order-actions-links' as='h5'> See product details</Header></Grid.Column>
          <Grid.Column onClick={()=>{setOpen(true); setModalContentType('track')}} width={2}><Header className='order-actions-links' as='h5'> Track Order</Header></Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
  return(
    <Grid columns={1}>
      <Grid.Row>
        {
          orderDetails.map((order) => orderTemplate(order))
        }
      </Grid.Row>
      <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      >
        <Modal.Header> {modalContentType==='track' ? 'Track Order': 'Product Details'}</Modal.Header>
        <Modal.Content>
          {
            modalContentType==='track' ? 
              locations.map((location)=>generateTrackingPath(location)).reverse()
              : 'Product Details'
          }
        </Modal.Content>
      </Modal>
    </Grid>
   );
}