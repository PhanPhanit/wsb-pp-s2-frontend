import {
    SET_PAYMENT_INTENT,
    SET_ORDER_SUCCESS
} from '../action';
const order_reducer = (state, action) => {
    if(action.type===SET_PAYMENT_INTENT){
        return {
            ...state,
            paymentIntent: action.payload
        }
    }
    throw new Error(`No Matching "${action.type}" - action type`);
}

export default order_reducer;