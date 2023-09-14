import React, { useState, useEffect } from "react";
import Header from '../../components/Header/Header'
import LandingFooter from '../../components/Footer/Footer'
import './Orders.css'
import UserMenu from '../../components/UserMenu/UserMenu'
import './Dashboard.css'
import axios from "axios";
import { useAuth } from "../../context/auth";
import moment from "moment";

const Orders = () => {

    const [orders, setOrders] = useState([]);
    const [auth, setAuth] = useAuth('');

    const getOrders = async () => {
        try {
            const { data } = await axios.get("http://localhost:8080/api/v1/auth/orders");
            setOrders(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (auth?.token) getOrders();
    }, [auth?.token]);

    return (
        <>
            <Header />
            <div className="orders-dashboard">
                <div className="orders-dashboard-row">
                    <div className="orders-dashboard-col3">
                        <UserMenu />
                    </div>
                    <div className="orders-dashboard-col9">
                        <h1 className="orders-title">All Orders</h1>
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
                                                <td>{o?.status}</td>
                                                <td>{o?.buyer?.name}</td>
                                                <td>{moment(o?.createAt).fromNow()}</td>
                                                <td>{o?.payment?.success ? "Success" : "Failed"}</td>
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
                                                        src={`http://localhost:8080/api/v1/product/product-photo/${p?.image_ids?.front}`}

                                                        className="orders-card-img"
                                                        alt={p?.name?.front}
                                                        width="100px"
                                                        height={"100px"}
                                                    />

                                                    <img
                                                        src={`http://localhost:8080/api/v1/product/product-photo/${p?.image_ids?.back}?photo=secondPhoto`}
                                                        className="cart-card-img-top"
                                                        alt={p?.name?.back}
                                                        width="100%"
                                                        height={"130px"}
                                                    />
                                                </div>
                                            ) : (
                                                <div className="orders-card-content">
                                                    <img
                                                        src={`http://localhost:8080/api/v1/product/product-photo/${p?._id}`}
                                                        className="orders-card-img"
                                                        alt={p?.name}
                                                        width="100px"
                                                        height={"100px"}
                                                    />

                                                    <img
                                                        src={`http://localhost:8080/api/v1/product/product-photo/${p?._id}?photo=secondPhoto`}
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
            </div>
            <LandingFooter />


        </>

    )
}

export default Orders