import React, {useState} from 'react'
import '../styles/checkout.css'
import StripeFormContainer from './StripeFormContainer';
import {useCartContext} from '../context/cart_context';
import {IoArrowBackSharp} from 'react-icons/io5';
import { useOrderContext } from '../context/order_context';
import {toast} from 'react-toastify';

const Checkout = () => {
    const {
        paymentInfo: {
            phoneNumber,
            city,
            address
        },
        handleSetPaymentInfo,
    } = useOrderContext();
    const {cart} = useCartContext();
    const [isCreditCheck, setIsCreditCheck] = useState(true);
    const [isPaypalCheck, setIsPaypalCheck] = useState(false);
    const [step, setStep] = useState(1);
    const handleChange = (e) => {
        if(e.target.name==='paypal'){
            setIsPaypalCheck(true);
            setIsCreditCheck(false);
        }
        if(e.target.name==='visa-master'){
            setIsPaypalCheck(false);
            setIsCreditCheck(true);
        }
    }

    const handleNextPage = () => {
        if(!phoneNumber){
            toast.error("Please fill phone number!");
            return;
        }else if(city==="0"){
            toast.error("Please select city!");
            return;
        }else if(!address){
            toast.error("Please fill address!");
            return;
        }
        setStep(2);
    }

    if(cart<1){
        return (
            <div className="full-height">
                <div className="checkout-loading"><div></div><div></div><div></div><div></div></div>
            </div>
        );
    }

    return (
        <section className="section-checkout">
            <div className="checkout-wrapper">
                <div className="header">
                    {
                        step===2 && <IoArrowBackSharp onClick={()=>setStep(1)} className="icon" />
                    }
                    <h2>Payment</h2>
                </div>
                {
                    step===1?(
                        <div className="body">
                            <div className="body-title">
                                <h3>Billing Details</h3>
                            </div>
                            <form className="frm-address">
                                <div className="frm-control">
                                    <label htmlFor="phonNumber">Phone number</label>
                                    <input
                                        type="number"
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        className="input-control"
                                        placeholder="Your phone number"
                                        value={phoneNumber}
                                        onChange={handleSetPaymentInfo}
                                    />
                                </div>
                                <div className="frm-control">
                                    <label htmlFor="city">City</label>
                                    <select name="city" id="city" className="select-control" value={city} onChange={handleSetPaymentInfo}>
                                        <option value="0">---- Please select your city ----</option>
                                        <option value="Phnom Penh">Phnom Penh</option>
                                        <option value="Banteay Meanchey">Banteay Meanchey</option>
                                        <option value="Battambang">Battambang</option>
                                        <option value="Kampong Chhnang">Kampong Chhnang</option>
                                    </select>
                                </div>
                                <div className="frm-control">
                                    <label htmlFor="address">Address</label>
                                    <input
                                        type="text"
                                        id="address"
                                        className="input-control"
                                        placeholder="Your Address"
                                        name="address"
                                        value={address}
                                        onChange={handleSetPaymentInfo}
                                    />
                                </div>
                            </form>

                            <div className="body-title">
                                <h3>Payment Option</h3>
                            </div>

                            <div className="payment-option">
                                <label htmlFor="visa-master" className={`${isCreditCheck?"active":""}`}>
                                    <input checked={isCreditCheck} type="radio" id="visa-master" name="visa-master" onChange={handleChange} />
                                    <div className="img-box">
                                        <img src="https://www.pngall.com/wp-content/uploads/2017/05/Visa-Logo-PNG-Pic.png" alt="Visa" />
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/1200px-MasterCard_Logo.svg.png" alt="master" />
                                    </div>
                                </label>
                                <label htmlFor="paypal" className={`${isPaypalCheck?"active":""}`}>
                                    <input checked={isPaypalCheck} type="radio" id="paypal" name="paypal" onChange={handleChange} />
                                    <div className="img-box">
                                        <img src="https://lavigneduroy.com/wp-content/uploads/2016/10/paypal-784404_960_720.png" alt="" />
                                    </div>
                                </label>
                            </div>
                            <div className="button-wrapper">
                                <button type="button" onClick={handleNextPage}>Next</button>
                            </div>
                        </div>
                    ):(
                        <div className="body">
                            <div className="cart-title">
                                <h2>Enter Your Cart Detail</h2>
                            </div>
                            {
                                isCreditCheck && <StripeFormContainer />
                            }
                            {
                                isPaypalCheck && <h1>Pay with paypal</h1>
                            }
                        </div>
                    )
                }
            </div>
        </section>
    )
}

export default Checkout
