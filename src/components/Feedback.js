import React from 'react'
import ReactStars from 'react-rating-stars-component';
import "../styles/feedback.css";
import {useActionContext} from '../context/action_context';

const Feedback = () => {
    const {closeFeedback, isFeedbackOpen} = useActionContext();
    return (
        <div className={`${isFeedbackOpen?"black-background show":"black-background"}`}>
            <form className="frm">
                <textarea className="feedback-text font-khmer" placeholder="Your feedback..."></textarea>
                <div className="star-text">
                    <span>Like this book?</span>
                    <h4>rate now</h4>
                    <ReactStars
                        classNames="star-icon"
                        value={0}
                        isHalf={true}
                    />
                </div>
                <div className="btn-container">
                    <button type="button" className="btn-close" onClick={closeFeedback}>Close</button>
                    <button type="button" className="btn-send">Send</button>
                </div>
            </form>
        </div>
    )
}

export default Feedback
