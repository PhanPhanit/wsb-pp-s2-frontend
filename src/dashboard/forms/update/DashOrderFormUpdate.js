import React, {useEffect, useState} from 'react';
import {AiOutlineClose} from 'react-icons/ai';
import {FaUserAlt} from 'react-icons/fa';
import '../../styles/dashFrm.css';
import { useActionContext } from '../../contexts/action_context';
import {useDashOrderContext} from '../../contexts/dash_order_context';
import axios from 'axios';
import {toast} from 'react-toastify';

const DashOrderFormUpdate = () => {
    const {closeFormUpdate} = useActionContext();
    const {
        orders,
        viewOrderId
    } = useDashOrderContext();
    const [updateOrderLoading, setUpdateOrderLoading] = useState(false);
    const [dataFormOrder, setDataFormOrder] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();
    }
    const fetchLocalSingleOrder = (orderId) => {
        const singleOrder = orders.find(item=>item._id===orderId);
        setDataFormOrder(singleOrder);
    }
    useEffect(()=>{
        fetchLocalSingleOrder(viewOrderId);
    }, []);

  return (
      <div className="w-100 h-100 overflow-y-scroll">
        <form className="dash-form-wrapper box-center w-900">
            <div className="header">
                <h2>View Order Detail</h2>
                <AiOutlineClose className="close-icon" onClick={closeFormUpdate} />
            </div>
            <div className="body">
                <div className="d-flex gap-20">
                    <div className="order-user d-flex flex-direction-column">
                        <span>User</span>
                        <div className="d-flex justify-content-space-between">
                            <span>Phan Phanit</span>
                            <FaUserAlt className="icon" />
                        </div>
                    </div>
                    <div className="order-date d-flex flex-direction-column">
                        <span>Date</span>
                        <div className="d-flex justify-content-space-between">
                            <span>Jun 12, 2022, 11:59:00PM</span>

                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">
                <button type="button" className={updateOrderLoading?"btn-close-order disable":"btn-close-order"} onClick={closeFormUpdate}>Close</button>
                <button type="submit" className={updateOrderLoading?"btn-comfirm-order disable":"btn-comfirm-order"} onClick={handleSubmit}>
                    {updateOrderLoading?<div className="button-spinner"></div>:"Comfirm order"}
                </button>
            </div>
        </form>
    </div>
  )
}

export default DashOrderFormUpdate;