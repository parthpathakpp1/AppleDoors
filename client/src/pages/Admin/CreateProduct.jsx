import React, { useState, useEffect } from "react";
import './CreateProduct.css'
import LandingFooter from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import AdminMenu from '../../components/AdminMenu/AdminMenu';
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { Select } from "antd";
import { useNavigate } from "react-router-dom";
const { Option } = Select;

const CreateProduct = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [shipping, setShipping] = useState("");
  const [photo, setPhoto] = useState("");
  const [secondPhoto, setSecondPhoto] = useState("");

  //get all category
  const getAllCategory = async () => {
      try {
          const { data } = await axios.get("http://localhost:8080/api/v1/category/get-category");
          if (data?.success) {
              setCategories(data?.category);
          }
      } catch (error) {
          console.log(error);
          toast.error("Something wwent wrong in getting catgeory");
      }
  };

  useEffect(() => {
      getAllCategory();
  }, []);

  //create product function
  const handleCreate = async (e) => {
      e.preventDefault();
      try {
          const productData = new FormData();
          productData.append("name", name);
          productData.append("description", description);
          productData.append("price", price);
          productData.append("quantity", quantity);
          productData.append("photo", photo);
          productData.append("category", category);
          productData.append("secondPhoto", secondPhoto);
          const { data } = axios.post(
              "http://localhost:8080/api/v1/product/create-product",
              productData
          );
          if (data?.success) {
              toast.error(data?.message);
          } else {
              toast.success("Product Created Successfully");
              navigate("/dashboard/admin/products");
          }
      } catch (error) {
          console.log(error);
          toast.error("something went wrong");
      }
  };
  return (
    <>
 
    <Header />
    <ToastContainer />
    <div className='dashboard'>
      <div className='col-md-3'>
        <AdminMenu />
      </div>
      <div className='col-md-9'>
        <h1 className="creproduct-heading">Create Product</h1>
        <div className='m-1 w-75'>
          <Select
            bordered={false}
            placeholder='Select a category'
            size='large'
            showSearch
            className='form-select mb-3'
            onChange={(value) => {
              setCategory(value);
            }}
          >
            {categories?.map((c) => (
              <Option key={c._id} value={c._id}>
                {c.name}
              </Option>
            ))}
          </Select>
          <div className='mb-3'>
            <label className='upload-label'>
              {photo ? photo.name : 'Upload Photo'}
              <input
                type='file'
                name='photo'
                accept='image/*'
                onChange={(e) => setPhoto(e.target.files[0])}
                hidden
              />
            </label>
          </div>

          <div className='mb-3'>
            <label className='upload-label'>
                {secondPhoto ? secondPhoto.name : 'Upload Second Photo'}
                <input
                    type='file'
                    name='secondPhoto'
                    accept='image/*'
                    onChange={(e) => setSecondPhoto(e.target.files[0])}
                    hidden
                />
            </label>
        </div>
          <div className='mb-3 img-preview'>
            {photo && (
              <div className='text-center'>
                <img src={URL.createObjectURL(photo)} alt='product_photo' className='product-img' />
              </div>
            )}
          </div>
          <div className='mb-3 img-preview'>
            {secondPhoto && (
              <div className='text-center'>
                <img src={URL.createObjectURL(secondPhoto)} alt='product_photo' className='product-img' />
              </div>
            )}
          </div>
          <div className='mb-3'>
            <input
              type='text'
              value={name}
              placeholder='write a name'
              className='form-input'
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='mb-3'>
            <textarea
              value={description}
              placeholder='write a description'
              className='form-textarea'
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className='mb-3'>
            <input
              type='number'
              value={price}
              placeholder='write a Price'
              className='form-input'
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className='mb-3'>
            <input
              type='number'
              value={quantity}
              placeholder='write a quantity'
              className='form-input'
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <div className='mb-3'>
            <Select
              bordered={false}
              placeholder='Select Shipping '
              size='large'
              showSearch
              className='form-select mb-3'
              onChange={(value) => {
                setShipping(value);
              }}
            >
              <Option value='0'>No</Option>
              <Option value='1'>Yes</Option>
            </Select>
          </div>
          <div className='mb-3'>
            <button className='form-btn' onClick={handleCreate}>
              CREATE PRODUCT
            </button>
          </div>
        </div>
      </div>
    </div>
    <LandingFooter />
  </>
  )
}

export default CreateProduct