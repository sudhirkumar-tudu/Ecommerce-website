import React from "react";
import AdminLayout from "./AdminLayout";

const Orders = () => {
  return (
    <AdminLayout>
      <h1>Orders</h1>

      <table
        style={{
          width: "100%",
          background: "white",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        <thead style={{ background: "#e2e8f0" }}>
          <tr>
            <th>Order ID</th>
            <th>User</th>
            <th>Total</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>#101</td>
            <td>John Doe</td>
            <td>₹1500</td>
            <td>Pending</td>
            <td>
              <button style={{ marginRight: "10px" }}>Mark Shipped</button>
              <button style={{ color: "green" }}>Mark Delivered</button>
            </td>
          </tr>
        </tbody>
      </table>
    </AdminLayout>
  );
};

export default Orders;