import React, { useState } from 'react';
import './App.css';
import WebContainer from './components/web-container';
import Header from './components/header/header';
import Body from './components/body/body';
import Footer from './components/footer/footer';

function App() {
  const [headerSelected, setHeaderSelected] = useState('Shop');
  return (
    <div className="App">
      <WebContainer>
        <Header headerSelected={headerSelected} setHeaderSelected={setHeaderSelected} />
        <Body headerSelected={headerSelected} />
        <Footer/>
      </WebContainer>
    </div>
  );
}

export default App;
