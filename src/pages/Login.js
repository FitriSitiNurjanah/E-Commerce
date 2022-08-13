import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <React.Fragment>
      <section id="hero" className="login">
        <div className="account-page">
          <div className="container">
            <div className="row">
              <div className="col-2">
                <div className="form-container">
                  <div className="form-btn">
                    <span className="active" onclick="login()">
                      Login
                    </span>
                    <span className="active" onclick="register()">
                      Register
                    </span>
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
