import React, {useState, useEffect} from 'react';
import '../styles/userPage.css';
import '../styles/dashTable.css';
import '../styles/dashPagination.css';
import {FaSearch, FaEdit, FaTrashAlt} from 'react-icons/fa';
import Pagination from '@mui/material/Pagination';
import {AiOutlinePlus} from 'react-icons/ai';
import { useDashUserContext } from '../contexts/dash_user_context';
import { userUrl } from '../../UrlEndPoint';

const UserPage = () => {
  const {
    fechUser,
    users,
    currentPage,
    totalPage
  } = useDashUserContext();
  const [fetchUserLoading, setFetchUserLoading] = useState(true);
  const [tableLoading, setTableLoading] = useState(false);
  const [userPage, setUserPage] = useState(1);
  const [filterUserRole, setFilterUserRole] = useState('all');
  const [userSearch, setUserSearch] = useState("");



  const firstFetchUser = async () => {
    setFetchUserLoading(true);
    try {
      await fechUser(`${userUrl}?page=${userPage}&sort=-createdAt`);
    } catch (error) {
      console.log(error);
    }
    setFetchUserLoading(false);
  }

  const pageChange = async (_, value) => {
    setUserPage(value);
    setTableLoading(true);
    let url = `${userUrl}?page=${value}&sort=-createdAt`;
    if(filterUserRole!=='all'){
      url += `&role=${filterUserRole}`;
    }
    if(userSearch!==""){
      url += `&search=${userSearch}`;
    }
    try {
      await fechUser(url);
    } catch (error) {
      console.log(error);
    }
    setTableLoading(false);
  }
  const handleFilterUserRoleChange = async (e) => {
    setUserSearch("");
    const value = e.currentTarget.value;
    setFilterUserRole(value);
    setUserPage(1)
    setTableLoading(true);
    let url;
    if(value==='all'){
      url = `${userUrl}?page=1&sort=-createdAt`;
    }else{
      url = `${userUrl}?page=1&role=${value}&sort=-createdAt`;
    }
    try {
      await fechUser(url);
    } catch (error) {
      console.log(error);
    }
    setTableLoading(false);

  }

  const handleSearch = async (e) => {
    e.preventDefault();
    setUserPage(1);
    setTableLoading(true);
    let url = `${userUrl}?page=${1}&search=${userSearch}&sort=-createdAt`;
    if(filterUserRole!=='all'){
      url += `&role=${filterUserRole}`;
    }
    try {
      await fechUser(url);
    } catch (error) {
      console.log(error);
    }
    setTableLoading(false);
  }

  const handleEditUser = (userId) => {
    // openFormUpdate();
    // setUpdateUserId(userId);
  }

  useEffect(()=>{
    firstFetchUser();
  }, []);

  if(fetchUserLoading){
    return (
      <div className="dash-loading">
        <div className="dash-lds-ring"><div></div><div></div><div></div><div></div></div>
      </div>
    );
  }

  return (
    <div className="dash-user-wrapper">
      <div className="search-create">
        <form className="frm-search" onSubmit={handleSearch}>
          <input type="text" placeholder="Search here..." value={userSearch} onChange={(e)=>setUserSearch(e.target.value)} />
          <button type="submit">
            <FaSearch className="search-icon" />
          </button>
        </form>
        <button className="btn-create">
          <span>Create</span>
          <AiOutlinePlus className="icon" />
        </button>
      </div>
      <div className="filter-user">
        <select value={filterUserRole} onChange={handleFilterUserRoleChange} >
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
              !tableLoading && users.map((user, index)=>{
                const {name, email, role} = user;
                const altIndex = 10 * currentPage - 10 + (index + 1);
                return (
                  <tr key={index}>
                    <td>{altIndex}</td>
                    <td className="title">{name}</td>
                    <td className="title">{email}</td>
                    <td>{role}</td>
                    <td><FaEdit className="icon-edit" /></td>
                    <td><FaTrashAlt className="icon-delete" /></td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
      {/* user loading */}
      {
        tableLoading && (
          <div className="loading-wrapper">
            <div className="dash-loading">
              <div className="dash-lds-ring"><div></div><div></div><div></div><div></div></div>
            </div>
          </div>
        )
      }
      {/* end user loading */}

      {/* no user */}
      {
        !tableLoading && users.length === 0 && (
          <div className="d-flex align-item-center justify-content-center m-top-20">
            <h2>No user</h2>
          </div>
        )
      }
      {/* end no user */}


      {
        !tableLoading && users.length !== 0 && (
          <div className="user-pagination-wrapper">
            <div className="dash-pagination">
              <Pagination
                count={totalPage}
                shape="rounded"
                page={userPage}
                onChange={pageChange} 
              />
            </div>
          </div>
        )
      }
    </div>
  )
}

export default UserPage