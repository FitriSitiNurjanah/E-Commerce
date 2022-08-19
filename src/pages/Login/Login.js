import React, { useEffect, useState } from "react";
import { auth, logInWithEmailAndPassword, registerWithEmailAndPassword } from "../../config/firebase/index";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  //State for the form
  const [login, setLogin] = useState({ email: "", password: "" });
  const [regist, setRegist] = useState({
    name: "",
    email: "",
    password: "",
  });

  //handler button
  const handleSubmit = async (e, params) => {
    e.preventDefault();
    // console.log("TEST");
    if (params === "login") {
      await logInWithEmailAndPassword(login.email, login.password);
      // console.log("SELESAI await");
    } else {
      await registerWithEmailAndPassword(regist.name, regist.email, regist.password);
      alert("registrasi success");
    }
  };

  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) navigate("/");
    if (error) alert(error);
  }, [loading, user, error, navigate]);

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
                    {/* <hr id="indicator" /> */}
                  </div>
                  <form action="" id="LoginForm">
                    <input type="text" placeholder="Username" onChange={(e) => setLogin({ ...login, email: e.target.value })} />
                    <input type="password" placeholder="Password" onChange={(e) => setLogin({ ...login, password: e.target.value })} />
                    <button type="submit" className="btn" onClick={(e) => handleSubmit(e, "login")}>
                      Login
                    </button>
                    <a href="">Forgot Password</a>
                  </form>
                  <form action="" id="RegForm">
                    <input type="text" placeholder="Username" onChange={(e) => setRegist({ ...regist, name: e.target.value })} />
                    <input type="email" placeholder="Email" onChange={(e) => setRegist({ ...regist, email: e.target.value })} />
                    <input type="password" placeholder="Password" onChange={(e) => setRegist({ ...regist, password: e.target.value })} />
                    <button type="submit" className="btn" onClick={(e) => handleSubmit(e, "regist")}>
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
