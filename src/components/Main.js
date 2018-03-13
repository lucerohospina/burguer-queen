import React, { Component } from 'react';

class Main extends Component {
  render() {

    const {itemName, itemPrice, description} = this.props
    const cardStyle = {width: '15rem'} 

    return (
        <div className='card mt-3 ml-3' style = {cardStyle} >
          {/* <h5>{itemName}</h5>
          <p>{itemPrice}</p>
          <p>{description}</p> */}
          <button className="py-4">Cafe Americano</button>
        </div>
    )
  }
}

export default Main;
