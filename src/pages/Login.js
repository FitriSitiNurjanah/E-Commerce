import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Login() {
  // handle menu toggle
  const onClickToggle = (params) => {
    const LoginForm = document.getElementById("LoginForm");
    const RegForm = document.getElementById("RegForm");
    const Indicator = document.getElementById("Indicator");
    if (params === "login") {
      RegForm.style.transform = "translatex(300px)";
      LoginForm.style.transform = "translatex(300px)";
      Indicator.style.transform = "translate(0px)";
    } else {
      RegForm.style.transform = "translatex(0px)";
      LoginForm.style.transform = "translatex(0px)";
      Indicator.style.transform = "translateX(100px)";
    }
  };
  return (
    <React.Fragment>
      <section id="hero" className="login">
        <div className="account-page">
          <div className="container">
            <div className="row">
              <div className="col-2">
                <div className="form-container">
                  <div className="form-btn">
                    <span onClick={() => onClickToggle("login")}>Login</span>
                    <span onClick={() => onClickToggle("register")}>Register</span>
                    <hr id="indicator" />
                  </div>
                  <form action="" id="LoginForm">
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />

                    <button type="submit" className="btn">
                      Login
                    </button>
                    <a href="">Forgot Password</a>
                  </form>
                  <form action="" id="RegForm">
                    <input type="text" placeholder="Username" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button type="submit" className="btn">
                      Register
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
