import React, { Component } from 'react';
import burger from './burger.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-light bg-light justify-content-center">
          <a className="navbar-brand main-title text-warning" href="#">
          <img src={burger} width="45" height="45" className="d-inline-block align-top" alt="burger"/>
              Burger Queen
          </a>
         </nav>
      </div>
        );
      }
    }
    
    export default App;
