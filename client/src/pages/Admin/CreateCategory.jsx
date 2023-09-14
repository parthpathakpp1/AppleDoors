import { useEffect, useState } from "react";
import './CreateCategory.css'
import '../Admin/AdminDashboard.css'
import LandingFooter from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import AdminMenu from '../../components/AdminMenu/AdminMenu';
import axios from 'axios'
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CategoryForm from "../../components/Form/CategoryForm";
import { Modal } from "antd";

const CreateCategory = () => {

    const [categories, setCategories] = useState([]);
    const [name, setName] = useState("");
    const [visible, setVisible] = useState(false);
    const [selected, setSelected] = useState(null);
    const [updatedName, setUpdatedName] = useState("");

     const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post("http://localhost:8080/api/v1/category/create-category", {
                name,
            });
            if (data?.success) {
                toast.success(`${name} is created`);
                getAllCategory();
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error("somthing went wrong in input form");
        }
    };

   //get all cat
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

//update category
const handleUpdate = async (e) => {
    e.preventDefault();
    try {
        const { data } = await axios.put(
            `http://localhost:8080/api/v1/category/update-category/${selected._id}`,
            { name: updatedName }
        );
        if (data?.success) {
            toast.success(`${updatedName} is updated`);
            setSelected(null);
            setUpdatedName("");
            setVisible(false);
            getAllCategory();
        } else {
            toast.error(data.message);
        }
    } catch (error) {
        console.log(error);
    }
};
//delete category
const handleDelete = async (pId) => {
    try {
        const { data } = await axios.delete(
            `http://localhost:8080/api/v1/category/delete-category/${pId}`
        );
        if (data.success) {
            toast.success(`category is deleted`);

            getAllCategory();
        } else {
            toast.error(data.message);
        }
    } catch (error) {
        toast.error("Somtihing went wrong");
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
          <h1 className="category-heading">Manage Category</h1>
          <div className='p-3 w-50'>
            <CategoryForm
              handleSubmit={handleSubmit}
              value={name}
              setValue={setName}
            />
          </div>
          <div className='w-75'>
            <table className='table'>
              <thead>
                <tr>
                  <th scope='col'>Name</th>
                  <th scope='col'>Actions</th>
                </tr>
              </thead>
              <tbody>
                {categories?.map((c) => (
                  <tr key={c._id}>
                    <td>{c.name}</td>
                    <td>
                      <button
                        className='btn btn-primary ms-2'
                        onClick={() => {
                          setVisible(true);
                          setUpdatedName(c.name);
                          setSelected(c);
                        }}
                      >
                        Edit
                      </button>
                      <button
                        className='btn btn-danger ms-2'
                        onClick={() => {
                          handleDelete(c._id);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Modal
            onCancel={() => setVisible(false)}
            footer={null}
            visible={visible}
          >
            <CategoryForm
              value={updatedName}
              setValue={setUpdatedName}
              handleSubmit={handleUpdate}
            />
          </Modal>
        </div>
      </div>
      <LandingFooter />
    </>
  )
}

export default CreateCategory