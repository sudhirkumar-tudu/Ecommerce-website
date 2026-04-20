import React from "react";
import AdminLayout from "./AdminLayout";

const Users = () => {
  return (
    <AdminLayout>
      <h1>Users</h1>

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
            <th>User ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>Swatej</td>
            <td>swatej@email.com</td>
            <td>Admin</td>
            <td>
              <button style={{ color: "red" }}>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </AdminLayout>
  );
};

export default Users;