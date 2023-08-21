import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Country from './components/Country';
import { render } from 'react-dom';

class App extends Component{
  render () {
  return (
    <div className="App">
      <header className="App-header">
        <Country/>
      </header>
      
    </div>
  );
}
}

export default App;
