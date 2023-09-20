import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import './AdminOrders.css'
import Header from '../../components/Header/Header';
import LandingFooter from '../../components/Footer/Footer';
import AdminMenu from '../../components/AdminMenu/AdminMenu';
import { useAuth } from "../../context/auth";
import moment from "moment";
import { Select } from "antd";
const { Option } = Select;


const AdminOrders = () => {
    const [status, setStatus] = useState([
        "Not Process",
        "Processing",
        "Shipped",
        "deliverd",
        "cancel",
    ]);
    const [changeStatus, setCHangeStatus] = useState("");
    const [orders, setOrders] = useState([]);
    const [auth, setAuth] = useAuth();
    const getOrders = async () => {
        try {
            const { data } = await axios.get("https://apple-doors.onrender.com/api/v1/auth/all-orders");
            setOrders(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (auth?.token) getOrders();
    }, [auth?.token]);

    const handleChange = async (orderId, value) => {
        try {
            const { data } = await axios.put(`https://apple-doors.onrender.com/api/v1/auth/order-status/${orderId}`, {
                status: value,
            });
            getOrders();
        } catch (error) {
            console.log(error);
        }
    };
  return (
    <>
        <Header />
        <div className='admin-orders'>
         <div className='col-md-3'>
          <AdminMenu />
         </div>
         <div className='col-md-9'>
         <h1>All Orders</h1>
         {orders?.map((o, i) => {
                            return (
                                <div className="orders-border orders-shadow" key={i}>
                                    <table className="orders-table">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Buyer</th>
                                                <th scope="col">Date</th>
                                                <th scope="col">Payment</th>
                                                <th scope="col">Quantity</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>{i + 1}</td>
                                                <td>       <Select
                                                    bordered={false}
                                                    onChange={(value) => handleChange(o._id, value)}
                                                    defaultValue={o?.status}
                                                >
                                                    {status.map((s, i) => (
                                                        <Option key={i} value={s}>
                                                            {s}
                                                        </Option>
                                                    ))}
                                                </Select></td>
                                                <td>{o?.buyer?.name}</td>
                                                <td>{moment(o?.createAt).fromNow()}</td>
                                                <td>{o?.payment.success ? "Success" : "Failed"}</td>
                                                <td>{o?.products?.length}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="orders-container">
                                    {o?.products?.map((p, i) => (
                                            <div className="orders-card" key={p?._id}>
                                            {p?.different ? (
                                                <div className="orders-card-content">
                                                    <img
                                                        src={`https://apple-doors.onrender.com/api/v1/product/product-photo/${p?.image_ids?.front}`}

                                                        className="orders-card-img"
                                                        alt={p?.name?.front}
                                                        width="100px"
                                                        height={"100px"}
                                                    />

                                                    <img
                                                        src={`https://apple-doors.onrender.com/api/v1/product/product-photo/${p?.image_ids?.back}?photo=secondPhoto`}
                                                        className="cart-card-img-top"
                                                        alt={p?.name?.back}
                                                        width="100%"
                                                        height={"130px"}
                                                    />
                                                </div>
                                            ) : (
                                                <div className="orders-card-content">
                                                    <img
                                                        src={`https://apple-doors.onrender.com/api/v1/product/product-photo/${p?._id}`}
                                                        className="orders-card-img"
                                                        alt={p?.name}
                                                        width="100px"
                                                        height={"100px"}
                                                    />

                                                    <img
                                                        src={`https://apple-doors.onrender.com/api/v1/product/product-photo/${p?._id}?photo=secondPhoto`}
                                                        className="cart-card-img-top"
                                                        alt={p?.name}
                                                        width="100%"
                                                        height={"130px"}
                                                    />
                                                </div>)}
                                                <div className="orders-card-text">
                                                    <p>{p?.name?.front ? p?.name?.front + " " + p?.name?.back : p?.name}</p>
                                                    {/* <p>{p?.description?.substring(0, 30)}</p> */}
                                                    <p>Price : {p?.price}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
         </div>
        </div>
        <LandingFooter />
    </>
    
  )
}

export default AdminOrders