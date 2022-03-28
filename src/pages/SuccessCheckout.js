import React from 'react'
import {Link} from 'react-router-dom';
import {BsCheckCircle} from 'react-icons/bs';
import '../styles/successCheckout.css';

const SuccessCheckout = () => {
  return (
    <div className="wrapper-global checkout-success">
      <BsCheckCircle className="icon-circle" />
      <h2>Thank you for your purchase</h2>
      <Link to="/" className="checkout-btn-shopping">continue shopping</Link>
    </div>
  )
}
export default SuccessCheckout