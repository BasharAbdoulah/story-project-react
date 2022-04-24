import React from "react";
import CartItem from "../components/CartItem";
import "./cartStyles.css";

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="cart">
        <h1>Your Cart</h1>
        <div className="carts-container">
          {this.props.Products.map((product, index) => {
            return (
              <CartItem
                name={product.name}
                price={product.price}
                key={index}
                id={index}
                images={this.props.images[index]}
                removeProducts={this.props.removeProducts}
              />
            );
          })}
        </div>
        <div className="check-out">
          <p>All Items</p>
          <div className="cart-info">
            <p>06</p>
            <p>$444</p>
            <span>CHECK OUT ALL</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
