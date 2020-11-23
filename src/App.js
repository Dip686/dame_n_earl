import React, { useState } from 'react';
import './App.css';
import WebContainer from './components/web-container';
import Header from './components/header/header';
import Body from './components/body/body';
import Footer from './components/footer/footer';
import storeGenerator from './reducer/index';
import { Provider } from 'react-redux';
import {
  BrowserRouter
} from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react'

function App() {
  const [headerSelected, setHeaderSelected] = useState('Home');
  const { store, persistor} = storeGenerator();
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
