import React, {useEffect, useState} from 'react';
import {BiEdit} from 'react-icons/bi';
import {FiSave} from 'react-icons/fi';
import {FaEyeSlash, FaEye} from 'react-icons/fa';
import '../styles/dashProfilePage.css';
import {useUserContext} from '../../context/user_context';
import { toast } from 'react-toastify';

const ProfilePage = () => {
  const {
    myUser,
    updateUser,
    updatePasswordUser
  } = useUserContext();
  const [isNameEdit, setIsNameEdit] = useState(true);
  const [editNameLoading, setEditNameLoading] = useState(false);
  const [isEmailEdit, setIsEmailEdit] = useState(true);
  const [editEmailLoading, setEditEmailLoading] = useState(false);
  const [profileUser, setProfileUser] = useState({
    name: "",
    email: ""
  });
  const [isCurrentPasswordShow, setIsCurrentPasswordShow] = useState(false);
  const [isNewPasswordShow, setIsNewPasswordShow] = useState(false);
  const [isComfirmPasswordShow, setIsComfirmPasswordShow] = useState(false);
  const [passwordSaveDisable, setPasswordSaveDisable] = useState(true);
  const [changePasswordData, setChangePasswordData] = useState({
    oldPassword: "",
    newPassword: "",
    comfirmPassword: ""
  });
  const [changePasswordLoading, setChangePasswordLoading] = useState(false);


  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setProfileUser(oldData=>{
      return {
        ...oldData,
        [name]: value
      }
    });
  }

  const handleInputPasswordChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setChangePasswordData(oldData=>{
      return {...oldData, [name]: value};
    });
  }

  const handleEditNameClick = (e) => {
    setIsNameEdit(false);
    e.currentTarget.previousElementSibling.focus();
  }
  const handleEditEmailClick = (e) => {
    setIsEmailEdit(false);
    e.currentTarget.previousElementSibling.focus();
  }
  const handleUpdateName = async () => {
    setEditNameLoading(true);
    try {
      await updateUser({email: myUser.email, name: profileUser.name});
      toast.success("Update name successfully.");
      setIsNameEdit(true);
    } catch (error) {
      if(error.response){
        const {msg} = error.response.data;
        toast.error(msg)
      }
    }
    setEditNameLoading(false);
  }

  const handleFormPasswordSubmit = async (e) => {
    e.preventDefault();
    setChangePasswordLoading(true);
    try {
      await updatePasswordUser({oldPassword: changePasswordData.oldPassword, newPassword: changePasswordData.newPassword});
      setChangePasswordData({
        oldPassword: "",
        newPassword: "",
        comfirmPassword: ""
      });
      toast.success("Update password successfully.");
    } catch (error) {
      if(error.response){
        const {msg} = error.response.data;
        toast.error(msg)
      }
    }
    setChangePasswordLoading(false);
  }

  const handleUpdateEmail = async () => {
    setEditEmailLoading(true);
    try {
      await updateUser({email: profileUser.email, name: myUser.name});
      toast.success("Update email successfully.");
      setIsEmailEdit(true);
    } catch (error) {
      if(error.response){
        const {msg} = error.response.data;
        toast.error(msg)
      }
    }
    setEditEmailLoading(false);
  }

  useEffect(()=>{
    setProfileUser({
      name: myUser.name,
      email: myUser.email
    });
  }, []);

  useEffect(()=>{
    const {oldPassword, newPassword, comfirmPassword} = changePasswordData;
    if(!oldPassword || !newPassword || !comfirmPassword){
      setPasswordSaveDisable(true);
    }else if(newPassword!==comfirmPassword){
      setPasswordSaveDisable(true);
    }else{
      setPasswordSaveDisable(false);
    }
  }, [changePasswordData]);



  if(myUser.facebookId || myUser.googleId){
    return (
      <div className="dash-pro-wrapper">
        <div className="title">
          <h2>Account Information</h2>
        </div>
        <div className="pro-body">
          <h2>Username</h2>
          <form className="single-edit">
            <label>Name</label>
            <input
              type="text"
              className={isNameEdit?"disable":""}
              name="name"
              value={profileUser.name}
              onChange={handleInputChange}
            />
          </form>
          <h2>Email</h2>
          <form className="single-edit">
            <label>Email</label>
            <input
              type="text"
              className={isEmailEdit?"disable":""}
              name="email"
              value={profileUser.email}
              onChange={handleInputChange}
            />
          </form>
        </div>
      </div>
    );
  }


  return (
    <div className="dash-pro-wrapper">
      <div className="title">
        <h2>Account Information</h2>
      </div>
      <div className="pro-body">
        <h2>Username</h2>
        <form className="single-edit">
          <label>Name</label>
          <input
            type="text"
            className={isNameEdit?"disable":""}
            name="name"
            value={profileUser.name}
            onChange={handleInputChange}
          />
          {
            editNameLoading?(
              <button type="button" className="btn-save">
                <div className="button-spinner button-spinner-primary"></div>
              </button>
            ):(
              isNameEdit?(
                <button type="button" className="btn-edit" onClick={handleEditNameClick}>
                  <BiEdit className="icon" /> <span>edit</span>
                </button>
              ):(    
                <button type="button" className="btn-save" onClick={handleUpdateName}>
                  <FiSave className="icon" /> <span>Save</span>
                </button>
              )
            )
          }
        </form>
        <h2>Email</h2>
        <form className="single-edit">
          <label>Email</label>
          <input
            type="text"
            className={isEmailEdit?"disable":""}
            name="email"
            value={profileUser.email}
            onChange={handleInputChange}
          />
          {
            editEmailLoading?(
              <button type="button" className="btn-save">
                <div className="button-spinner button-spinner-primary"></div>
              </button>
            ):(
              isEmailEdit?(
                <button type="button" className="btn-edit" onClick={handleEditEmailClick}>
                  <BiEdit className="icon" /> <span>edit</span>
                </button>
              ):(
                <button type="button" className="btn-save" onClick={handleUpdateEmail}>
                  <FiSave className="icon" /> <span>Save</span>
                </button>
              )
            )
          }
        </form>
        <h2>Change Password</h2>
        <form className="frm-password" onSubmit={handleFormPasswordSubmit}>
          <div className="frm-control">
            <label>Current Password</label>
            <div className="input-control">
              <input
                type={isCurrentPasswordShow?"text":"password"}
                placeholder="Your curren password"
                name="oldPassword"
                value={changePasswordData.oldPassword}
                onChange={handleInputPasswordChange}
              />
              {
                isCurrentPasswordShow?(
                  <FaEyeSlash className="icon" onClick={()=>setIsCurrentPasswordShow(false)} />
                ):(
                  <FaEye className="icon" onClick={()=>setIsCurrentPasswordShow(true)} />
                )
              }
            </div>
          </div>
          <div className="frm-control">
            <label>New Password</label>
            <div className="input-control">
              <input
                type={isNewPasswordShow?"text":"password"}
                placeholder="New password"
                name="newPassword"
                value={changePasswordData.newPassword}
                onChange={handleInputPasswordChange}
              />
              {
                isNewPasswordShow?(
                  <FaEyeSlash className="icon" onClick={()=>setIsNewPasswordShow(false)} />
                ):(
                  <FaEye className="icon" onClick={()=>setIsNewPasswordShow(true)} />
                )
              }
            </div>
          </div>
          <div className="frm-control">
            <label>Comfirm Password</label>
            <div className="input-control">
              <input
                type={isComfirmPasswordShow?"text":"password"}
                placeholder="Comfirm password"
                name="comfirmPassword"
                value={changePasswordData.comfirmPassword}
                onChange={handleInputPasswordChange}
              />
              {
                isComfirmPasswordShow?(
                  <FaEyeSlash className="icon" onClick={()=>setIsComfirmPasswordShow(false)} />
                ):(
                  <FaEye className="icon" onClick={()=>setIsComfirmPasswordShow(true)} />
                )
              }
            </div>
          </div>
          <div className="btn-wrapper">
            <button type="submit" className={passwordSaveDisable || changePasswordLoading?"btn-save disable":"btn-save"}>
              {
                changePasswordLoading?(
                  <div className="button-spinner"></div>
                ):(
                  <span>Save</span>
                )
              }
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ProfilePage