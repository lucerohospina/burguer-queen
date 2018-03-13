import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Screen from './components/Screen';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Main
          itemName = 'Cafe Americano'
          itemPrice = 'S/. 2.5'
          description = 'Cafe pasado con o sin leche'
        />
        <Screen/>
      </div>
        );
      }
    }
    
export default App;
