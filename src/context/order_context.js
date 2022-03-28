import React, {useContext, createContext, useReducer} from 'react';
import reducer from '../reducers/order_reducer';
import axios from 'axios';
import {createOrder as createOrderUrl} from '../UrlEndPoint';

import {
    SET_PAYMENT_INTENT,
    SET_ORDER_SUCCESS
} from '../action';

const initailState = {
    paymentIntent: "",
    order: [],
    orderLoading: false,
    orderError: false,
};
const OrderContext = createContext();
const OrderProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initailState);
    console.log(state.paymentIntent + "-" + state.success);
    const setPaymentIntent = (paymentIntent) => {
        dispatch({type: SET_PAYMENT_INTENT, payload: paymentIntent});
    }

    const createOrder = async (order) => {
        try {
            const {data} = await axios.post(createOrderUrl, order);
            console.log(data);
        } catch (error) {
            if(error.response){
                const {msg} = error.response.data;
                console.log(msg);
            }
        }
    }

    return <OrderContext.Provider value={{ 
        ...state,
        setPaymentIntent,
        createOrder
     }}>{children}</OrderContext.Provider>
}

const useOrderContext = () => {
    return useContext(OrderContext);
}

export {
    OrderProvider,
    useOrderContext
}