import React from 'react';
import {FaBars} from 'react-icons/fa';
import {IoChevronDown} from 'react-icons/io5';
import {MdLogout} from 'react-icons/md';
import '../styles/navbar.css';
import Logo from '../../components/Logo';
import { useActionContext } from '../contexts/action_context';

const Navbar = () => {
    const {
        isUserShow,
        setIsUserShow,
        dashboardTitle,
        isSidebarShow,
        setIsSidebarShow
    } = useActionContext();
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
                        <MdLogout className="logout-icon"/>
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar