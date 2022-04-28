import {
    SET_ORDER,
    SET_VIEW_ORDER_ID
} from "../action";

const dash_order_reducer = (state, action) => {
    if(action.type===SET_ORDER){
        const {order, totalPage, currentPage} = action.payload;
        return {
            ...state,
            orders: order,
            totalPage,
            currentPage
        }
    }
    if(action.type===SET_VIEW_ORDER_ID){
        return {
            ...state,
            viewOrderId: action.payload
        }
    }
    throw new Error(`No Matching "${action.type}" - action type`);
}
export default dash_order_reducer;