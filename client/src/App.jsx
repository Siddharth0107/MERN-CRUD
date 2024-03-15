import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Service from "./Pages/Service";
import Registration from "./Pages/Registration";
import Login from "./Pages/Login";
import Contact from "./Pages/Contact";
import Notfound from "./Pages/Notfound";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Logout from "./Pages/Logout";
import AdminLayout from "./Components/Layouts/AdminLayout";
import AdminUsers from "./Pages/AdminUsers";
import AdminContacts from "./Pages/AdminContacts";
import AdminUpdate from "./Pages/AdminUpdate";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Service />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/*" element={<Notfound />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="users" element={<AdminUsers />} />
            <Route path="contacts" element={<AdminContacts />} />
            <Route path="users/update/:id" element={<AdminUpdate />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
