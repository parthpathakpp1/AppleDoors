import React, { useState, useEffect } from "react";
import Header from '../../components/Header/Header';
import LandingFooter from '../../components/Footer/Footer';
import AdminMenu from '../../components/AdminMenu/AdminMenu';
import axios from 'axios'
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Select } from "antd";
import { useNavigate, useParams } from "react-router-dom";
const { Option } = Select;
import './UpdateProduct.css'

const UpdateProduct = () => {
    const navigate = useNavigate();
    const params = useParams();
    const [categories, setCategories] = useState([]);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [quantity, setQuantity] = useState("");
    const [shipping, setShipping] = useState("");
    const [photo, setPhoto] = useState("");
    const [secondPhoto, setSecondPhoto] = useState("");
    const [id, setId] = useState("");

    
    //get single product
    const getSingleProduct = async () => {
        try {
            const { data } = await axios.get(
                `http://localhost:8080/api/v1/product/get-product/${params.slug}`
            );
            setName(data.product.name);
            setId(data.product._id);
            setDescription(data.product.description);
            setPrice(data.product.price);
            setPrice(data.product.price);
            setQuantity(data.product.quantity);
            setShipping(data.product.shipping);
            setCategory(data.product.category._id);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getSingleProduct();
        //eslint-disable-next-line
    }, []);
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
    const handleUpdate = async (e) => {
      e.preventDefault();
      try {
        const productData = new FormData();
        productData.append("name", name);
        productData.append("description", description);
        productData.append("price", price);
        productData.append("quantity", quantity);
        photo && productData.append("photo", photo);
        secondPhoto && productData.append("secondPhoto", secondPhoto); // Add this line
        productData.append("category", category);
        
        const { data } = axios.put(
          `http://localhost:8080/api/v1/product/update-product/${id}`,
          productData
        );
        if (data?.success) {
          toast.error(data?.message);
        } else {
          toast.success("Product Updated Successfully");
          navigate("/dashboard/admin/products");
        }
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong");
      }
    };
    


    //delete a product
    const handleDelete = async () => {
        try {
            let answer = window.prompt("Are You Sure want to delete this product ? ");
            if (!answer) return;
            const { data } = await axios.delete(
                `http://localhost:8080/api/v1/product/delete-product/${id}`
            );
            toast.success("Product DEleted Succfully");
            navigate("/dashboard/admin/products");
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    };
  return (
    <>
    <Header />
    <ToastContainer />
      <div className='container'>
        <div className='col-md-3'>
          <AdminMenu />
        </div>
        <div className='col-md-9'>
          <h1 className='update-product-title'>Update Product</h1>
          <div className='update-product-content'>
            <Select
              bordered={false}
              placeholder='Select a category'
              size='large'
              showSearch
              className='update-product-select'
              onChange={(value) => {
                setCategory(value);
              }}
              value={category}
            >
              {categories?.map((c) => (
                <Option key={c._id} value={c._id}>
                  {c.name}
                </Option>
              ))}
            </Select>

            <div className='update-product-upload'>
              <label className='update-product-upload-label'>
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

            <div className='update-product-upload'>
  <label className='update-product-upload-label'>
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


            <div className='update-product-image'>
              {photo ? (
                <div className='update-product-image-preview'>
                  <img
                    src={URL.createObjectURL(photo)}
                    alt='product_photo'
                    height={'200px'}
                    className='img img-responsive'
                  />
                </div>
              ) : (
                <div className='update-product-image-preview'>
                  <img
                    src={`/api/v1/product/product-photo/${id}`}
                    alt='product_photo'
                    height={'200px'}
                    className='img img-responsive'
                  />
                </div>
              )}
            </div>

            <div className='update-product-image'>
              {secondPhoto ? (
                <div className='update-product-image-preview'>
                  <img
                    src={URL.createObjectURL(secondPhoto)}
                    alt='product_photo'
                    height={'200px'}
                    className='img img-responsive'
                  />
                </div>
              ) : (
                <div className='update-product-image-preview'>
                  <img
                    src={`/api/v1/product/product-photo/${id}`}
                    alt='product_photo'
                    height={'200px'}
                    className='img img-responsive'
                  />
                </div>
              )}
            </div>

            <input
              type='text'
              value={name}
              placeholder='write a name'
              className='form-control update-product-input'
              onChange={(e) => setName(e.target.value)}
            />

            <textarea
              type='text'
              value={description}
              placeholder='write a description'
              className='form-control update-product-input'
              onChange={(e) => setDescription(e.target.value)}
            />

            <input
              type='number'
              value={price}
              placeholder='write a Price'
              className='form-control update-product-input'
              onChange={(e) => setPrice(e.target.value)}
            />

            <input
              type='number'
              value={quantity}
              placeholder='write a quantity'
              className='form-control update-product-input'
              onChange={(e) => setQuantity(e.target.value)}
            />

            <Select
              bordered={false}
              placeholder='Select Shipping '
              size='large'
              showSearch
              className='update-product-select'
              onChange={(value) => {
                setShipping(value);
              }}
              value={shipping ? 'yes' : 'No'}
            >
              <Option value='0'>No</Option>
              <Option value='1'>Yes</Option>
            </Select>

            <button
              className='btn btn-primary update-product-button'
              onClick={handleUpdate}
            >
              UPDATE PRODUCT
            </button>

            <button
              className='btn btn-danger update-product-button'
              onClick={handleDelete}
            >
              DELETE PRODUCT
            </button>
          </div>
        </div>
      </div>
    <LandingFooter />
    </>
  )
}

export default UpdateProduct