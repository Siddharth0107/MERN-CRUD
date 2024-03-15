import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/Auth";
import { toast } from "react-toastify";

const Registration = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const navigate = useNavigate();

  const { storeTokenInLocalStorage } = useAuth();

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    // console.log(name, value);

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(user);
    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      // console.log("Fetch", response);
      const response_data = await response.json();
      // console.log("response data", response_data);

      if (response.ok) {
        storeTokenInLocalStorage(response_data.token);
        setUser({ name: "", email: "", phone: "", password: "" });
        toast.success("Registration Successfull");
        navigate("/");
      } else {
        toast.error(
          response_data.extraDetails
            ? response_data.extraDetails
            : response_data.message
        );
      }
    } catch (error) {
      console.log("register", error);
    }
  };
  return (
    <div>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid two-cols">
              <div className="registration-image">
                <img
                  src="/images/register.png"
                  alt="image"
                  width="500"
                  height="500"
                />
              </div>

              {/* Lets tackle registration form  */}
              <div className="regsitration-form">
                <h1 className="main-heading mb-3">
                  <br />

                  <form onSubmit={handleSubmit}>
                    {/* name  */}
                    <div className="two-cols">
                      <label htmlFor="name">name</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Enter your name"
                        required
                        autoComplete="off"
                        value={user.name}
                        onChange={handleInput}
                      />
                    </div>

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

                    {/* phone  */}
                    <div className="two-cols">
                      <label htmlFor="phone">phone</label>
                      <input
                        type="number"
                        name="phone"
                        id="phone"
                        placeholder="Enter your phone"
                        required
                        autoComplete="off"
                        value={user.phone}
                        onChange={handleInput}
                      />
                    </div>
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

export default Registration;
