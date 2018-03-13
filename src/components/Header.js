import React from 'react';
import burger3 from './burger3.svg';

const Header =()=> {
  const style = {
    width:'45px',
    height:'45px'
  }

    return (
      <div className="">
        <nav className="navbar navbar-light bg-light justify-content-center">
          <a className="navbar-brand main-title text-danger" href="">
            <img src={burger3} style={style} className="d-inline-block align-top" alt="burger" />
            Burger Queen
          </a>
        </nav>
      </div>
    );
  
}

export default Header;
