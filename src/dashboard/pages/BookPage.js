import React from 'react';
import '../styles/bookPage.css';
import '../styles/dashTable.css';
import '../styles/dashPagination.css';
import {FaSearch, FaEdit, FaTrashAlt} from 'react-icons/fa';
import {AiOutlinePlus} from 'react-icons/ai';
import Pagination from '@mui/material/Pagination';

const BookPage = () => {
  return (
    <div className="dash-book-wrapper">
      <div className="search-create">
        <form className="frm-search">
          <input type="text" placeholder="Search here..." />
          <button type="submit">
            <FaSearch className="search-icon" />
          </button>
        </form>
        <button className="btn-create">
          <span>Create</span>
          <AiOutlinePlus className="icon" />
        </button>
      </div>
      <div className="filter-book">
        <select>
          <option value="all">All</option>
          <option value="1">Novel</option>
          <option value="2">Inspiration</option>
          <option value="3">Fiction</option>
          <option value="4">Sicnce</option>
        </select>
      </div>
      <div className="book-table-wrapper">
        <table className="dash-tbl">
          <thead>
            <tr>
              <th width="80">No.</th>
              <th className="title">Name</th>
              <th width="200">Photo</th>
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
                    <td className="title">Novel</td>
                    <td className="photo">
                      <div className="img-box">
                        <img src="https://kbimages1-a.akamaihd.net/93affabc-5161-421e-80d5-4477a07b8cee/353/569/90/False/harry-potter-and-the-philosopher-s-stone-3.jpg" alt="" />
                      </div>
                    </td>
                    <td><FaEdit className="icon-edit" /></td>
                    <td><FaTrashAlt className="icon-delete" /></td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
      <div className="book-pagination-wrapper">
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

export default BookPage