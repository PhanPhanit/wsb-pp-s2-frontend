import React, {useContext, createContext, useState} from 'react';



const ActionContext = createContext();
const ActionProvider = ({children}) => {
    const [isUserShow, setIsUserShow] = useState(false);
    const [dashboardTitle, setDashboardTitle] = useState("Dashboard");
    const [isSidebarShow, setIsSidebarShow] = useState(true);

    return <ActionContext.Provider value={{ 
        isUserShow,
        setIsUserShow,
        dashboardTitle,
        setDashboardTitle,
        isSidebarShow,
        setIsSidebarShow
     }}>{children}</ActionContext.Provider>
}

const useActionContext = () => {
    return useContext(ActionContext);
}

export {
    ActionProvider,
    useActionContext
}