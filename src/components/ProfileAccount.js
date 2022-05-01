import React from 'react'
import {AiFillEyeInvisible} from 'react-icons/ai';
import {FaEdit} from 'react-icons/fa';

const ProfileAccount = () => {
    return (
        <div className="right font-poppin">
            <h2 className='title'>Account Setting</h2>
            <form className='frm'>
                <h3 className='sub-title'>User name</h3>
                <div className="frm-control">
                    <label htmlFor="name">Name</label>
                    <div className="input-control input-top">
                        <input readOnly type="text" value="Phan Phanit" id='name' />
                        <button type="button"><FaEdit className='icon' /></button>
                    </div>
                </div>
            </form>
            <form className='frm'>
                <h3 className='sub-title'>Email</h3>
                <div className="frm-control">
                    <label htmlFor="email">Email</label>
                    <div className="input-control input-top">
                        <input readOnly type="email" value="phanit12@gmail.com" id='email' />
                        <button type="button"><FaEdit className='icon' /></button>
                    </div>
                </div>
            </form>
            <form className='frm'>
                <h3 className='sub-title'>Password</h3>
                <div className="frm-control">
                    <label htmlFor="email">Password</label>
                    <button type="button" className="change-password">Change login password</button>
                </div>
                <div className="password-input-wrapper active">
                    <div className="frm-control">
                        <label htmlFor="old-pass">Old password</label>
                        <div className="input-control input-bottom">
                            <div>
                                <input type="password" id='old-pass' placeholder="Old password" />
                                <span className="eye"><AiFillEyeInvisible /></span>
                            </div>
                        </div>
                    </div>
                    <div className="frm-control">
                        <label htmlFor="new-pass">New password</label>
                        <div className="input-control input-bottom">
                            <div>
                                <input type="password" id='new-pass' placeholder="New password" />
                                <span className="eye"><AiFillEyeInvisible /></span>
                            </div>
                        </div>
                    </div>
                    <div className="frm-control">
                        <label htmlFor="new-pass">Re-type password</label>
                        <div className="input-control input-bottom">
                            <div>
                                <input type="password" id='retype-pass' placeholder="Re-type password" />
                                <span className="eye"><AiFillEyeInvisible /></span>
                            </div>
                            <button className="btn-save" type="button">Save</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ProfileAccount
