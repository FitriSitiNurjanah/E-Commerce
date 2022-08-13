import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function () {
  return (
    <React.Fragment>
      <section id="page-header">
        <h2>#StayHome</h2>
        <p>Save more with coupons & up to 70% off</p>
      </section>

      <section id="cart" className="section-p1">
        <table width="100%">
          <thead>
            <tr>
              <td> Remove </td>
              <td> Image </td>
              <td> Product </td>
              <td> Price </td>
              <td> Quantity </td>
              <td> Subtotal </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <i className="fa fa-times-circle">
                  <a href="#"></a>
                </i>
              </td>
              <td>
                <img src="assets/img/products/f1.jpg" alt="" />
              </td>
              <td>Cartoon astronot T-Shirt</td>
              <td>$118</td>
              <td>
                <input type="number" value="1" />
              </td>
              <td>$118</td>
            </tr>
            <tr>
              <td>
                <i className="fa fa-times-circle">
                  <a href="#"></a>
                </i>
              </td>
              <td>
                <img src="assets/img/products/f2.jpg" alt="" />
              </td>
              <td>Cartoon astronot T-Shirt</td>
              <td>$118</td>
              <td>
                <input type="number" value="1" />
              </td>
              <td>$118</td>
            </tr>
            <tr>
              <td>
                <i className="fa fa-times-circle">
                  <a href="#"></a>
                </i>
              </td>
              <td>
                <img src="assets/img/products/f3.jpg" alt="" />
              </td>
              <td>Cartoon astronot T-Shirt</td>
              <td>$118</td>
              <td>
                <input type="number" value="1" />
              </td>
              <td>$118</td>
            </tr>
            <tr>
              <td>
                <i className="fa fa-times-circle">
                  <a href="#"></a>
                </i>
              </td>
              <td>
                <img src="assets/img/products/f4.jpg" alt="" />
              </td>
              <td>Cartoon astronot T-Shirt</td>
              <td>$118</td>
              <td>
                <input type="number" value="1" />
              </td>
              <td>$118</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section id="cart-add" className="section-p1">
        <div id="coupon">
          <h3>Apply Coupon</h3>
          <div>
            <input type="text" placeholder="Input your coupon" />
            <button className="normal">Apply</button>
          </div>
        </div>
        <div id="subtotal">
          <h3>Cart Totals</h3>
          <table>
            <tr>
              <td>Cart Subtotal</td>
              <td>$12.25</td>
            </tr>
            <tr>
              <td>Shipping</td>
              <td>Free</td>
            </tr>
            <tr>
              <td>
                <strong>Total</strong>
              </td>
              <td>
                <strong>$324</strong>
              </td>
            </tr>
          </table>
          <button className="normal">Checkout</button>
        </div>
      </section>
    </React.Fragment>
  );
}
