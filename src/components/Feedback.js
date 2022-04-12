import React, {useState} from 'react'
import ReactStars from 'react-rating-stars-component';
import "../styles/feedback.css";
import {useUserContext} from '../context/user_context';
import {useActionContext} from '../context/action_context';
import { useReviewContext } from '../context/review_context';

const Feedback = () => {
    const [feedbackLoading, setFeedbackLoading] = useState(true);
    const [feedbackExist, setFeedbackExist] = useState(false);
    const {myUser:{userId}} = useUserContext();
    const {closeFeedback} = useActionContext();
    const {
        review: {
            rating,
            comment,
            product
        },
        setReivew,
        createReview,
        reviewLoading,
        checkReviewExist,
    } = useReviewContext();

    React.useEffect(()=>{
        // if exist
        handleCheckReviewExist();
        console.log(product);
    }, []);


    const handleCheckReviewExist = async () => {
        setFeedbackLoading(true);
        setFeedbackExist(false);
        const {message, error} = await checkReviewExist(product, userId);
        setFeedbackExist(message);
        setFeedbackLoading(false);
    }

    const starChange = (value) => {
        setReivew((oldReview)=>{
            return {...oldReview, rating: value};
        });
    }
    const handleCloseFeedback = () => {
        closeFeedback();
        setReivew({rating: 0, comment: "", product: ""});
    }
    const handleSubmitFeedback = async () => {
        await createReview();
        closeFeedback();
        setReivew({rating: 0, comment: "", product: ""});
    }

    return (
        <div className="black-background show">
            {
                feedbackLoading?(
                    <div className="checking-wrapper">
                        <p>Checking...</p>
                    </div>
                ):feedbackExist?(
                    <div className="feedback-exist-wrapper">
                        <p>You has been reivew this product!</p>
                        <button className="btn-exist-close" onClick={handleCloseFeedback}>Close</button>
                    </div>
                ):(
                    <form className="frm">
                        <textarea
                            className="feedback-text font-khmer"
                            placeholder="Your feedback..."
                            value={comment}
                            onChange={(e)=>setReivew({rating, comment: e.target.value, product})}
                        ></textarea>
                        <div className="star-text">
                            <span>Like this book?</span>
                            <h4>rate now</h4>
                            <ReactStars
                                classNames="star-icon"
                                value={rating}
                                isHalf={true}
                                onChange={starChange}
                            />
                        </div>
                        <div className="btn-container">
                            <button type="button" className="btn-close" onClick={handleCloseFeedback}>Close</button>
                            <button type="button" onClick={handleSubmitFeedback} className={rating!==0&&comment&&product&&!reviewLoading?"btn-send":"btn-send btn-send-disable"}>{reviewLoading?"Loading...":"Send"}</button>
                        </div>
                    </form>
                )
            }
        </div>
    )
}

export default Feedback
