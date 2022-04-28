import React,  {createContext, useContext, useReducer} from "react";
import reducer from '../reducers/dash_order_reducer';
import axios from "axios";
import {
    SET_ORDER,
    SET_VIEW_ORDER_ID
} from "../action";


const initialState = {
    orders: [],
    totalPage: 0,
    currentPage: 0,
    viewOrderId: ""
};

const DashOrderContext = createContext();
const DashOrderContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    


    const fetchOrder = async (url) => {
        const {data: {order, currentPage, totalPage}} = await axios.get(url);
        dispatch({type: SET_ORDER, payload: {order, currentPage, totalPage}});
    }

    const setViewOrderId = (orderId) => {
        dispatch({type: SET_VIEW_ORDER_ID, payload: orderId});
    }


    return <DashOrderContext.Provider value={{ 
        ...state,
        fetchOrder,
        setViewOrderId
     }}>{children}</DashOrderContext.Provider>
}
const useDashOrderContext = () => {
    return useContext(DashOrderContext);
}

export {
    DashOrderContextProvider,
    useDashOrderContext
}