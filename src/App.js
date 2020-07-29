import React from 'react';
import './App.css';
import WebContainer from './components/web-container';
import Header from './components/header/header';
import Body from './components/body/body';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <WebContainer>
        <Header/>
        <Body/>
        <Footer/>
      </WebContainer>
    </div>
  );
}

export default App;
