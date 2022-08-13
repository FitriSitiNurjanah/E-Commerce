import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="section-p1">
        <div className="col">
          <img className="logo" src="assets/img/logo.png" alt="" />
          <h4>Contact</h4>
          <p>
            {" "}
            <strong>Address : </strong> Kenanga Terusan No.32, RT.4/RW.3, Cilandak Tim. Jakarta Selatan{" "}
          </p>
          <p>
            <strong>Phone :</strong> (021) 27807833
          </p>
          <p>
            <strong>Hours : </strong>07:00 - 19:00, Mon - Sat
          </p>
          <div className="follow">
            <h4>Follow Us</h4>
            <div className="icon">
              <i className="fa fa-facebook-f"></i>
              <i className="fa fa-twitter"></i>
              <i className="fa fa-instagram"></i>
              <i className="fa fa-pinterest-p"></i>
              <i className="fa fa-youtube"></i>
            </div>
          </div>
        </div>
        <div className="col">
          <h4>About</h4>
          <a href="#">About Us</a>
          <a href="#">Delivery Information</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Contact Us</a>
        </div>
        <div className="col">
          <h4>My Account</h4>
          <a href="#">Sign In </a>
          <a href="#">View Cart</a>
          <a href="#">My Wishlist</a>
          <a href="#">Track My Order</a>
          <a href="#">Help</a>
        </div>

        <div className="col install">
          <h4>Install App</h4>
          <p>From App Store or Google Play</p>
          <div className="row">
            <img src="assets/img/pay/app.jpg" alt="" />
            <img src="assets/img/pay/play.jpg" alt="" />
          </div>
          <p>Secured Payment Gateway</p>
          <img src="assets/img/pay/pay.png" alt="" />
        </div>
        <div className="copyright">
          <p>2022, CAP HTML CSS Ecommerce</p>
        </div>
      </footer>
    </div>
  );
}
