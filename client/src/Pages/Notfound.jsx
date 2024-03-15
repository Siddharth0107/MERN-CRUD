import React from "react";
import { NavLink } from "react-router-dom";

const Notfound = () => {
  return (
    <div>
      <section id="error-page">
        <div className="content">
          <h2 className="header">404</h2>
          <h4>Sorry ! Page not found</h4>
          <p>
            Oops! It looks like the page you're looking for doesn't exists. If
            you believe there's an issue, feel free to report to it, and we'll
            look into it.
          </p>
          <div className="btns">
            <NavLink to="/">Retrun to Home</NavLink>
            <NavLink to="/contact">Report Problem</NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Notfound;
