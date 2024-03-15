import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../store/Auth";

const Navbar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div>
      <header>
        <div className="container">
          <div className="logo-brand">
            <a href="/">Urvashi</a>
          </div>
          <nav className="nav">
            <ul>
              <li>
                <NavLink className="li" to="/">Home</NavLink>
              </li>
              <li>
                <NavLink className="li" to="/about">About</NavLink>
              </li>
              <li>
                <NavLink className="li" to="/contact">Contact</NavLink>
              </li>
              <li>
                <NavLink className="li" to="/services">Services</NavLink>
              </li>
              {isLoggedIn ? (
                <li>
                  <NavLink className="li" to="/logout">Logout</NavLink>
                </li>
              ) : (
                <>
                  <li>
                    <NavLink className="li" to="/register">Registration</NavLink>
                  </li>

                  <li>
                    <NavLink className="li" to="/login">Login</NavLink>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
