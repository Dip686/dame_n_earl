import React from 'react';
import { Image } from 'semantic-ui-react';

export default class EyeCatcher extends React.Component{

  render(){
    return(
      <div className="de-eye-catcher-wrapper">
        <div className="de-eye-catcher-container">
          <Image className="de-eye-catcher" src='resources/eye-catcher/free_delivery.jpeg'/>
        </div>
      </div>  
    );
  }
}