import React from 'react'
import '../styles/profileHistory.css';
import {useActionContext} from '../context/action_context';
const ProfileHistory = () => {
    const {openFeedback} = useActionContext();
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
                    <div className="single-item">
                        <p>1</p>
                        <div className="p-info">
                            <div className="img-box">
                                <img src="https://m.media-amazon.com/images/I/71Q1Iu4suSL._AC_SL1000_.jpg" alt="" />
                            </div>
                            <div className="info">
                                <span><h4>Title: </h4> <p>Harry Potter and the deathly hallowy</p> </span>
                                <span><h4>Price: </h4> <p>$29.99</p> </span>
                                <span><h4>Date: </h4> <p>21/1/2021</p> </span>
                                <button type="button" className="btn-feedback" onClick={openFeedback}>Feedback</button>
                            </div>
                        </div>
                    </div>
                    <div className="single-item">
                        <p>1</p>
                        <div className="p-info">
                            <div className="img-box">
                                <img src="https://m.media-amazon.com/images/I/71Q1Iu4suSL._AC_SL1000_.jpg" alt="" />
                            </div>
                            <div className="info">
                                <span><h4>Title: </h4> <p>Harry Potter and the deathly hallowy</p> </span>
                                <span><h4>Price: </h4> <p>$29.99</p> </span>
                                <span><h4>Date: </h4> <p>21/1/2021</p> </span>
                                <button type="button" className="btn-feedback">Feedback</button>
                            </div>
                        </div>
                    </div>
                    <div className="single-item">
                        <p>1</p>
                        <div className="p-info">
                            <div className="img-box">
                                <img src="https://m.media-amazon.com/images/I/71Q1Iu4suSL._AC_SL1000_.jpg" alt="" />
                            </div>
                            <div className="info">
                                <span><h4>Title: </h4> <p>Harry Potter and the deathly hallowy</p> </span>
                                <span><h4>Price: </h4> <p>$29.99</p> </span>
                                <span><h4>Date: </h4> <p>21/1/2021</p> </span>
                                <button type="button" className="btn-feedback">Feedback</button>
                            </div>
                        </div>
                    </div>
                    <div className="single-item">
                        <p>1</p>
                        <div className="p-info">
                            <div className="img-box">
                                <img src="https://m.media-amazon.com/images/I/71Q1Iu4suSL._AC_SL1000_.jpg" alt="" />
                            </div>
                            <div className="info">
                                <span><h4>Title: </h4> <p>Harry Potter and the deathly hallowy</p> </span>
                                <span><h4>Price: </h4> <p>$29.99</p> </span>
                                <span><h4>Date: </h4> <p>21/1/2021</p> </span>
                                <button type="button" className="btn-feedback">Feedback</button>
                            </div>
                        </div>
                    </div>
                    <div className="single-item">
                        <p>1</p>
                        <div className="p-info">
                            <div className="img-box">
                                <img src="https://m.media-amazon.com/images/I/71Q1Iu4suSL._AC_SL1000_.jpg" alt="" />
                            </div>
                            <div className="info">
                                <span><h4>Title: </h4> <p>Harry Potter and the deathly hallowy</p> </span>
                                <span><h4>Price: </h4> <p>$29.99</p> </span>
                                <span><h4>Date: </h4> <p>21/1/2021</p> </span>
                                <button type="button" className="btn-feedback">Feedback</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileHistory
