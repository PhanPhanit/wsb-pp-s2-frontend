import React from 'react';
import '../styles/orderPage.css';
import {FaEdit, FaTrashAlt} from 'react-icons/fa';
import Pagination from '@mui/material/Pagination';

const OrderPage = () => {
  return (
    <div className="dash-order-wrapper">
      <div className="order-filter">
        <select>
          <option value="all">All</option>
          <option value="pending">pending</option>
          <option value="successful">successful</option>
        </select>
      </div>
      <div className="order-table-wrapper">
        <table className="dash-tbl">
            <thead>
              <tr>
                <th width="80">No.</th>
                <th className="title">Name</th>
                <th width="300">Phone Number</th>
                <th width="80">Process</th>
                <th width="80">Detail</th>
              </tr>
            </thead>
            <tbody>
              {
                Array.from({length: 10}).map(item=>{
                  return (
                    <tr>
                      <td>1</td>
                      <td className="title">Novel</td>
                      <td>011 336 353</td>
                      <td className="red">Pending</td>
                      <td>
                        <button type="button" className="btn-view-order">View</button>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
      </div>
      <div className="order-pagination-wrapper">
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

export default OrderPage