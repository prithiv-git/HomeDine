import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(cart);
  }, []);

  const incrementQuantity = (index) => {
    setCartItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems[index].quantity += 1;
      localStorage.setItem('cart', JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  const decrementQuantity = (index) => {
    setCartItems((prevItems) => {
      const updatedItems = [...prevItems];
      if (updatedItems[index].quantity > 1) {
        updatedItems[index].quantity -= 1;
        localStorage.setItem('cart', JSON.stringify(updatedItems));
      }
      return updatedItems;
    });
  };

  const removeItem = (index) => {
    setCartItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  const totalAmount = cartItems.reduce((total, item) => {
    return total + (parseFloat(item.price.replace('₹', '')) * item.quantity);
  }, 0);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <p>{item.name}</p>
                <p>{item.price}</p>
                <div className="quantity-controls">
                  <button onClick={() => decrementQuantity(index)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => incrementQuantity(index)}>+</button>
                </div>
                <button className="remove-button" onClick={() => removeItem(index)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <p>Total Amount: ₹{totalAmount.toFixed(2)}</p>
          </div>

          <div className="proceed-to-pay">
            <button><Link to="/DeliveryAddressPage">Deliver to this address</Link></button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

