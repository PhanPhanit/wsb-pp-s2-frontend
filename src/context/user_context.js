import React, { useContext, useState, useEffect } from "react";
import axios from 'axios';

const UserContext = React.createContext();
const UserProvider = ({children}) => {
    const [myUser, setMyUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const showMe = async () => {
        try {
            const {data} = await axios.get('/api/v1/users/showMe');
            saveUser(data.user);
        } catch (error) {
            removeUser();
        }
        setLoading(false);
    }
    useEffect(()=>{
        showMe();
    }, []);
    const saveUser = (user) => {
        setMyUser(user);
    }
    const removeUser = () => {
        setMyUser(null);
    }

    return <UserContext.Provider value={{
        loading,
        setLoading,
        myUser,
        saveUser,
        removeUser
    }}>{children}</UserContext.Provider>
}

const useUserContext = () => {
    return useContext(UserContext);
}

export {
    UserProvider,
    useUserContext
}
