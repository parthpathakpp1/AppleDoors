import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import './CategoryProduct.css'; // Import the custom CSS file
import Header from "../components/Header/Header";
import LandingFooter from "../components/Footer/Footer";

const CategoryProduct = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    if (params?.slug) getProductsByCat();
  }, [params?.slug]);

  const getProductsByCat = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/api/v1/product/product-category/${params.slug}`
      );
      setProducts(data?.products);
      setCategory(data?.category);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
<Header />
      <div className="container-pro mt-3 category">
        <h4 className="text-center">Category - {category?.name}</h4>
        <h6 className="text-center">{products?.length} result found </h6>
        <div className="category-cards-row">
          <div className="cards-overall-container">
          <div className="cards-container">
        {products?.map((p) => (
          <div className="category-card" key={p._id}>
            <img
              src={`http://localhost:8080/api/v1/product/product-photo/${p._id}`}
              className="card-img-top"
              alt={p.name}
              loading="lazy"
            />
            <div className="card-body">
              <div className="card-name-price">
                <h5 className="card-title">{p.name}</h5>
                <h5 className="card-title card-price">
                  {p.price.toLocaleString("en-US", {
                    style: "currency",
                    currency: "INR",
                  })}
                </h5>
              </div>
              <p className="card-text">
                {p.description.substring(0, 60)}...
              </p>
              <div className="card-name-price">
                <button
                  className="btn btn-info ms-1"
                  onClick={() => navigate(`/product/${p.slug}`)}
                >
                  More Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
          </div>
        </div>
      </div>
<LandingFooter />
</>
  );
};

export default CategoryProduct;
