import React from "react";
import { StyledFooter, Col, H4, P, A, Follow, Row, Copyright } from "./footerStyles";

export default function Footer() {
  return (
    <div>
      <StyledFooter className="section-p1">
        <Col className="col">
          <img className="logo" src="assets/img/logo.png" alt="" />
          <H4>Contact</H4>
          <P>
            {" "}
            <strong>Address : </strong> Kenanga Terusan No.32, RT.4/RW.3, Cilandak Tim. Jakarta Selatan{" "}
          </P>
          <P>
            <strong>Phone :</strong> (021) 27807833
          </P>
          <P>
            <strong>Hours : </strong>07:00 - 19:00, Mon - Sat
          </P>
          <Follow className="follow">
            <H4>Follow Us</H4>
            <div className="icon">
              <i className="fa fa-facebook-f"></i>
              <i className="fa fa-twitter"></i>
              <i className="fa fa-instagram"></i>
              <i className="fa fa-pinterest-p"></i>
              <i className="fa fa-youtube"></i>
            </div>
          </Follow>
        </Col>
        <Col className="col">
          <H4>About</H4>
          <A href="#">About Us</A>
          <A href="#">Delivery Information</A>
          <A href="#">Privacy Policy</A>
          <A href="#">Terms & Conditions</A>
          <A href="#">Contact Us</A>
        </Col>
        <Col className="col">
          <H4>My Account</H4>
          <A href="#">Sign In </A>
          <A href="#">View Cart</A>
          <A href="#">My Wishlist</A>
          <A href="#">Track My Order</A>
          <A href="#">Help</A>
        </Col>

        <Col className="col install">
          <H4>Install App</H4>
          <P>From App Store or Google Play</P>
          <Row className="row">
            <img src="assets/img/pay/app.jpg" alt="" />
            <img src="assets/img/pay/play.jpg" alt="" />
          </Row>
          <P>Secured Payment Gateway</P>
          <img src="assets/img/pay/pay.png" alt="" />
        </Col>
        <Copyright className="copyright">
          <P>2022, CAP HTML CSS Ecommerce</P>
        </Copyright>
      </StyledFooter>
    </div>
  );
}
