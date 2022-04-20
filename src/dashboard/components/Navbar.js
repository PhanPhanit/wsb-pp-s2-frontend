import React from 'react';
import {useNavigate} from 'react-router-dom';
import {FaBars} from 'react-icons/fa';
import {IoChevronDown} from 'react-icons/io5';
import {MdLogout} from 'react-icons/md';
import '../styles/navbar.css';
import Logo from '../../components/Logo';
import axios from 'axios';
import {toast} from 'react-toastify';
import { useActionContext } from '../contexts/action_context';
import { useUserContext } from '../../context/user_context';

const Navbar = () => {
    const navigate = useNavigate();
    const {removeUser, setLoading} = useUserContext();
    const {
        isUserShow,
        setIsUserShow,
        dashboardTitle,
        isSidebarShow,
        setIsSidebarShow
    } = useActionContext();


    const handleLogout = async () => {
        setLoading(true);
        try {
            await axios.delete('/api/v1/auth/logout');
            removeUser();
            navigate("/");
            setLoading(false);
            toast.success("Logout successfully.");
        } catch (error) {
            setLoading(false);
            toast.success("Logout error.");
        }
    }

  return (
    <div className="dash-navbar">
        <div className="left">
            <Logo />
            <FaBars className="icon-bar" onClick={()=>setIsSidebarShow(!isSidebarShow)} />
        </div>
        <div className="center">
            <h2>{dashboardTitle}</h2>
        </div>
        <div className="right">
            <div className="user">
                <h2>Phan Phanit</h2>
                <IoChevronDown className="arrow-down" onClick={()=>setIsUserShow(!isUserShow)} />
                <ul className={isUserShow?"box-down show":"box-down"}>
                    <li className="header">
                        <h4>phanphanit@gmail.com</h4>
                    </li>
                    <li className="footer">
                        <MdLogout className="logout-icon" onClick={handleLogout} />
                        <span onClick={handleLogout}>Logout</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar