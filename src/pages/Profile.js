import React from 'react'
import {FaUser} from 'react-icons/fa';
import '../styles/profile.css'
import {ProfileAccount, ProfileHistory} from '../components';
import {useActionContext} from '../context/action_context';

function Profile() {
    const {isAccountOpen, isHistoryOpen, historyClick, accountSettingClick} = useActionContext();
    return (
        <div id="profile">
            <div className="wrapper-global profile-wrapper">
                <div className='left'>
                    <div className="profile-info">
                        <div className="user">
                            <FaUser className='icon' />
                        </div>
                        <h3>Phan Phanit</h3>
                        <p>phanit12@gmail.com</p>
                    </div>
                    <div className="menu-wrapper">
                        <button type="button" className={`${isAccountOpen?"account active":"account"}`} onClick={accountSettingClick}>Account Setting</button>
                        <button type="button" className={`${isHistoryOpen?"History active":"History"}`} onClick={historyClick}>History</button>
                    </div>
                </div>
                {
                    isAccountOpen && <ProfileAccount />
                }
                {
                    isHistoryOpen && <ProfileHistory />
                }
            </div>
        </div>
    )
}

export default Profile
