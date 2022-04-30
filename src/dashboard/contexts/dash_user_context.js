import React, {createContext, useReducer, useContext} from 'react';
import reducer from '../reducers/dash_user_reducer';
import axios from 'axios';
import {
    SET_USER
} from '../action';

const initialState = {
    users: [],
    totalPage: 0,
    currentPage: 0,
    updateUserId: ""
};

const DashUserContext = createContext();
const DashUserContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const fechUser = async (url) => {
        const {data: {user, currentPage, totalPage}} = await axios.get(url);
        dispatch({type: SET_USER, payload: {user, currentPage, totalPage}});
    }

    return <DashUserContext.Provider value={{ 
        ...state,
        fechUser
     }}>{children}</DashUserContext.Provider>
}
const useDashUserContext = () => {
    return useContext(DashUserContext);
}
export {
    DashUserContextProvider,
    useDashUserContext
}