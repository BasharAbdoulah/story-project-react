import React from 'react'
import "../pages/cartStyles.css"


class CartItem extends React.Component {

  render() {
    const {name, price ,images, removeProducts, id} = this.props
    return (
      <div className='cart-item'>
  
        <div className="i-photo"><img  alt="" src={images} /></div>
  
        <p className="i-name"> {name} </p>
        <p className="i-number"> { id } </p>
        <p className="i-number"> {price} </p>
        <span className='i-btn' onClick={removeProducts}>CHECK OUT</span>
      </div>
    )
  }
}

export default CartItem