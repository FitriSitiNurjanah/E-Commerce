import React from "react";
import { Link } from "react-router-dom";
import { auth, logout } from "../../config/firebase/index";
import { useAuthState } from "react-firebase-hooks/auth";
import { StyledHeader, StyledNavbar, Li, StyledMobile, StyledCart, Styledclose, Styledlogout } from "./navbarStyles";
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
      <StyledHeader id="header">
        <Link to="/">
          <img src="assets/img/logo.png" className="logo" alt="logo" />
        </Link>

        <div>
          <StyledNavbar id="navbar">
            <Li>
              <Link to="/">Home</Link>
            </Li>
            <Li>
              <Link to="/product">Product</Link>
            </Li>
            {user ? (
              <Li>
                <Styledlogout id="logout" onClick={logout}>
                  Logout
                </Styledlogout>
              </Li>
            ) : (
              <Li>
                <Link to="/login">Login</Link>
              </Li>
            )}
            {user && (
              <Li id="lg-bag">
                {" "}
                <Link to="/cart">
                  <i className="fa fa-shopping-cart"></i>
                </Link>
              </Li>
            )}

            <Styledclose href="#" id="close" onClick={HandlerToggleClose}>
              <i className="fa fa-times"></i>
            </Styledclose>
          </StyledNavbar>
        </div>
        <StyledMobile id="mobile">
          <StyledCart>
            {user ? (
              <Link to="/cart">
                <i className="fa fa-shopping-cart"></i>
              </Link>
            ) : (
              <Link to="#"></Link>
            )}
          </StyledCart>
          <i id="bar" className="fa fa-outdent" onClick={HandlerToggleMobile}></i>
        </StyledMobile>
      </StyledHeader>
    </React.Fragment>
  );
}
