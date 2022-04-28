import React from 'react';
import '../styles/userPage.css';
import '../styles/dashTable.css';
import '../styles/dashPagination.css';
import {FaSearch, FaEdit, FaTrashAlt} from 'react-icons/fa';
import Pagination from '@mui/material/Pagination';

const UserPage = () => {
  return (
    <div className="dash-user-wrapper">
      <div className="search-filter">
        <form className="frm-search">
          <input type="text" placeholder="Search here..." />
          <button type="submit">
            <FaSearch className="search-icon" />
          </button>
        </form>
        <select>
          <option value="all">All</option>
          <option value="admin">admin</option>
          <option value="manager">manager</option>
          <option value="user">user</option>
        </select>
      </div>
      <div className="user-table-wrapper">
        <table className="dash-tbl">
          <thead>
            <tr>
              <th width="80">No.</th>
              <th className="title">Name</th>
              <th className="title">Email</th>
              <th width="100">Type</th>
              <th width="80">Edit</th>
              <th width="80">Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              Array.from({length: 10}).map(item=>{
                return (
                  <tr>
                    <td>1</td>
                    <td className="title">Phan Phanit</td>
                    <td className="title">phanphanit.pp12345@gmail.com</td>
                    <td>manager</td>
                    <td><FaEdit className="icon-edit" /></td>
                    <td><FaTrashAlt className="icon-delete" /></td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
      <div className="user-pagination-wrapper">
        <div className="dash-pagination">
          <Pagination
            count={10}
            shape="rounded"  
          />
        </div>
      </div>
    </div>
  )
}

export default UserPage