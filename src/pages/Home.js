import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <React.Fragment>
        <section id="hero">
          <h4>Trade-in-offer</h4>
          <h2>Super value deals</h2>
          <h1>On all product</h1>
          <p>Save more with coupons & up to 70% off</p>
          <button>Shop Now</button>
        </section>

        <section id="feature" class="section-p1">
          <div class="fe-box">
            <img src="assets/img/features/f1.png" alt="" />
            <h6>Free Shipping</h6>
          </div>
          <div class="fe-box">
            <img src="assets/img/features/f2.png" alt="" />
            <h6>Online Order</h6>
          </div>
          <div class="fe-box">
            <img src="assets/img/features/f3.png" alt="" />
            <h6>Save Money</h6>
          </div>
          <div class="fe-box">
            <img src="assets/img/features/f4.png" alt="" />
            <h6>Promotions</h6>
          </div>
          <div class="fe-box">
            <img src="assets/img/features/f5.png" alt="" />
            <h6>Happy Sell</h6>
          </div>
          <div class="fe-box">
            <img src="assets/img/features/f6.png" alt="" />
            <h6>Support</h6>
          </div>
        </section>

        <section id="product1" class="section-p1">
          <h2> Featured Product</h2>
          <p>Summer Collection New Morden Design </p>
          <div class="pro-container">
            <div class="pro">
              <img src="assets/img/products/f1.jpg" alt="" />
              <div class="des">
                <span>adidas</span>
                <h5>Cartoun astronot tshirt</h5>
                <div class="star">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                </div>
                <h4>$78</h4>
              </div>
              <a href="/#">
                <i class="fa fa-shopping-cart cart"></i>
              </a>
            </div>
            <div class="pro">
              <img src="assets/img/products/f2.jpg" alt="" />
              <div class="des">
                <span>adidas</span>
                <h5>Cartoun astronot tshirt</h5>
                <div class="star">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                </div>
                <h4>$78</h4>
              </div>
              <a href="/#">
                <i class="fa fa-shopping-cart cart"></i>
              </a>
            </div>
            <div class="pro">
              <img src="assets/img/products/f3.jpg" alt="" />
              <div class="des">
                <span>adidas</span>
                <h5>Cartoun astronot tshirt</h5>
                <div class="star">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                </div>
                <h4>$78</h4>
              </div>
              <a href="/#">
                <i class="fa fa-shopping-cart cart"></i>
              </a>
            </div>
            <div class="pro">
              <img src="assets/img/products/f4.jpg" alt="" />
              <div class="des">
                <span>adidas</span>
                <h5>Cartoun astronot tshirt</h5>
                <div class="star">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                </div>
                <h4>$78</h4>
              </div>
              <a href="/#">
                <i class="fa fa-shopping-cart cart"></i>
              </a>
            </div>
            <div class="pro">
              <img src="assets/img/products/f5.jpg" alt="" />
              <div class="des">
                <span>adidas</span>
                <h5>Cartoun astronot tshirt</h5>
                <div class="star">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                </div>
                <h4>$78</h4>
              </div>
              <a href="/#">
                <i class="fa fa-shopping-cart cart"></i>
              </a>
            </div>
            <div class="pro">
              <img src="assets/img/products/f6.jpg" alt="" />
              <div class="des">
                <span>adidas</span>
                <h5>Cartoun astronot tshirt</h5>
                <div class="star">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                </div>
                <h4>$78</h4>
              </div>
              <a href="/#">
                <i class="fa fa-shopping-cart cart"></i>
              </a>
            </div>
            <div class="pro">
              <img src="assets/img/products/f7.jpg" alt="" />
              <div class="des">
                <span>adidas</span>
                <h5>Cartoun astronot tshirt</h5>
                <div class="star">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                </div>
                <h4>$78</h4>
              </div>
              <a href="/#">
                <i class="fa fa-shopping-cart cart"></i>
              </a>
            </div>
            <div class="pro">
              <img src="assets/img/products/f8.jpg" alt="" />
              <div class="des">
                <span>adidas</span>
                <h5>Cartoun astronot tshirt</h5>
                <div class="star">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                </div>
                <h4>$78</h4>
              </div>
              <a href="/#">
                <i class="fa fa-shopping-cart cart"></i>
              </a>
            </div>
          </div>
        </section>

        <section id="banner" class="section-m1">
          <h4>Repear Service</h4>
          <h2>
            UP to <span>70% off </span> - All t-Shirts & Accessories
          </h2>
          <button class="normal">Explore More</button>
        </section>

        <section id="product1" class="section-p1">
          <h2> New Arrival</h2>
          <p>Summer Collection New Morden Design </p>
          <div class="pro-container">
            <div class="pro">
              <img src="assets/img/products/n1.jpg" alt="" />
              <div class="des">
                <span>adidas</span>
                <h5>Cartoun astronot tshirt</h5>
                <div class="star">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                </div>
                <h4>$78</h4>
              </div>
              <a href="/#">
                <i class="fa fa-shopping-cart cart"></i>
              </a>
            </div>
            <div class="pro">
              <img src="assets/img/products/n2.jpg" alt="" />
              <div class="des">
                <span>adidas</span>
                <h5>Cartoun astronot tshirt</h5>
                <div class="star">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                </div>
                <h4>$78</h4>
              </div>
              <a href="/#">
                <i class="fa fa-shopping-cart cart"></i>
              </a>
            </div>
            <div class="pro">
              <img src="assets/img/products/n3.jpg" alt="" />
              <div class="des">
                <span>adidas</span>
                <h5>Cartoun astronot tshirt</h5>
                <div class="star">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                </div>
                <h4>$78</h4>
              </div>
              <a href="/#">
                <i class="fa fa-shopping-cart cart"></i>
              </a>
            </div>
            <div class="pro">
              <img src="assets/img/products/n4.jpg" alt="" />
              <div class="des">
                <span>adidas</span>
                <h5>Cartoun astronot tshirt</h5>
                <div class="star">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                </div>
                <h4>$78</h4>
              </div>
              <a href="/#">
                <i class="fa fa-shopping-cart cart"></i>
              </a>
            </div>
            <div class="pro">
              <img src="assets/img/products/n5.jpg" alt="" />
              <div class="des">
                <span>adidas</span>
                <h5>Cartoun astronot tshirt</h5>
                <div class="star">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                </div>
                <h4>$78</h4>
              </div>
              <a href="/#">
                <i class="fa fa-shopping-cart cart"></i>
              </a>
            </div>
            <div class="pro">
              <img src="assets/img/products/n6.jpg" alt="" />
              <div class="des">
                <span>adidas</span>
                <h5>Cartoun astronot tshirt</h5>
                <div class="star">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                </div>
                <h4>$78</h4>
              </div>
              <a href="/#">
                <i class="fa fa-shopping-cart cart"></i>
              </a>
            </div>
            <div class="pro">
              <img src="assets/img/products/n7.jpg" alt="" />
              <div class="des">
                <span>adidas</span>
                <h5>Cartoun astronot tshirt</h5>
                <div class="star">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                </div>
                <h4>$78</h4>
              </div>
              <a href="/#">
                <i class="fa fa-shopping-cart cart"></i>
              </a>
            </div>
            <div class="pro">
              <img src="assets/img/products/n8.jpg" alt="" />
              <div class="des">
                <span>adidas</span>
                <h5>Cartoun astronot tshirt</h5>
                <div class="star">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                </div>
                <h4>$78</h4>
              </div>
              <a href="/#">
                <i class="fa fa-shopping-cart cart"></i>
              </a>
            </div>
          </div>
        </section>
      </React.Fragment>
    </div>
  );
}
