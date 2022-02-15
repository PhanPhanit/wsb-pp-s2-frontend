import React from 'react'
import {useUserContext} from '../context/user_context';
import LoadingPhoto from '../images/loading-page.gif';

const AuthWrapper = ({children}) => {
    const {loading} = useUserContext();
    if(loading){
        return (
            <div className="app-loading">
                <img src={LoadingPhoto} alt="Loading Page" />
            </div>
        )
    }
    return (
        <>{children}</>
    )
}

export default AuthWrapper
