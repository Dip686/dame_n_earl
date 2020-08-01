import React from 'react';
import { Image } from 'semantic-ui-react';

export default class BottomEyeCatcher extends React.Component{

  render(){
    return(
      <div className="de-btm-eye-catcher-wrapper">
        <div className="de-btm-eye-catcher-container">
          <Image className="de-btm-eye-catcher" src='resources/bottom-eye-catcher/catch1.png'/>
          <Image className="de-btm-eye-catcher" src='resources/bottom-eye-catcher/catch2.png'/>
          <Image className="de-btm-eye-catcher" src='resources/bottom-eye-catcher/catch3.png'/>
        </div>  
      </div>
    );
  }
}