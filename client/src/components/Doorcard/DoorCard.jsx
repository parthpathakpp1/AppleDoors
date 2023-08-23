    import React,{useState,useEffect} from 'react';
    import './DoorCard.css';
    import { motion } from 'framer-motion';
    import { useCart } from '../../context/cart';
    import { toast } from 'react-toastify';
    import 'react-toastify/dist/ReactToastify.css';
    import axios from 'axios';
    import FilterSection from '../FilterSection/FilterSection';
    import Header from '../Header/Header.jsx'
    import LandingFooter from '../Footer/Footer';
    import Customization from '../../pages/Customization';
    import { Link, Element } from 'react-scroll';


    const DoorCard = ({ imageUrl, doorName,price }) => {
      const [cart, setCart] = useCart();
      const [products,setProducts] = useState([]);
      const [categories,setCategories] = useState([]);
      const [total, setTotal] = useState(0);
      const [page, setPage] = useState(1);

      const getAllProducts = async () => {
        try{
          const{data} = await axios.get('http://localhost:8080/api/v1/product/get-product');
          setProducts(data.products);
        }catch(error){
          console.log(error);
        }
      }

      useEffect(() => {
        getAllProducts();
      },[]);
      

      const isInCart = cart.some(item => item.doorName === doorName); 
      const cardVariants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20, zIndex: 0, boxShadow: "none" },
      };

      const handleCartAction = () => {
        if (isInCart) {
          const updatedCart = cart.filter(item => item.doorName !== doorName);
          setCart(updatedCart);
          localStorage.setItem('cart', JSON.stringify(updatedCart));
          toast.error('Removed from Cart', {
            position: toast.POSITION.BOTTOM_RIGHT
          });
        } else {
          const updatedCart = [
            ...cart,
            { imageUrl, doorName, price, quantity: 1 } // Include price and set default quantity to 1
          ];
          setCart(updatedCart);
          localStorage.setItem('cart', JSON.stringify(updatedCart));
          toast.success('Added to Cart', {
            position: toast.POSITION.BOTTOM_RIGHT
          });
        }
      };
      

      return (
      <>
      <Header />
        <motion.div
          className='Doorcard-container'
          variants={cardVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <div className="door-card">
            <img
              src={imageUrl}
              alt={doorName}
              className="door-image"
            />
            <div className="door-content">
            {products?.map((p) => (
                  <div className='item-card'>
                    <img
                      src={`http://localhost:8080/api/v1/product/product-photo/${p._id}`}
                      className='item-img'
                      alt={p.name}
                    />
                    <div className='item-details'>
                      <h5 className='item-title'>{p.name}</h5>
                      <p className='item-description'>{p.description}</p>
                      <strong>₹{p.price}</strong>
                      <div className="button-container">
                      <Link
                to="customization-section"
                spy={true}
                smooth={true}
                offset={-70} // Adjust the offset if needed
                duration={500}
              >
                  <motion.button className="btn-customize">Customize</motion.button>
                </Link>
                <motion.button
                  className="btn-add-to-cart"
                  onClick={() => {
                                                  setCart([...cart, p]);
                                                  localStorage.setItem(
                                                      "cart",
                                                      JSON.stringify([...cart, p])
                                                  );
                                                  toast.success("Item Added to cart");
                                              }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                
                >
                  Add to Cart
                </motion.button>
              </div>
                    </div>
                  </div>
                
              ))}
            
            </div>
            
          </div>

          <Element name="customization-section">
          <div className='customization-section'>
            <Customization />
          </div>
        </Element>
        </motion.div>
        <LandingFooter />
        </>
      );
    };

    export default DoorCard;
