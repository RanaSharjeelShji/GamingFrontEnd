import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const navigate = useNavigate();
  // signup
  const [registerData, setRegisterData] = useState({
    name: "",
    phone: "",
    password: "",
    place: "",
    email: "",
  });
  // signin state
  const [signInData, setSignInData] = useState({
    email: "admin@gmail.com",
    password: "12345678",
  });

  // signin
  const handleLogin = (event) => {
    const { name, value } = event.target;
    setSignInData({
      ...signInData,
      [name]: value,
    });
  };

  // signin
  const handleSignIn = async (e) => {
    e.preventDefault();

    await axios
      .post("http://localhost:8000/api/login", signInData)
      .then((response) => {
        if (response.status === 200) {
          const token = response.data?.data?.token;
          if (token) {
            localStorage.setItem("auth_token", token);
          }
          toast.success("You have successfully Logged in!");
          setSignInData({
            email: "",
            password: "",
          });
          setTimeout(() => {
            navigate("/");
          }, 1000);
        } else {
          console.error("Sign-in failed:", response.data);
          alert("asfd: ");
          toast.error("Sign-in failed. Please check your credentials.");
        }
      })
      .catch((error) => {
        console.error("Sign-in error:", error);
        toast.error("Sign-in failed. Please check your credentials.");
      });
  };

  // signup

  const handleOnChange = (event) => {
    const { name, value } = event.target;

    setRegisterData({
      ...registerData,
      [name]: value,
    });
  };

  // registration
  const handleRegister = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/register", registerData)
      .then((response) => {
        if (response.status === 200) {
          const token = response.data?.data?.token;
          if (token) {
            localStorage.setItem("auth_token", token);
          }
          toast.success("Registration successful!");
          setRegisterData({
            phone: "",
            password: "",
            name: "",
            place: "",
            email: "",
          });
          setTimeout(() => {
            navigate("/login");
          }, 1000);
        } else {
          console.error();
          toast.error("Registration failed. Please try again.");
        }
      })
      .catch((error) => {
        console.error(error);
        toast.error("Registration failed. Please try again.");
      });
  };

  return (
    <div>
      <section className="user-form-part">
        <ToastContainer />
        <div className="user-form-banner">
          <div className="user-form-content">
            <div className="d-flex align-items-center justify-content-center">
              <img width={60} src="/images/pexels/game.png" alt="" />
              <Link>
                {/* <img src="images/logo.png" alt="logo" /> */}
                <p
                  className="pt-4 mt-2 px-2"
                  style={{
                    fontWeight: "bold",
                    fontSize: "3rem",
                    color: "#4444FF",
                  }}
                >
                  GameTradeHub<span style={{ color: "#6F6FFF" }}></span>
                </p>
              </Link>
            </div>
            {/* <h1>
            Welcome to GameTradeHub!
            </h1> */}
            <span
              className="text-white text-center"
              style={{ fontSize: "1.1rem" }}
            >
              {" "}
              The ultimate hub for gamers to buy, sell, and trade their way{" "}
              <br /> to gaming greatness!
            </span>
          </div>
        </div>
        <div className="user-form-category">
          <div className="user-form-header">
            <Link>
              <img src="images/logo.png" alt="logo" />
            </Link>
          </div>
          <div className="user-form-category-btn">
            <ul className="nav nav-tabs">
              <li>
                <a
                  href="#login-tab"
                  className="nav-link active"
                  data-toggle="tab"
                >
                  sign in
                </a>
              </li>
              <li>
                <a href="#register-tab" className="nav-link" data-toggle="tab">
                  sign up
                </a>
              </li>
            </ul>
          </div>
          <div className="tab-pane active" id="login-tab">
            <div className="user-form-title">
              <h2>Welcome!</h2>
              <p>Use credentials to access your account.</p>
            </div>
            <form onSubmit={handleSignIn}>
              <div className="row">
                <div className="col-12">
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Email"
                      value={signInData.email}
                      onChange={handleLogin}
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      id="pass"
                      name="password"
                      placeholder="Password"
                      value={signInData.password}
                      onChange={handleLogin}
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <button type="submit" className="btn btn-inline ">
                      <i className="fas fa-unlock"></i>
                      <span>Enter your account</span>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          {/* sign up */}
          <div className="tab-pane" id="register-tab">
            <div className="user-form-title">
              <h2>Register</h2>
              <p>Setup a new account in a minute.</p>
            </div>
            <form onSubmit={handleRegister}>
              <div className="row">
                <div className="col-12">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      name="name"
                      value={registerData.name}
                      onChange={handleOnChange}
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email"
                      name="email"
                      value={registerData.email}
                      onChange={handleOnChange}
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone number"
                      name="phone"
                      value={registerData.phone}
                      onChange={handleOnChange}
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      name="password"
                      value={registerData.password}
                      onChange={handleOnChange}
                    />
                    <button className="form-icon">
                      <i className="eye fas fa-eye"></i>
                    </button>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Location"
                      name="place"
                      value={registerData.place}
                      onChange={handleOnChange}
                    />
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-group">
                    <button type="submit" className="btn btn-inline">
                      <i className="fas fa-user-check"></i>
                      <span>Create new account</span>
                    </button>
                  </div>
                </div>
              </div>
            </form>
            <div className="user-form-direction">
              <p>
                Already have an account? click on the
                <span>( sign in )</span>button above.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Form;
