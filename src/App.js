import React, { Component } from 'react';
import burger3 from './burger3.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-light bg-light justify-content-center">
          <a className="navbar-brand main-title text-danger" href="#">
          <img src={burger3} width="45" height="45" className="d-inline-block align-top" alt="burger"/>
              Burger Queen
          </a>
         </nav>
         <div className="container-fluid">
          un contenedor
         </div>
      </div>
        );
      }
    }
    
    export default App;
