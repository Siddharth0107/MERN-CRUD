import React, { useState } from "react";
import { useEffect } from "react";
import { useAuth } from "../store/Auth";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from "react-bootstrap"

const AdminUsers = () => {
  const [users, setUsers] = useState([]);

  const { authorizationToken } = useAuth();

  const getAllUsersData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/admin/users", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      // console.log("Users DATA :", data);
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUserByid = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/users/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: authorizationToken,
          },
          body: JSON.stringify(users),
        }
      );
      const data = await response.json();
      // console.log("Users after delete :", data);
      // console.log(response);

      if (response.ok) {
        getAllUsersData();
        toast.success("Deleted successfully");
      } else {
        toast.error("Deleted successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllUsersData();
  }, []);

  return (
    <div>
      <section className="admin-users-section">
        <div className="container">
          <h1 className="heading">Admin Users Data</h1>
        </div>
        <div className="container admin-users">


          <Table>
            <thead>
              <tr>
                <th>Sr No</th>
                <th className="td">Name</th>
                <th className="td"> Phone</th>
                <th>Email</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.map((curElem, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td className="td">{curElem.name}</td>
                    <td className="td">{curElem.phone}</td>
                    <td>{curElem.email}</td>

                    <td>
                      <button onClick={() => deleteUserByid(curElem._id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </section>
    </div>
  );
};

export default AdminUsers;
