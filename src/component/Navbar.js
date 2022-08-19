import React from "react";
import { Link } from "react-router-dom";
import { auth, db, logout } from "../config/firebase/index";
import { useAuthState } from "react-firebase-hooks/auth";

export default function () {
  const [user] = useAuthState(auth);
  const HandlerToggleMobile = () => {
    const nav = document.getElementById("navbar");
    nav.classList.add("active");
  };
  const HandlerToggleClose = () => {
    const nav = document.getElementById("navbar");
    nav.classList.remove("active");
  };
  return (
    <React.Fragment>
      {" "}
      <section id="header">
        <Link to="/">
          <img src="assets/img/logo.png" className="logo" alt="logo" />
        </Link>

        <div>
          <ul id="navbar">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/product">Product</Link>
            </li>
            {user ? (
              <li>
                <div id="logout" onClick={logout}>
                  Logout
                </div>
              </li>
            ) : (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}
            {user ? (
              <li id="lg-bag">
                {" "}
                <Link to="/cart">
                  <i className="fa fa-shopping-cart"></i>
                </Link>
              </li>
            ) : (
              <Link to="/login">
                <i className="fa fa-shopping-cart"></i>
              </Link>
            )}

            <a href="#" id="close" onClick={HandlerToggleClose}>
              <i className="fa fa-times"></i>
            </a>
          </ul>
        </div>
        <div id="mobile">
          <Link to="/cart">
            <i className="fa fa-shopping-cart"></i>
          </Link>
          <i id="bar" className="fa fa-outdent" onClick={HandlerToggleMobile}></i>
        </div>
      </section>
    </React.Fragment>
  );
}
