import React, { useState, useEffect } from "react";
import { useAuth } from "../store/Auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

// const [userData, setdata] = useState(second)
// const {user} = useAuth;

const AdminUpdate = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const params = useParams();
  // console.log("params single user:", params);
  const authorizationToken = useAuth();

  const getSingleUserData = async (req, res) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/users/update/${params.id}`,
        {
          method: "GET",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );
      const userData = await response.json();
      // console.log(`single users data ${data}`);
      setUserData(userData);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getSingleUserData();
  }, [params.id, authorizationToken]);

  const handleInput = (e) => {
    const { name, value } = e.target;

    setUserData({
      ...userData,
      [name]: value,
    });
  };

  // to update the data dynamically

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/users/update/${params.id}`,
        {
          method: "PATCH",
          headers: {
            Authorization: authorizationToken,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );
      if (response.ok) {
        toast.success("Updated Successfully");
      } else {
        toast.error("Error Occured while updating");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="section-contact">
      <div className="contact-content container">
        <h1 className="main-heading">Update User Data</h1>
      </div>
      <div className="container grid grid-two-cols">
        <section className="section-form">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="off"
                value={userData.name}
                onChange={handleInput}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="off"
                value={userData.email}
                onChange={handleInput}
                required
              />
            </div>
            <div>
              <label htmlFor="phone">Mobile</label>
              <input
                type="number"
                name="phone"
                id="phone"
                autoComplete="off"
                value={userData.phone}
                onChange={handleInput}
                required
              />
            </div>
            <div>
              <button type="submit">Update</button>
            </div>{" "}
          </form>
        </section>
      </div>
    </section>
  );
};

export default AdminUpdate;
