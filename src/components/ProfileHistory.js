import React, {useEffect, useState} from 'react'
import '../styles/profileHistory.css';
import {useActionContext} from '../context/action_context';
import { useOrderContext } from '../context/order_context';
import {sortName, formatMoney} from '../utils/Tools';
import { useReviewContext } from '../context/review_context';


const ProfileHistory = () => {
    const {openFeedback} = useActionContext();
    const {
        getAllMyOrder,
        orderItem,
        orderLoading
    } = useOrderContext();
    const {setReivew} = useReviewContext();

    useEffect(()=>{
        getAllMyOrder();
    }, []);
    const handleFeedbackClick = (product) => {
        openFeedback();
        setReivew((oldReview)=>{
            return {...oldReview, product};
        });
    }

    return (
        <div className="account-history">
            <div className="title">
                <h2>History</h2>
            </div>
            <div className="history-order-container">
                <div className="title">
                    <h4>Your ordered</h4>
                </div>
                <div className="body-item">
                    {
                        orderLoading?(
                            <div className="order-history-loading">
                                Loading...
                            </div>
                        ):(
                            orderItem.map((item, index)=>{
                                index += 1;
                                const {
                                    name,
                                    image,
                                    price,
                                    discount,
                                    quantity,
                                    orderDate,
                                    status,
                                    product
                                } = item;
                                return (
                                    <div key={index} className="single-item">
                                        <p>{index}</p>
                                        <div className="p-info">
                                            <div className="img-box">
                                                <img src={image} alt="" />
                                            </div>
                                            <div className="info">
                                                <span><h4>Title: </h4> <p>{sortName(name, 60)}</p> </span>
                                                <span><h4>Price: </h4> <p>{formatMoney(price-discount)}</p> </span>
                                                <span><h4>Quantity:</h4> <p>{quantity}</p></span>
                                                <span><h4>Date: </h4> <p>{orderDate.split('T')[0]}</p> </span>
                                                {
                                                    status==="pending"?(
                                                        <button type="button" className="btn-feedback btn-pending">Pending</button>
                                                    ):(
                                                        <button type="button" className="btn-feedback" onClick={()=>handleFeedbackClick(product)}>Feedback</button>
                                                    )
                                                }
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default ProfileHistory
