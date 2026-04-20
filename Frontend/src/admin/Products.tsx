import React from "react";
import AdminLayout from "./AdminLayout";

const Products = () => {
  return (
    <AdminLayout>
      <h2 style={{ marginBottom: "20px" }}>Products</h2>

      {/* 🔹 Top Bar */}
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
        
      

        <button
          style={{
            background: "#6366f1",
            color: "white",
            padding: "10px 15px",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          + Add Product
        </button>
      </div>

      {/* 🔹 Table */}
      <div style={{
        background: "white",
        borderRadius: "12px",
        padding: "15px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.05)"
      }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead style={{ background: "#f1f5f9" }}>
            <tr>
              <th>ID</th>
              <th>Product</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td>iPhone 13 Pro</td>
              <td>$1099</td>
              <td>50</td>
              <td>
                <button style={editBtn}>Edit</button>
                <button style={deleteBtn}>Delete</button>
              </td>
            </tr>

            <tr>
              <td>2</td>
              <td>Sony WH-1000XM4</td>
              <td>$349</td>
              <td>100</td>
              <td>
                <button style={editBtn}>Edit</button>
                <button style={deleteBtn}>Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
};

const editBtn = {
  marginRight: "10px",
  padding: "6px 10px",
  background: "#3b82f6",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

const deleteBtn = {
  padding: "6px 10px",
  background: "#ef4444",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

export default Products;