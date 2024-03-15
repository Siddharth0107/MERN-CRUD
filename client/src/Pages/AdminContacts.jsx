import React, { useEffect, useState } from "react";
import { useAuth } from "../store/Auth";
import { toast } from "react-toastify";
import { Table } from "react-bootstrap";

const AdminContacts = () => {
  const { authorizationToken } = useAuth();
  const [contact, setContact] = useState([]);

  const getAllContacts = async (req, res) => {
    try {
      const response = await fetch("http://localhost:5000/api/admin/contacts", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      // console.log(data);
      if (response.ok) {
        setContact(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // defining the function
  const deleteContactById = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/contacts/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );
      if (response.ok) {
        getAllContacts();
        toast.success("Deleted Successfully");
      } else {
        toast.error("Failed to delete contact");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllContacts();
  }, []);

  return (
    <div>
      <section className="admin-users-section">
        <div className="container">
          <h1 className="heading">Admin Contact Data</h1>
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
              {contact.map((curElem, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td className="td">{curElem.name}</td>
                    <td>{curElem.email}</td>
                    <td className="td">{curElem.message}</td>

                    <td>
                      <button onClick={() => deleteContactById(curElem._id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          {/* <table>
            <thead>
              <tr>
                <th>Sr No</th>
                <th>Name</th>
                <th>Message</th>
                <th>Email</th>
              </tr>
            </thead>

            <tbody>
              {contact.map((curElem, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{curElem.name}</td>
                    <td>{curElem.message}</td>
                    <td>{curElem.email}</td>
                    <td>
                      <button onClick={() => deleteContactById(curElem._id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table> */}
        </div>
      </section>
    </div>
  );
};

export default AdminContacts;
