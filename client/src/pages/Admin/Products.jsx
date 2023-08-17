import React, { useState, useEffect } from 'react';
import './Products.css'; // Import the CSS file
import Header from '../../components/Header/Header';
import LandingFooter from '../../components/Footer/Footer';
import AdminMenu from '../../components/AdminMenu/AdminMenu';
import axios from 'axios'
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    try {
      const { data } = await axios.get('http://localhost:8080/api/v1/product/get-product');
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      toast.error('Something Went Wrong');
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      <Header />
      <div className='dashboard'>
        <div className='col-md-3'>
          <AdminMenu />
        </div>
        <div className='col-md-9'>
          <h1 className='allproducts-heading'>All Products List</h1>
          <div className='product-container'>
            {products?.map((p) => (
              <Link
                key={p._id}
                to={`/dashboard/admin/product/${p.slug}`}
                className='product-link'
              >
                <div className='product-card'>
                  <img
                    src={`http://localhost:8080/api/v1/product/product-photo/${p._id}`}
                    className='product-img'
                    alt={p.name}
                  />
                  <div className='product-details'>
                    <h5 className='product-title'>{p.name}</h5>
                    <p className='product-description'>{p.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <LandingFooter />
    </>
  );
};

export default Products;
