import React from 'react';
import { useCart } from '../context/cart';
import './CartItemList.css';

const CartItemList = () => {
  const [cart, setCart] = useCart();

  const removeFromCart = (doorName) => {
    const updatedCart = cart.filter(item => item.doorName !== doorName);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const updateQuantity = (doorName, quantity) => {
    const updatedCart = cart.map(item =>
      item.doorName === doorName ? { ...item, quantity } : item
    );
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <div className="cart-item-list">
      <ul>
        {cart.map(item => (
          <li key={item.doorName} className="cart-item">
            <img src={item.imageUrl} alt={item.doorName} className="cart-item-image" />
            <div className="cart-item-details">
              <p className="cart-item-name">{item.doorName}</p>
              <p className="cart-item-price">${item.price}</p> {/* Display the price here */}
              <div className="item-quantity">
                <label>Quantity:</label>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.doorName, parseInt(e.target.value))}
                />
              </div>
              <button className="cart-item-remove" onClick={() => removeFromCart(item.doorName)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartItemList;
  