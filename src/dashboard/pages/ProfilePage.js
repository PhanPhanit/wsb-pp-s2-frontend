import React from 'react';
import {BiEdit} from 'react-icons/bi';
import {FiSave} from 'react-icons/fi';
import {FaEyeSlash, FaEye} from 'react-icons/fa';
import '../styles/dashProfilePage.css';

const ProfilePage = () => {
  return (
    <div className="dash-pro-wrapper">
      <div className="title">
        <h2>Account Information</h2>
      </div>
      <div className="pro-body">
        <h2>Username</h2>
        <form className="single-edit">
          <label>Name</label>
          <input type="text" className="disable" value="Phan Phanit" />
          <button type="button" className="btn-edit">
            <BiEdit className="icon" /> <span>edit</span>
          </button>
          {/* <button type="submit" className="btn-save">
            <FiSave className="icon" /> <span>Save</span>
          </button> */}
        </form>
        <h2>Email</h2>
        <form className="single-edit">
          <label>Email</label>
          <input type="text" className="disable" value="phanphanit.pp12345@gmail.com" />
          <button type="button" className="btn-edit">
            <BiEdit className="icon" /> <span>edit</span>
          </button>
          {/* <button type="submit" className="btn-save">
            <FiSave className="icon" /> <span>Save</span>
          </button> */}
        </form>
        <h2>Change Password</h2>
        <form className="frm-password">
          <div className="frm-control">
            <label>Current Password</label>
            <div className="input-control">
              <input type="password" placeholder="Your curren password" />
              <FaEye className="icon" />
            </div>
          </div>
          <div className="frm-control">
            <label>New Password</label>
            <div className="input-control">
              <input type="password" placeholder="New password" />
              <FaEye className="icon" />
            </div>
          </div>
          <div className="frm-control">
            <label>Comfirm Password</label>
            <div className="input-control">
              <input type="password" placeholder="Comfirm password" />
              <FaEye className="icon" />
            </div>
          </div>
          <div className="btn-wrapper">
            <button type="submit" className="btn-save">Save</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ProfilePage