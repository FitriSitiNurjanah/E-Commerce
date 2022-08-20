import React from "react";
import { Link } from "react-router-dom";
import sectionP1 from "../../component/globalStyles";

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

        <sectionP1 id="feature" className="section-p1">
          <div className="fe-box">
            <img src="assets/img/features/f1.png" alt="" />
            <h6>Free Shipping</h6>
          </div>
          <div className="fe-box">
            <img src="assets/img/features/f2.png" alt="" />
            <h6>Online Order</h6>
          </div>
          <div className="fe-box">
            <img src="assets/img/features/f3.png" alt="" />
            <h6>Save Money</h6>
          </div>
          <div className="fe-box">
            <img src="assets/img/features/f4.png" alt="" />
            <h6>Promotions</h6>
          </div>
          <div className="fe-box">
            <img src="assets/img/features/f5.png" alt="" />
            <h6>Happy Sell</h6>
          </div>
          <div className="fe-box">
            <img src="assets/img/features/f6.png" alt="" />
            <h6>Support</h6>
          </div>
        </sectionP1>

        <sectionP1 id="product1" className="section-p1">
          <h2> Featured Product</h2>
          <p>Summer Collection New Morden Design </p>
          <div className="pro-container">
            <div className="pro">
              <img src="assets/img/products/f1.jpg" alt="" />
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
              <a href="/#">
                <i className="fa fa-shopping-cart cart"></i>
              </a>
            </div>
            <div className="pro">
              <img src="assets/img/products/f2.jpg" alt="" />
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
              <a href="/#">
                <i className="fa fa-shopping-cart cart"></i>
              </a>
            </div>
            <div className="pro">
              <img src="assets/img/products/f3.jpg" alt="" />
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
              <a href="/#">
                <i className="fa fa-shopping-cart cart"></i>
              </a>
            </div>
            <div className="pro">
              <img src="assets/img/products/f4.jpg" alt="" />
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
              <a href="/#">
                <i className="fa fa-shopping-cart cart"></i>
              </a>
            </div>
            <div className="pro">
              <img src="assets/img/products/f5.jpg" alt="" />
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
              <a href="/#">
                <i className="fa fa-shopping-cart cart"></i>
              </a>
            </div>
            <div className="pro">
              <img src="assets/img/products/f6.jpg" alt="" />
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
              <a href="/#">
                <i className="fa fa-shopping-cart cart"></i>
              </a>
            </div>
            <div className="pro">
              <img src="assets/img/products/f7.jpg" alt="" />
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
              <a href="/#">
                <i className="fa fa-shopping-cart cart"></i>
              </a>
            </div>
            <div className="pro">
              <img src="assets/img/products/f8.jpg" alt="" />
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
              <a href="/#">
                <i className="fa fa-shopping-cart cart"></i>
              </a>
            </div>
          </div>
        </sectionP1>

        <section id="banner" className="section-m1">
          <h4>Repear Service</h4>
          <h2>
            UP to <span>70% off </span> - All t-Shirts & Accessories
          </h2>
          <button className="normal">Explore More</button>
        </section>

        <sectionP1 id="product1" className="section-p1">
          <h2> New Arrival</h2>
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
              <a href="/#">
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
              <a href="/#">
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
              <a href="/#">
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
              <a href="/#">
                <i className="fa fa-shopping-cart cart"></i>
              </a>
            </div>
            <div className="pro">
              <img src="assets/img/products/n5.jpg" alt="" />
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
              <a href="/#">
                <i className="fa fa-shopping-cart cart"></i>
              </a>
            </div>
            <div className="pro">
              <img src="assets/img/products/n6.jpg" alt="" />
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
              <a href="/#">
                <i className="fa fa-shopping-cart cart"></i>
              </a>
            </div>
            <div className="pro">
              <img src="assets/img/products/n7.jpg" alt="" />
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
              <a href="/#">
                <i className="fa fa-shopping-cart cart"></i>
              </a>
            </div>
            <div className="pro">
              <img src="assets/img/products/n8.jpg" alt="" />
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
              <a href="/#">
                <i className="fa fa-shopping-cart cart"></i>
              </a>
            </div>
          </div>
        </sectionP1>
      </React.Fragment>
    </div>
  );
}
