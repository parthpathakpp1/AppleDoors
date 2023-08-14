import React,{useState} from 'react';
import Header from '../components/Header/Header';
import CartItemList from './CartItemList';
import LandingFooter from '../components/Footer/Footer';
import './CartPage.css';
import { useCart } from '../context/cart';
import { useAuth } from '../context/auth';
import { useNavigate } from 'react-router-dom';
const CartPage = () => {
  const [cart] = useCart();
  const [auth,setAuth]=useAuth();
  const navigate = useNavigate();
  const [orderPlaced, setOrderPlaced] = useState(false);

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const loadScript = (src) => {
    return new Promise((resovle) => {
      const script = document.createElement('script');
      script.src = src;

      script.onload = () => {
        resovle(true);
      }

      script.onerror = () => {
        resovle(false);
      }

      document.body.appendChild(script)
    })
  }

  const displayRazorpay = async (amount) => {
    const res  = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

    if(!res){
      alert('Unable to make Payment!');
      return;
    }

    const options = {
      key: 'rzp_test_Do9MIFfnRjXeSm', // razorpay_key
      currency: 'INR',
      amount: amount * 100 ,
      name: 'Apple Doors',
      description: 'Thanks for purchasing this product!',

      
     
      handler: function (response) {
        alert('Payment Successful!', response.razorpay_payment_id);

        if(response.razorpay_payment_id){
          setOrderPlaced(true);
        }
      },
      prefill: {
        name: 'Apple Doors'
      }
    }
    const paymentObject = new window.Razorpay(options);
    paymentObject.open()
  } 

  return (
    <div className="cart">
      <Header />
      <div className="cart-page">
        <div className="cart-content">
        <div className='cart-heading-content'>
        <h2 className="cart-heading">{`Hello  ${auth?.token && auth?.user?.name}`}</h2>
          <p className="cart-item-count">   {cart?.length
                                    ? `You Have ${getTotalItems()} items in your cart ${auth?.token ? "" : "please login to checkout !"
                                    }`
                                    : " Your Cart Is Empty"}</p>
        </div>
          
          <div className="cart-summary-section">
            <div className="cart-items">
              <CartItemList /> {/* Render the CartItemList component */}
            </div>
            <div className="cart-summary">
              <h2 className="cart-summary-heading">Cart Summary</h2>
              <p>Total | Checkout | Payment</p>
              <hr />
              <h4 className="cart-total">Total : ₹{getTotalPrice().toFixed(2)}</h4>
              {orderPlaced ? (
                <button className="order-placed-button">Order Placed</button>
              ) : (
                <button
                  onClick={() => {
                    displayRazorpay(getTotalPrice().toFixed(2));
                  }}
                  className="checkout-button"
                >
                  {auth?.user?.address ? 'Checkout' : 'Please Login to checkout'}
                </button>
              )}
              {auth?.user?.address ? (
                <div className="mb-3">
                  <h4 className="profile-heading">Current Address</h4>
                  <h5 className="profile-address">{auth?.user?.address}</h5>
                </div>
              ) : (
                <div className="mb-3">
                  {auth?.token ? (
                    <button
                      className="btn btn-outline-warning"
                      onClick={() => navigate('/dashboard/user/profile')}
                    >
                      Update Address
                    </button>
                  ) : (
                    <button
                      className="btn btn-outline-warning"
                      onClick={() =>
                        navigate('/login', {
                          state: '/cart',
                        })
                      }
                    >
                      Please Login to checkout
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <LandingFooter />
    </div>
  );
};

export default CartPage;