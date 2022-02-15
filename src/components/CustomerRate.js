import React from 'react'
import '../styles/customerRate.css';
import ReactStars from "react-rating-stars-component";
import {FaUser} from 'react-icons/fa';
const CustomerRate = () => {
    return (
        <section className="customer-rate">
            <div className="wrapper-global">
                <h3 className="title">Customers Rate: 12,212</h3>
                <div className="product-total-stars">
                    <div className="left">
                        <div className="row">
                            <span>5 Stars</span>
                            <div className="box-color-star">
                                <div className="percent-star" style={{width: "91%"}}></div>
                            </div>
                            <div className="box-percent-star">
                                91%
                            </div>
                        </div>
                        <div className="row">
                            <span>4 Stars</span>
                            <div className="box-color-star">
                                <div className="percent-star" style={{width: "5%"}}></div>
                            </div>
                            <div className="box-percent-star">
                                5%
                            </div>
                        </div>
                        <div className="row">
                            <span>3 Stars</span>
                            <div className="box-color-star">
                                <div className="percent-star" style={{width: "1%"}}></div>
                            </div>
                            <div className="box-percent-star">
                                1%
                            </div>
                        </div>
                        <div className="row">
                            <span>2 Stars</span>
                            <div className="box-color-star">
                                <div className="percent-star" style={{width: "1%"}}></div>
                            </div>
                            <div className="box-percent-star">
                                1%
                            </div>
                        </div>
                        <div className="row">
                            <span>1 Stars</span>
                            <div className="box-color-star">
                                <div className="percent-star" style={{width: "2%"}}></div>
                            </div>
                            <div className="box-percent-star">
                                2%
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <span>4.8</span>
                        <ReactStars
                            classNames="star-icon"
                            value={3.7}
                            isHalf={true}
                            edit={false}
                        />
                    </div>
                </div>
                <h3 className="title">Customers Review</h3>
                <div className="filter-review-star">
                    <select>
                        <option value="0">-- Filter Star --</option>
                        <option value="5">5 stars</option>
                        <option value="4">4 stars</option>
                        <option value="3">3 stars</option>
                        <option value="2">2 stars</option>
                        <option value="1">1 stars</option>
                    </select>
                </div>
                <div className="customers-review">
                    <div className="single-review">
                        <div className="left">
                            <div className="user">
                                <FaUser className="icon" />
                            </div>
                        </div>
                        <div className="right">
                            <h4 className="name">Daniel Lux</h4>
                            <div className="star-date">
                                <ReactStars
                                    classNames="star-icon"
                                    value={3.7}
                                    isHalf={true}
                                    edit={false}
                                />
                                <span>a week ago</span>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipiscing elit, ligula condimentum vehicula felis nullam vestibulum, cubilia duis tortor mattis venenatis aliquam. Magnis convallis enim tristique placerat urna dapibus sodales arcu consequat pretium sem, laoreet volutpat commodo tortor at erat pulvinar massa lectus.
                            </p>
                        </div>
                    </div>
                    <div className="single-review">
                        <div className="left">
                            <div className="user">
                                <FaUser className="icon" />
                            </div>
                        </div>
                        <div className="right">
                            <h4 className="name">Daniel Lux</h4>
                            <div className="star-date">
                                <ReactStars
                                    classNames="star-icon"
                                    value={3.7}
                                    isHalf={true}
                                    edit={false}
                                />
                                <span>a week ago</span>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipiscing elit, ligula condimentum vehicula felis nullam vestibulum, cubilia duis tortor mattis venenatis aliquam. Magnis convallis enim tristique placerat urna dapibus sodales arcu consequat pretium sem, laoreet volutpat commodo tortor at erat pulvinar massa lectus.
                            </p>
                        </div>
                    </div>
                    <div className="single-review">
                        <div className="left">
                            <div className="user">
                                <FaUser className="icon" />
                            </div>
                        </div>
                        <div className="right">
                            <h4 className="name">Daniel Lux</h4>
                            <div className="star-date">
                                <ReactStars
                                    classNames="star-icon"
                                    value={3.7}
                                    isHalf={true}
                                    edit={false}
                                />
                                <span>a week ago</span>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipiscing elit, ligula condimentum vehicula felis nullam vestibulum, cubilia duis tortor mattis venenatis aliquam. Magnis convallis enim tristique placerat urna dapibus sodales arcu consequat pretium sem, laoreet volutpat commodo tortor at erat pulvinar massa lectus.
                            </p>
                        </div>
                    </div>
                    <div className="single-review">
                        <div className="left">
                            <div className="user">
                                <FaUser className="icon" />
                            </div>
                        </div>
                        <div className="right">
                            <h4 className="name">Daniel Lux</h4>
                            <div className="star-date">
                                <ReactStars
                                    classNames="star-icon"
                                    value={3.7}
                                    isHalf={true}
                                    edit={false}
                                />
                                <span>a week ago</span>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipiscing elit, ligula condimentum vehicula felis nullam vestibulum, cubilia duis tortor mattis venenatis aliquam. Magnis convallis enim tristique placerat urna dapibus sodales arcu consequat pretium sem, laoreet volutpat commodo tortor at erat pulvinar massa lectus.
                            </p>
                        </div>
                    </div>
                </div>
                <button type="button" className="see-more">
                    See more reviews
                </button>
            </div>
        </section>
    )
}

export default CustomerRate
