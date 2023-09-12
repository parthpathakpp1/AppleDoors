import React, { useState, useEffect } from "react";
import { useCart } from "../context/cart";
import { useAuth } from "../context/auth";
import { useNavigate } from "react-router-dom";
import DropIn from "braintree-web-drop-in-react";
import { AiFillWarning } from "react-icons/ai";
import Header from "../components/Header/Header";
import axios from "axios";
import toast from "react-hot-toast";
import LandingFooter from "../components/Footer/Footer";
import "./CartPage.css";

const CartPage = () => {
  const [auth, setAuth] = useAuth();
  const [cart, setCart] = useCart();
  const [clientToken, setClientToken] = useState("");
  const [instance, setInstance] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const updateCartItemQuantity = (pid, newQuantity) => {
    try {
      let updatedCart = cart.map((item) =>
        item._id === pid ? { ...item, quantity: newQuantity } : item
      );
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } catch (error) {
      console.log(error);
    }
  };

  //total price
  const calculateTotalPrice = () => {
    let total = 0;
    cart?.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total.toLocaleString("en-US", {
      style: "currency",
      currency: "INR",
    });
  };
  //detele item
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

  //get payment gateway token
  const getToken = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8080/api/v1/product/braintree/token"
      );
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
      const { data } = await axios.post(
        "http://localhost:8080/api/v1/product/braintree/payment",
        {
          nonce,
          cart,
        }
      );
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

  return (
    <>
      <Header />

      <div className="cart-page">
        <div className="cart-content">
          <div className="col-md-12">
            <h2 className="cart-heading">
              {`Hello  ${auth?.token && auth?.user?.name}`}
            </h2>
            <p className="cart-item-count">
              {cart?.length
                ? `You Have ${cart.length} items in your cart ${
                    auth?.token ? "" : "please login to checkout !"
                  }`
                : " Your Cart Is Empty"}
            </p>
          </div>
        </div>
        <div className="cart-container">
          <div className="cart-row ">
            <div className="">
              {cart?.map((p,index) =>
                !p.different ? (
                  <div className="cart-card-row" key={`cart-item-${p._id.front}-${p._id.back}-${index}`}>
                    <div className="cart-card-col">
                      <img
                        src={`http://localhost:8080/api/v1/product/product-photo/${p._id}`}
                        className="cart-card-img-top"
                        alt={p.name}
                        width="100%"
                        height={"130px"}
                      />

                      <img
                        src={`http://localhost:8080/api/v1/product/product-photo/${p._id}?photo=secondPhoto`}
                        className="cart-card-img-top"
                        alt={p.name}
                        width="100%"
                        height={"130px"}
                      />
                    </div>
                    <div className="cart-card-content">
                      <p>{p.name}</p>
                      <p>{p.description}</p>
                      <p>Price : ₹ {p.price}</p>
                      <div className="cart-quantity">
                        <label htmlFor={`quantity-${p._id}`}>Quantity: </label>
                        <select
                          id={`quantity-${p._id}`}
                          value={p.quantity}
                          onChange={(e) =>
                            updateCartItemQuantity(
                              p._id,
                              parseInt(e.target.value)
                            )
                          }
                        >
                          {[...Array(10)].map((_, i) => (
                            <option key={i} value={i + 1}>
                              {i + 1}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="cart-remove-btn">
                      <button
                        className="btn btn-danger"
                        onClick={() => removeCartItem(p._id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="cart-card-row" key={`cart-item-${p._id.front}-${p._id.back}-${index}`}>
                    <div className="cart-card-col">
                      <img
                        src={`http://localhost:8080/api/v1/product/product-photo/${p.image_ids.front}`}
                        className="cart-card-img-top"
                        alt={p.name.front}
                        width="100%"
                        height={"130px"}
                        loading="lazy"
                      />

                      <img
                        src={`http://localhost:8080/api/v1/product/product-photo/${p.image_ids.back}?photo=secondPhoto`}
                        className="cart-card-img-top"
                        alt={p.name.back}
                        width="100%"
                        height={"130px"}
                        loading="lazy"
                      />
                    </div>
                    <div className="cart-card-content">
                      <p>{p.name.front + " " + p.name.back}</p>
                      <p>{p.description.front + " " + p.description.back}</p>
                      <p>Price : ₹ {p.price}</p>
                      <div className="cart-quantity">
                        <label htmlFor={`quantity-${p._id}`}>Quantity: </label>
                        <select
                          id={`quantity-${p._id}`}
                          value={p.quantity}
                          onChange={(e) =>
                            updateCartItemQuantity(
                              p._id,
                              parseInt(e.target.value)
                            )
                          }
                        >
                          {[...Array(10)].map((_, i) => (
                            <option key={i} value={i + 1}>
                              {i + 1}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="cart-remove-btn">
                      <button
                        className="btn btn-danger"
                        onClick={() => removeCartItem(p._id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                )
              )}
            </div>
            <div className="cart-summary ">
              <h2>Cart Summary</h2>
              <p>Total | Checkout | Payment</p>
              <hr />
              <h4>Total : {calculateTotalPrice()} </h4>
              {auth?.user?.address ? (
                <>
                  <div className="cart-summary-content">
                    <h4>Current Address</h4>
                    <h5>{auth?.user?.address}</h5>
                    <button
                      className="btn btn-outline-warning"
                      onClick={() => navigate("/dashboard/user/profile")}
                    >
                      Update Address
                    </button>
                  </div>
                </>
              ) : (
                <div className="mb-3">
                  {auth?.token ? (
                    <button
                      className="btn btn-outline-warning"
                      onClick={() => navigate("/dashboard/user/profile")}
                    >
                      Update Address
                    </button>
                  ) : (
                    <button
                      className="btn btn-outline-warning"
                      onClick={() =>
                        navigate("/login", {
                          state: "/cart",
                        })
                      }
                    >
                      Plase Login to checkout
                    </button>
                  )}
                </div>
              )}
              <div className="mt-2">
                {!clientToken || !auth?.token || !cart?.length ? (
                  ""
                ) : (
                  <>
                    <DropIn
                      options={{
                        authorization: clientToken,
                        paypal: {
                          flow: "vault",
                        },
                      }}
                      onInstance={(instance) => setInstance(instance)}
                    />

                    <button
                      className="btn btn-primary"
                      onClick={handlePayment}
                      disabled={loading || !instance || !auth?.user?.address}
                    >
                      {loading ? "Processing ...." : "Make Payment"}
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <LandingFooter />
    </>
  );
};

export default CartPage;