import React from 'react'
import {Link, useNavigate} from 'react-router-dom';
import {AiOutlineSearch, AiOutlineShopping} from 'react-icons/ai';
import {FiLogOut, FiMenu} from 'react-icons/fi';
import {FaUserAlt} from 'react-icons/fa';
import '../styles/navbars.css';
import {NavbarData} from './../utils/NavbarData';
import {Link as LinkScroll} from 'react-scroll';
import {useActionContext} from '../context/action_context'
import {useUserContext} from '../context/user_context';
import {useCartContext} from '../context/cart_context';
import axios from 'axios';
import {toast} from 'react-toastify';

function Navbar() {
    const navigate = useNavigate();
    const {myUser, removeUser} = useUserContext();
    const {openSidebar, accountSettingClick, historyClick} = useActionContext();
    const {total_items} = useCartContext();
    const handleLogout = async () => {
        try {
            await axios.get('/api/v1/auth/logout');
            removeUser();
            navigate("/");
            toast.success("Logout successfully.");
        } catch (error) {
            toast.success("Logout error.");
        }
    }
    return (
        <header>
            {/* Header */}
            <div className="wrapper-global wrapper-menu font-khmer font-poppin">
                <div className="left-menu">
                    <div className="logo">
                        <Link to="/"><font>W</font><font>s</font><font>book</font> </Link>
                    </div>
                    {/* form search */}
                    <form className="frm-search">
                        <div>
                            <input type="text" placeholder="Explore" />
                            <button type="submit">
                                <AiOutlineSearch className="icon" />
                            </button>
                        </div>
                    </form>
                </div>

                {/* Center menu */}

                <nav className="center-menu">
                    <ul>
                        {
                            NavbarData.map((menu)=>{
                                const {id, title, link} = menu;
                                if(link==='dropbox'){
                                    return (
                                        <li key={id} className="m-hover">
                                            <a>{title}</a>
                                            <div className="dropbox">
                                                <div className="arrow-top"></div>
                                                <span>English</span>
                                                <span>Khmer</span>
                                            </div>
                                        </li>
                                    );
                                }
                                if(link==='home'){
                                    return (
                                        <li key={id}>
                                            <Link to="/">
                                                {title}
                                            </Link>
                                        </li>
                                    );
                                }
                                return (
                                    <li key={id}>
                                        <LinkScroll to={link} spy={true} smooth={true} duration={1000}>
                                            {title}
                                        </LinkScroll>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </nav>

                {/* right menu */}

                <div className="right-menu">
                    <ul>
                        <li className="li-user">
                            {
                                myUser? (
                                    <div className="user-icon">
                                        <FaUserAlt />

                                        {/* user hover */}

                                        <div className="user-hower">
                                            <div className="arrow-top"></div>
                                            <div className="header">
                                                <h4>{myUser.name}</h4>
                                                <span>{myUser.email}</span>
                                            </div>
                                            <div className="body">
                                                <Link className="link" to="/profile" onClick={accountSettingClick}>My Profile</Link>
                                                <Link className="link" to="/profile" onClick={historyClick}>History</Link>
                                            </div>
                                            <div className="footer">
                                                <span className="logout-txt" onClick={handleLogout}>Logout</span>
                                                <FiLogOut onClick={handleLogout} className="logout-txt" />
                                            </div>
                                        </div>

                                        {/* end user hover */}

                                    </div>
                                ):(
                                    <Link to="/signin" className="btn-signin">Sign In</Link>
                                )
                            }
                        </li>
                        {
                            myUser && (
                                <li className="li-cart">
                                    <Link className="link-cart" to="/cart">
                                        <AiOutlineShopping />
                                        <span>{total_items}</span>
                                    </Link>
                                </li>
                            )
                        }
                        <li className="li-menu-button">
                            <FiMenu className="btn-menu" onClick={openSidebar} />
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Navbar
