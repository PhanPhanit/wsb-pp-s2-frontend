import { SET_USER } from "../action";

const dash_user_reducer = (state, action) => {
    if(action.type===SET_USER){
        const {user, totalPage, currentPage} = action.payload;
        return {
            ...state,
            users: user,
            totalPage,
            currentPage
        }
    }
    throw new Error(`No Matching "${action.type}" - action type`);
}

export default dash_user_reducer;