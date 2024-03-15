import React, { useState } from "react";
import { useAuth } from "../store/Auth";
import { toast } from "react-toastify";

const defaultContactForm = {
  name: "",
  email: "",
  message: "",
};

const Contact = () => {
  const [contact, setContact] = useState(defaultContactForm);
  const { user } = useAuth();

  const [userData, setUserData] = useState(true);
  if (userData && user) {
    setContact({
      name: user.name,
      email: user.email,
      message: "",
    });
    setUserData(false);
  }

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/form/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });
      if (response.ok) {
        setContact(defaultContactForm);
        const data = await response.json();
        // console.log(data);
        toast.success("Message sent successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="contact-form">
      <form action="" onSubmit={handleSubmit}>
        <div className="two-cols">
          <label className="label" htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            autoComplete="off"
            onChange={handleInput}
            value={contact.name}
            required
          />
        </div>
        <div className="two-cols">
          <label className="label" htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            autoComplete="off"
            onChange={handleInput}
            value={contact.email}
            required
          />
        </div>
        <div className="two-cols">
          <label className="label" htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            cols="70"
            rows="5"
            placeholder="Share your response"
            autoComplete="off"
            onChange={handleInput}
            value={contact.message}
            required
          ></textarea>
        </div>
        <br />
        <button className="btn btn-submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Contact;
