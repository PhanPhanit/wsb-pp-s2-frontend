import React from 'react';
import '../styles/dashCategoryPage.css';
import '../styles/dashTable.css';
import {AiOutlinePlus} from 'react-icons/ai';
import {FaEdit, FaTrashAlt} from 'react-icons/fa';

const CategoryPage = () => {
  return (
    <div className="dash-cate-wrapper">
      <div className="name-create">
        <h2>Category List</h2>
        <button type="button" className="btn-create">
          <span>Create</span>
          <AiOutlinePlus className="icon" />
        </button>
      </div>
      <div className="cate-table-wrapper">
        <table className="dash-tbl">
          <thead>
            <tr>
              <th width="80">No.</th>
              <th className="title">Name</th>
              <th width="80">Edit</th>
              <th width="80">Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              Array.from({length: 30}).map(item=>{
                return (
                  <tr>
                    <td>1</td>
                    <td className="title">Novel</td>
                    <td><FaEdit className="icon-edit" /></td>
                    <td><FaTrashAlt className="icon-delete" /></td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
      
    </div>
  )
}

export default CategoryPage