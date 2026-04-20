
import React from "react";
import { Link, useLocation } from "react-router-dom";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  const linkStyle = (path: string) => ({
    color: location.pathname === path ? "#38bdf8" : "white",
    textDecoration: "none",
    display: "block",
    padding: "10px",
    borderRadius: "6px",
    background: location.pathname === path ? "#334155" : "transparent",
  });

  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "Arial" }}>
      
      {/* 🔹 Sidebar */}
      <div
        style={{
          width: "141px",
          background: "#8b51c6",
          color: "white",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h2 style={{ marginBottom: "30px" }}>EcoMart</h2>

        <ul style={{ listStyle: "none", padding: 0 }}>
          <li><Link to="/Dashboard" style={linkStyle("/Dashboard")}>🏠 Dashboard</Link></li>
          <li><Link to="/products" style={linkStyle("/products")}>📦 Products</Link></li>
          <li><Link to="/orders" style={linkStyle("/orders")}>🧾 Orders</Link></li>
          <li><Link to="/users" style={linkStyle("/users")}>👥 Users</Link></li>
        </ul>
      </div>

      {/* 🔹 Main Section */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>

        {/* 🔸 Topbar */}
        <div
          style={{
            height: "60px",
            background: "white",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 20px",
            borderBottom: "1px solid #e2e8f0",
          }}
        >
          <input
            type="text"
            placeholder="Search..."
            style={{
              padding: "8px",
              width: "250px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          />

          <div style={{ fontWeight: "bold" }}>👨‍💼 Admin</div>
        </div>

        {/* 🔸 Content */}
        <div
          style={{
            flex: 1,
            padding: "20px",
            background: "#f1f5f9",
            overflowY: "auto",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;