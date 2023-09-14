import React, { useState, useEffect } from "react";
import { useCart } from '../context/cart';
import { useAuth } from "../context/auth";
import { useNavigate } from "react-router-dom";
import DropIn from "braintree-web-drop-in-react";
import { AiFillWarning } from "react-icons/ai";
import toast from "react-hot-toast";
import axios from "axios";
import './CartItemList.css'

import './CartItemList.css';

const CartItemList = () => {
  const [auth, setAuth] = useAuth();
  const [cart, setCart] = useCart();
  const [clientToken, setClientToken] = useState("");
  const [instance, setInstance] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

   //get payment gateway token
   const getToken = async () => {
    try {
        const { data } = await axios.get("/api/v1/product/braintree/token");
        setClientToken(data?.clientToken);
    } catch (error) {
        console.log(error);
    }
};
useEffect(() => {
    getToken();
}, [auth?.token]);

//handle payments
const handlePayment = async () => {
    try {
        setLoading(true);
        const { nonce } = await instance.requestPaymentMethod();
        const { data } = await axios.post("/api/v1/product/braintree/payment", {
            nonce,
            cart,
        });
        setLoading(false);
        localStorage.removeItem("cart");
        setCart([]);
        navigate("/dashboard/user/orders");
        toast.success("Payment Completed Successfully ");
    } catch (error) {
        console.log(error);
        setLoading(false);
    }
};
 

  const removeCartItem = (pid) => {
    try {
        let myCart = [...cart];
        let index = myCart.findIndex((item) => item._id === pid);
        myCart.splice(index, 1);
        setCart(myCart);
        localStorage.setItem("cart", JSON.stringify(myCart));
    } catch (error) {
        console.log(error);
    }
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
        {cart.map(p => (
          <li key={p.name} className="cart-item">
           <img
                    src={`http://localhost:8080/api/v1/product/product-photo/${p._id}`}
                    className='product-img'
                    alt={p.name}
                    width={200}
                    loading="lazy"
                  />
            <div className="cart-item-details">
              <p className="cart-item-name">{p.name}</p>
              <p className="cart-item-price">₹{p.price}</p> {/* Display the price here */}
              <div className="item-quantity">
                <label>Quantity:</label>
                <input
                  type="number"
                  value={p.quantity}
                  onChange={(e) => updateQuantity(p.doorName, parseInt(e.target.value))}
                />
              </div>
              <button className="cart-item-remove" onClick={() => removeCartItem()}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartItemList;
  