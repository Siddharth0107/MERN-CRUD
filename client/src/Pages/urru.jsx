import { useState } from "react";
const URL = "http://localhost:5000/api/auth/login";
const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  //handling input values
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  //handling form
  const handleSubmit = async (e) => {
    e.preventDefault();
    alert(user);
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
      console.log("Login form", response);
      if (response.ok) {
        alert("Login Successful");
        setUser({
          email: "",
          password: "",
        });
      } else {
        console.log("Invalid Credential");
        alert("Invalid Credential");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="registration-image">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXhV6__cur87v3gML_A7nnP_nUNzX1fj_Ggw&usqp=CAU"
                  alt=""
                  width="500"
                  height="400"
                />
              </div>
              {/* Takle registration form */}
              <div className="registration-form">
                <h1 className="main-heading">Login Form</h1>

                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your Email"
                      id="email"
                      required
                      autoComplete="off"
                      value={user.email}
                      onChange={handleInput}
                    />
                  </div>

                  <div>
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      placeholder="Enter password"
                      id="password"
                      required
                      autoComplete="off"
                      value={user.password}
                      onChange={handleInput}
                    />
                  </div>
                  <br />
                  <button type="submit" className="btn">
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Login;
