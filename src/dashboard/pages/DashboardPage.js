import React from 'react';
import {GrCart} from 'react-icons/gr';
import {RiMoneyDollarCircleLine} from 'react-icons/ri';
import {FaRegUser} from 'react-icons/fa';
import '../styles/dashboardPage.css';
import ChartComponent from '../charts/Column2d';

const DashboardPage = () => {


const data = [
  {
    label: "Venezuela",
    value: "290"
  },
  {
    label: "Saudi",
    value: "260"
  },
  {
    label: "Canada",
    value: "180"
  },
  {
    label: "Iran",
    value: "140"
  },
  {
    label: "Russia",
    value: "115"
  },
  {
    label: "UAE",
    value: "100"
  },
  {
    label: "US",
    value: "30"
  },
  {
    label: "China",
    value: "30"
  }
];
const dataView = [
  {
    label: "Venezuela",
    value: "100"
  },
  {
    label: "Saudi",
    value: "260"
  },
  {
    label: "Canada",
    value: "20"
  },
  {
    label: "Iran",
    value: "14"
  },
  {
    label: "Russia",
    value: "50"
  },
  {
    label: "UAE",
    value: "100"
  },
  {
    label: "US",
    value: "30"
  },
  {
    label: "China",
    value: "30"
  }
];

  return (
    <div className="dashboard-page-wrapper">
      <div className="view-total-number">
        <div className="single-box">
          <h3>9.023</h3>
          <div>
            <span>Total Order</span>
            <GrCart className="icon" />
          </div>
        </div>
        <div className="single-box">
          <h3>9.023</h3>
          <div>
            <span>Total Price</span>
            <RiMoneyDollarCircleLine className="icon" />
          </div>
        </div>
        <div className="single-box">
          <h3>9.023</h3>
          <div>
            <span>Total User</span>
            <FaRegUser className="icon" />
          </div>
        </div>
      </div>
      <div className="chart-wrapper">
        <div className="single-chart">
          <ChartComponent data={data} caption="Most Sold" xAxisName="Product" yAxisName="Sold" />
        </div>
        <div className="single-chart">
          <ChartComponent data={dataView} caption="Most View" xAxisName="Product" yAxisName="View" />
        </div>
      </div>
    </div>
  )
}

export default DashboardPage