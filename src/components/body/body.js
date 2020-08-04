import React from 'react';
import Home from '../home/home';
import Shop from '../shop/shop';

function getViz(headerSelected) {
  switch(headerSelected) {
    case 'Home': return <Home />;
    case 'Shop': return <Shop />;
    default: return <Home/>;
  }
}
export default class Body extends React.Component{

  render(){
    const headerSelected = this.props.headerSelected;
    return(
      <div>
        <div className="de-body">
          {getViz(headerSelected)}
        </div>
      </div>
    );
  }
}