import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/Auth";
import { toast } from "react-toastify";

const URL = "http://localhost:5000/api/auth/login";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    // console.log(name, value);

    setUser({
      ...user,
      [name]: value,
    });
  };

  const navigate = useNavigate();
  const { storeTokenInLocalStorage } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // alert(user);
    console.log(user);
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(user),
      });

      // console.log("Login form", response);
      const response_data = await response.json();
      // console.log(response_data);

      if (response.ok) {
        storeTokenInLocalStorage(response_data.token);
        setUser({
          email: "",
          password: "",
        });

        toast.success("Login Successfull");
        navigate("/");
      } else {
        console.log("Invalid Credential");

        toast.error(
          response_data.extraDetails
            ? response_data.extraDetails
            : response_data.message
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <section>
        <main>
          <div className="section-login">
            <div className="container grid grid-two-cols">
              <div className="login-image">
                <img
                  src="/images/login.png"
                  alt="image"
                  width="500"
                  height="500"
                />
              </div>

              {/* Lets tackle Login form  */}
              <div className="login-form">
                <h1 className="main-heading mb-3">
                  <br />

                  <form onSubmit={handleSubmit}>
                    {/* email  */}
                    <div className="two-cols">
                      <label htmlFor="email">email</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter your email"
                        required
                        autoComplete="off"
                        value={user.email}
                        onChange={handleInput}
                      />
                    </div>

                    {/* password  */}
                    <div className="two-cols">
                      <label htmlFor="password">password</label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Enter your password"
                        required
                        autoComplete="off"
                        value={user.password}
                        onChange={handleInput}
                      />
                    </div>

                    <br />
                    {/* submit button  */}
                    <button className="btn btn-submit" type="submit">
                      Register Now
                    </button>
                  </form>
                </h1>
              </div>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
};

export default Login;
