import React from 'react';
import { Image } from 'semantic-ui-react';

export default class BottomEyeCatcher extends React.Component{

  render(){
    return(
      <div className="de-eye-catcher-container">
        <Image className="de-eye-catcher" src='resources/bottom-eye-catcher/buy1get1.jpeg'/>
        <Image className="de-eye-catcher" src='resources/bottom-eye-catcher/oxidisedearrings.jpeg'/>
        <Image className="de-eye-catcher" src='resources/bottom-eye-catcher/off.jpeg'/>
      </div>
    );
  }
}