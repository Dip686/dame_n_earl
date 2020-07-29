import React from 'react';
import { Image } from 'semantic-ui-react';

export default class Poster extends React.Component{

  render(){
    return(
      <>
        <div className="de-poster-text de-poster-heading">
          Lorem Ipsum <br/>
        </div>
        <div className="de-poster-text de-poster-subheading">Neque porro quisquam est qui <br/>dolorem ipsum</div>
        <img className="de-poster-image" style={{ background: '#e2dfdf' }} />
      </> 
    );
  }
}