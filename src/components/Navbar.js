import React from 'react'
import {Link, useNavigate} from 'react-router-dom';
import {AiOutlineSearch, AiOutlineShopping} from 'react-icons/ai';
import {FiMenu} from 'react-icons/fi';
import {FaUserAlt, FaSignOutAlt} from 'react-icons/fa';
import '../styles/navbars.css';
import {NavbarData} from './../utils/NavbarData';
import {dropdownList} from './../utils/Dropdown';
import {useActionContext} from '../context/action_context'
import {useUserContext} from '../context/user_context';
import {useCartContext} from '../context/cart_context';
import axios from 'axios';
import {toast} from 'react-toastify';
import Logo from './Logo';

function Navbar() {
    const navigate = useNavigate();
    const {myUser, removeUser, setLoading} = useUserContext();
    const {openSidebar, accountSettingClick, historyClick} = useActionContext();
    const {total_items} = useCartContext();
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
    const handleDropdownClick = (link) => {
        if(link==="/history"){
            historyClick();
            navigate("/profile");
            return;
        }
        if(link=="/profile"){
            accountSettingClick();
            navigate("/profile");
            return;
        }
        navigate(link);
    }
    const handleNavMenu = (link) => {
        if(link==="/"){
            navigate("/");
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
        if(link==='footer'){
            window.scrollTo({ 
                top: document.documentElement.scrollHeight, 
                behavior: 'smooth'
            }); 
        }
    }
    return (
        <header>
            <div className="nav-center-wrapper">
                <div className="nav-center">
                    <div className="nav-logo-search">
                        <Logo />
                        <form className="frm-search">
                            <input type="text" placeholder="Explore..." />
                            <button type="submit">
                                <AiOutlineSearch className="icon" />
                            </button>
                        </form>
                    </div>
                    <ul className="nav-text-center">
                        {
                            NavbarData.map(item=>{
                                return <li key={item.id} onClick={()=>handleNavMenu(item.link)}>{item.title}</li>
                            })
                        }
                    </ul>
                    <div className="nav-user-cart">
                        {
                            myUser?(
                                <div className="user-logo">
                                    <div className="user">
                                        <FaUserAlt className="icon" />
                                    </div>
                                    <div className="dropdown">
                                        <div className="header">
                                            <span>{myUser.name}</span>
                                        </div>
                                        <ul className="body">
                                            {
                                            dropdownList.map((item)=>{
                                                if(item.id===3 && myUser.role==='user'){
                                                    return;
                                                }
                                                return (
                                                    <li key={item.id} onClick={()=>handleDropdownClick(item.link)}>
                                                        {item.icon} <span>{item.title}</span>
                                                    </li>
                                                );
                                            }) 
                                            }
                                        </ul>
                                        <div className="footer">
                                            <div className="footer-wrapper" onClick={()=>handleLogout()}><FaSignOutAlt className="icon" /> <span>Logout</span></div>
                                        </div>
                                    </div>
                                </div>
                            ):(
                                <button className="nav-signin">
                                    <Link to="/signin">Sign in</Link>
                                </button>
                            )
                        }


                        <div className="cart">
                            {
                                myUser?(
                                    <Link to="/cart">
                                        <AiOutlineShopping className="icon" />
                                        <span className="total-item">{total_items}</span>
                                    </Link>
                                ):(
                                    <Link to="/signin">
                                        <AiOutlineShopping className="icon" />
                                        <span className="total-item">0</span>
                                    </Link>
                                )
                            }
                        </div>
                        <div className="menu-icon">
                            <FiMenu className="icon" onClick={()=>openSidebar()} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="nav-language">
                <span>KH</span>
            </div>
        </header>
    )
}

export default Navbar
