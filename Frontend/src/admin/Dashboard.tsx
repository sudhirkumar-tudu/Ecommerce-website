import React from "react";
import AdminLayout from "./AdminLayout";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  ArcElement,
  Tooltip,
  Legend
);


ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  ArcElement,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Revenue",
        data: [100, 150, 120, 200, 180, 220, 170],
        borderColor: "#6366f1",
        tension: 0.4,
      },
      {
        label: "Orders",
        data: [80, 120, 100, 160, 140, 180, 150],
        borderColor: "#94a3b8",
        tension: 0.4,
      },
    ],
  };

  return (
    <AdminLayout>
      <h2 style={{ marginBottom: "20px" }}>Wishing You a Great Day!</h2>

      {/* 🔹 KPI Cards */}
      <div className="kpi-grid">
        <div className="kpi card1">
          <p>Total Sales</p>
          <h2>$628,454</h2>
          <span>↑ 43.7%</span>
        </div>

        <div className="kpi card2">
          <p>Visitors</p>
          <h2>450,234</h2>
          <span>↑ 17%</span>
        </div>

        <div className="kpi card3">
          <p>Total Orders</p>
          <h2>4,200</h2>
          <span>↑ 30%</span>
        </div>

        <div className="kpi card4">
          <p>Refunded</p>
          <h2>761,375</h2>
          <span style={{ color: "red" }}>↓ 10%</span>
        </div>
      </div>

      {/* 🔹 Charts Row */}
      <div className="grid-2">

        {/* Line Chart */}
        <div className="box">
          <h3>Revenue vs Orders</h3>
          <Line data={lineData} />
        </div>

        {/* Pie Chart */}
        <div className="box">
          <h3>Sale Category</h3>
          <div style={{ textAlign: "center", paddingTop: "40px" }}>
            <h2>$124,213</h2>
            <p>Electronics</p>
          </div>
        </div>
      </div>

      {/* 🔹 Bottom Section */}
      <div className="grid-2">

        {/* Table */}
        <div className="box">
          <h3>Top Products</h3>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Sold</th>
                <th>Sales</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>iPhone 13 Pro</td>
                <td>$1099</td>
                <td>50</td>
                <td>$54,950</td>
              </tr>
              <tr>
                <td>Sony WH-1000XM4</td>
                <td>$349</td>
                <td>100</td>
                <td>$34,900</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Recent Sales */}
        <div className="box">
          <h3>Recent Sales</h3>
          <p>Ethan Williams +$89</p>
          <p>Liam Johnson +$28</p>
          <p>Isabella +$45</p>
        </div>

      </div>
    </AdminLayout>
  );
};

export default Dashboard;