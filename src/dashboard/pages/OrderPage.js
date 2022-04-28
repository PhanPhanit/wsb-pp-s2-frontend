import React, {useState, useEffect} from 'react';
import '../styles/orderPage.css';
import Pagination from '@mui/material/Pagination';
import {FaSearch} from 'react-icons/fa';
import { orderUrl } from '../../UrlEndPoint';
import { useDashOrderContext } from '../contexts/dash_order_context';
import { useActionContext } from '../contexts/action_context';

const OrderPage = () => {
  const {openFormUpdate} = useActionContext();
  const {
    fetchOrder,
    orders,
    currentPage,
    totalPage,
    setViewOrderId
  } = useDashOrderContext();
  const [fetchOrderLoading, setFetchOrderLoading] = useState(true);
  const [orderPage, setOrderPage] = useState(1);
  const [tableLoading, setTableLoading] = useState(false);
  const [filterStatus, setFilterStatus] = useState('all');
  const [orderSearch, setOrderSearch] = useState("");

  const firstFetchOrder = async () => {
    setFetchOrderLoading(true);
    try {
      await fetchOrder(`${orderUrl}?page=${orderPage}&sort=-createdAt`);
    } catch (error) {
      console.log(error);
    }
    setFetchOrderLoading(false);
  }

  const pageChange = async (_, value) => {
    setOrderPage(value);
    setTableLoading(true);
    let url = `${orderUrl}?page=${value}&sort=-createdAt`;
    if(filterStatus!=='all'){
      url += `&status=${filterStatus}`;
    }
    if(orderSearch!==""){
      url += `&search=${orderSearch}`;
    }
    try {
      await fetchOrder(url);
    } catch (error) {
      console.log(error);
    }
    setTableLoading(false);
  }

  const handleFilterStatusChange = async (e) => {
    setOrderSearch("");
    const value = e.currentTarget.value;
    setFilterStatus(value);
    setOrderPage(1)
    setTableLoading(true);
    let url;
    if(value==='all'){
      url = `${orderUrl}?page=1&sort=-createdAt`;
    }else{
      url = `${orderUrl}?page=1&status=${value}&sort=-createdAt`;
    }
    try {
      await fetchOrder(url);
    } catch (error) {
      console.log(error);
    }
    setTableLoading(false);

  }

  const handleSearch = async (e) => {
    e.preventDefault();
    setOrderPage(1);
    setTableLoading(true);
    let url = `${orderUrl}?page=${1}&search=${orderSearch}&sort=-createdAt`;
    if(filterStatus!=='all'){
      url += `&status=${filterStatus}`;
    }
    try {
      await fetchOrder(url);
    } catch (error) {
      console.log(error);
    }
    setTableLoading(false);
  }

  const handleViewOrderDetail = (orderId) => {
    openFormUpdate();
    setViewOrderId(orderId);
  }

  useEffect(()=>{
    firstFetchOrder();
  }, []);

  if(fetchOrderLoading){
    return (
      <div className="dash-loading">
        <div className="dash-lds-ring"><div></div><div></div><div></div><div></div></div>
      </div>
    );
  }

  return (
    <div className="dash-order-wrapper">
      <div className="order-search-filter">
        <form className="frm-search" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search here..."
            value={orderSearch}
            onChange={(e)=>setOrderSearch(e.target.value)}
          />
          <button type="submit">
            <FaSearch className="search-icon" />
          </button>
        </form>
        <select value={filterStatus} onChange={handleFilterStatusChange}>
          <option value="all">All</option>
          <option value="pending">pending</option>
          <option value="success">success</option>
        </select>
      </div>
      <div className="order-table-wrapper">
        <table className="dash-tbl">
            <thead>
              <tr>
                <th width="80">No.</th>
                <th className="title">Name</th>
                <th width="200">Order Date</th>
                <th width="200">Phone Number</th>
                <th width="80">Process</th>
                <th width="80">Detail</th>
              </tr>
            </thead>
            <tbody>
              {
                !tableLoading && orders.map((order, index)=>{
                  const {_id: id, user: {name: userName}, status, orderDate, phoneNumber, total} = order;
                  const altIndex = 10 * currentPage - 10 + (index + 1);
                  return (
                    <tr key={index}>
                      <td>{altIndex}</td>
                      <td className="title">{userName}</td>
                      <td>{orderDate.split('T')[0]}</td>
                      <td>{phoneNumber}</td>
                      <td className={status==="success"?"color-success":"red"}>{status}</td>
                      <td>
                        <button type="button" className="btn-view-order" onClick={()=>handleViewOrderDetail(id)}>View</button>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
      </div>


      {/* order loading */}
      {
        tableLoading && (
          <div className="loading-wrapper">
            <div className="dash-loading">
              <div className="dash-lds-ring"><div></div><div></div><div></div><div></div></div>
            </div>
          </div>
        )
      }
      {/* end order loading */}

      {/* no product */}
      {
        !tableLoading && orders.length === 0 && (
          <div className="d-flex align-item-center justify-content-center m-top-20">
            <h2>No product</h2>
          </div>
        )
      }
      {/* end no product */}

      {
        !tableLoading && orders.length !== 0 && (
          <div className="order-pagination-wrapper">
            <div className="dash-pagination">
              <Pagination
                count={totalPage}
                page={orderPage}
                shape="rounded"
                onChange={pageChange}
              />
            </div>
          </div>
        )
      }


      


    </div>
  )
}

export default OrderPage