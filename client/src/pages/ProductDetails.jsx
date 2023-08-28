import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import LandingFooter from "../components/Footer/Footer";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "./ProductDetails.css";

const ProductDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);

  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/api/v1/product/get-product/${params.slug}`
      );
      setProduct(data?.product);
      if (data?.product._id && data?.product.category._id) {
        getSimilarProduct(data?.product._id, data?.product.category._id);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getSimilarProduct = async (pid, cid) => {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/api/v1/product/related-product/${pid}/${cid}`
      );
      setRelatedProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header />
      {Object.keys(product) != 0 && (
        <>
          <div className="product-details-container">
            <div className="product-details-image">
              <img
                src={`http://localhost:8080/api/v1/product/product-photo/${product._id}`}
                className="product-details-img-top"
                alt={product.name}
              />
            </div>
            <div className="product-details-info">
              <h1 className="product-details-title">Product Details</h1>
              <hr />
              <h3 className="product-details-name">{product.name}</h3>
              <p className="product-details-description">
                {product.description}
              </p>
              <div className="product-details-price">
                Price:{" "}
                {product?.price?.toLocaleString("en-US", {
                  style: "currency",
                  currency: "INR",
                })}
              </div>
              <div className="product-details-category">
                Category: {product?.category?.name}
              </div>
              <button className="product-details-btn">ADD TO CART</button>
            </div>
          </div>
          <hr />
        </>
      )}
      <div className="similar-products">
        <h2 className="similar-products-title">Similar Products ➡️</h2>
        {relatedProducts.length < 1 && (
          <p className="similar-products-text">
            No Similar Products found
          </p>
        )}
        <div className="similar-products-container">
          {relatedProducts?.map((p) => (
            <div className="similar-products-card" key={p._id}>
              <img
                src={`http://localhost:8080/api/v1/product/product-photo/${p._id}`}
                className="similar-products-card-img-top"
                alt={p.name}
              />
              <div className="similar-products-card-body">
                <h4 className="similar-products-card-title">{p.name}</h4>
                <div className="similar-products-card-price">
                  {p.price.toLocaleString("en-US", {
                    style: "currency",
                    currency: "INR",
                  })}
                </div>
                <p className="similar-products-card-description">
                  {p.description.substring(0, 80)}...
                </p>
                <button
                  className="similar-products-more-details-btn"
                  onClick={() => navigate(`/product/${p.slug}`)}
                >
                  More Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <LandingFooter />
    </>
  );
};

export default ProductDetails;