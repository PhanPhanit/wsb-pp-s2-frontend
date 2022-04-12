import React from 'react';
import { Outlet } from 'react-router-dom';
import {
  Navbar,
  Sidebar
} from '../components';
import '../styles/dashboardLayout.css';

const DashboardLayout = () => {
  return (
    <div className="dashboard-wrapper">
      {/* form */}
      {/* navbar */}
      <Navbar />
      <div className="wrapper-nav-body">
        {/* sidebar */}
        <Sidebar/>
        <div className="dahboard-page">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout