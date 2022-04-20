import React from 'react';
import {NavLink} from 'react-router-dom';
import {SidebarData} from './../utils/SidebarData';
import '../styles/sidebar.css';
import { useActionContext } from '../contexts/action_context';
import {useUserContext} from '../../context/user_context';

const Sidebar = () => {
  const {myUser} = useUserContext();
  const {setDashboardTitle, isSidebarShow} = useActionContext();
  return (
    <div className={isSidebarShow?"dash-sidebar show":"dash-sidebar"}>
      <div className="link-wrapper">
        {
          SidebarData.map(item=>{
            if(item.id===6 && myUser.role==='manager'){
              return;
            }
            return (
              <NavLink key={item.id} to={item.path} end className="nav-link" onClick={()=>setDashboardTitle(item.text)}>
                {item.icon}
                <span>{item.text}</span>
              </NavLink>
            );
          })
        }
      </div>
    </div>
  )
}

export default Sidebar