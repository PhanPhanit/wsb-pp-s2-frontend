import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {AiOutlineClose} from 'react-icons/ai';
import {HiOutlineUser} from 'react-icons/hi';
import {MdOutlineDateRange} from 'react-icons/md';
import '../../styles/dashFrm.css';
import { useActionContext } from '../../contexts/action_context';
import {useDashOrderContext} from '../../contexts/dash_order_context';
import axios from 'axios';
import {toast} from 'react-toastify';
import {formatMoney, sortName} from '../../../utils/Tools';
import {orderUrl} from '../../../UrlEndPoint';

const DashOrderFormUpdate = () => {
    const navigate = useNavigate();
    const {closeFormUpdate} = useActionContext();
    const {
        orders,
        viewOrderId,
        comfirmOrder
    } = useDashOrderContext();
    const [updateOrderLoading, setUpdateOrderLoading] = useState(false);
    const [dataFormOrder, setDataFormOrder] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();

        setUpdateOrderLoading(true);
        try {
            const url = `${orderUrl}/${viewOrderId}`;
            await comfirmOrder(url, dataFormOrder);
            setUpdateOrderLoading(false);
            toast.success("Update category successfully.");
            closeFormUpdate();
        } catch (error) {
            if(error.response){
                const {msg} = error.response.data;
                toast.error(msg)
            }
            setUpdateOrderLoading(false);
        }



    }
    const fetchLocalSingleOrder = (orderId) => {
        const singleOrder = orders.find(item=>item._id===orderId);
        setDataFormOrder(singleOrder);
    }

    const handleViewProduct = (productId) => {
        navigate(`/viewbook/${productId}`);
    }

    useEffect(()=>{
        fetchLocalSingleOrder(viewOrderId);
    }, []);

    if(Object.keys(dataFormOrder).length === 0){
        return (
            <div className="w-100 h-100 overflow-y-scroll"></div>
        );
    }

    const {
        user: {name: userName},
        orderDate,
        paymentIntent,
        phoneNumber,
        city,
        address,
        orderItem,
        total,
        delivery,
        status
    } = dataFormOrder;

  return (
      <div className="w-100 h-100 overflow-y-scroll">
        <form className="dash-form-wrapper box-center w-900">
            <div className="header">
                <h2>View Order Detail</h2>
                <AiOutlineClose className="close-icon" onClick={closeFormUpdate} />
            </div>
            <div className="body">
                <div className="d-flex gap-20">
                    <div className="order-user-date d-flex flex-direction-column flex-1 gap-10">
                        <span>User</span>
                        <div className="d-flex justify-content-space-between">
                            <span>{userName}</span>
                            <HiOutlineUser className="icon" />
                        </div>
                    </div>
                    <div className="order-user-date d-flex flex-direction-column flex-1 gap-10">
                        <span>Date</span>
                        <div className="d-flex justify-content-space-between">
                            <span>{orderDate.split('T')[0]}</span>
                            <MdOutlineDateRange className="icon" />
                        </div>
                    </div>
                </div>
                <div className="info">
                    <div>
                        <h4>Payment Intent: </h4> <span>{paymentIntent}</span>
                    </div>
                    <div>
                        <h4>Phone: </h4> <span>{phoneNumber}</span>
                    </div>
                    <div>
                        <h4>City: </h4> <span>{city}</span>
                    </div>
                    <div>
                        <h4>Address: </h4> <span>{address}</span>
                    </div>
                    <div>
                        <h4>Delivery: </h4> <span>{formatMoney(delivery)}</span>
                    </div>
                </div>
                <table className="tbl-order-item">
                    <thead>
                        <tr>
                            <th width="80">#</th>
                            <th className="title">Name</th>
                            <th width="100">Price</th>
                            <th width="100">Quantity</th>
                            <th width="100">Discount</th>
                            <th width="150">Total Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orderItem.map((item, index)=>{
                                const altIndex = index + 1;
                                const {product: productId, name, price, quantity, discount} = item;
                                return (
                                    <tr key={index} onClick={()=>handleViewProduct(productId)}>
                                        <td>{altIndex}</td>
                                        <td className="title">{sortName(name, 50)}</td>
                                        <td>{formatMoney(price)}</td>
                                        <td>{quantity}</td>
                                        <td>{formatMoney(discount * quantity)}</td>
                                        <td>{formatMoney(price * quantity)}</td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                    <tfoot>
                        <tr className="end-tr">
                            <td colSpan={5}>Total</td>
                            <td>{formatMoney(total)}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <div className="footer">
                <button type="button" className={updateOrderLoading?"btn-close-order disable":"btn-close-order"} onClick={closeFormUpdate}>Close</button>
                <button type="submit" className={updateOrderLoading || status==='success'?"btn-comfirm-order disable":"btn-comfirm-order"} onClick={handleSubmit}>
                    {updateOrderLoading?<div className="button-spinner"></div>:status==='success'?"Comfirm success":"Comfirm order"}
                </button>
            </div>
        </form>
    </div>
  )
}

export default DashOrderFormUpdate;