import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ProductDetail() {
  return (
    <React.Fragment>
      <section id="prodetails" className="section-p1">
        <div className="single-pro-image">
          <img src="assets/img/products/f1.jpg" width="100%" id="MainImg" alt="" />

          <div className="small-img-group">
            <div className="small-img-col">
              <img src="assets/img/products/f1.jpg" width="100%" className="small-img" alt="" />
            </div>
            <div className="small-img-col">
              <img src="assets/img/products/f2.jpg" width="100%" className="small-img" alt="" />
            </div>
            <div className="small-img-col">
              <img src="assets/img/products/f3.jpg" width="100%" className="small-img" alt="" />
            </div>
            <div className="small-img-col">
              <img src="assets/img/products/f4.jpg" width="100%" className="small-img" alt="" />
            </div>
          </div>
        </div>
        <div className="single-pro-details">
          <h6>Home / T-Shirt</h6>
          <h4>Men's Fashion T Shirt</h4>
          <h2>$120</h2>
          <select>
            <option>Select Size</option>
            <option>XL</option>
            <option>XXL</option>
            <option>Small</option>
            <option>Large</option>
          </select>
          <input type="number" value="1" />
          <button className="normal" onclick="tambahKeranjang()" id="addCart">
            Add to Cart
          </button>
          <h4>Product Details</h4>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eum cumque iusto, odit incidunt obcaecati nobis dicta nisi, similique sequi natus expedita laboriosam aspernatur consectetur. Pariatur dolorum vero sed quasi?
          </span>
        </div>
      </section>

      <section id="product1" className="section-p1">
        <h2> Featured Product</h2>
        <p>Summer Collection New Morden Design </p>
        <div className="pro-container">
          <div className="pro">
            <img src="assets/img/products/n1.jpg" alt="" />
            <div className="des">
              <span>adidas</span>
              <h5>Cartoun astronot tshirt</h5>
              <div className="star">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <h4>$78</h4>
            </div>
            <a href="#">
              <i className="fa fa-shopping-cart cart"></i>
            </a>
          </div>
          <div className="pro">
            <img src="assets/img/products/n2.jpg" alt="" />
            <div className="des">
              <span>adidas</span>
              <h5>Cartoun astronot tshirt</h5>
              <div className="star">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <h4>$78</h4>
            </div>
            <a href="#">
              <i className="fa fa-shopping-cart cart"></i>
            </a>
          </div>
          <div className="pro">
            <img src="assets/img/products/n3.jpg" alt="" />
            <div className="des">
              <span>adidas</span>
              <h5>Cartoun astronot tshirt</h5>
              <div className="star">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <h4>$78</h4>
            </div>
            <a href="#">
              <i className="fa fa-shopping-cart cart"></i>
            </a>
          </div>
          <div className="pro">
            <img src="assets/img/products/n4.jpg" alt="" />
            <div className="des">
              <span>adidas</span>
              <h5>Cartoun astronot tshirt</h5>
              <div className="star">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <h4>$78</h4>
            </div>
            <a href="#">
              <i className="fa fa-shopping-cart cart"></i>
            </a>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
