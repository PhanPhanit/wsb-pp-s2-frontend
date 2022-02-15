import React, {useEffect} from 'react'
import {useLocation, useNavigate} from 'react-router-dom';
import axios from 'axios';
import {useUserContext} from '../context/user_context';
import {toast} from 'react-toastify';
import LoadingPhoto from '../images/loading-page.gif';

const SendToken = () => {
    const navigate = useNavigate();
    const query = useQuery();
    const {saveUser, removeUser} = useUserContext();


    const handleSendToken = async (token) => {
        try {
            const {data} = await axios.post('/api/v1/response-cookie', {token});
            saveUser(data.tokenUser)
            navigate("/");
            toast.success("Sign in successfully!")
        } catch (error) {
            removeUser();
            navigate("/signin");
            toast.error("Error something went wrong.");
        }
    }

    useEffect(()=>{
        const token = query.get("token");
        handleSendToken(token);
    }, [])

    return (
        <div className="app-loading">
            <img src={LoadingPhoto} alt="Loading Page" />
        </div>
    )
}

function useQuery() {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
}

export default SendToken
