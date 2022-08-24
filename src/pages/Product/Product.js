import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { StyledHeader, StyledProduct1, Styledpagination } from "./productStyles";
import { ProContainer, Pro, StyledDes } from "../Home/homeStyles";
export default function product() {
  return (
    <React.Fragment>
      <StyledHeader>
        <h2>#StayHome</h2>
        <p>Save more with coupons & up to 70% off</p>\
      </StyledHeader>

      <StyledProduct1 id="product1" className="section-p1">
        <ProContainer className="pro-container">
          <Pro className="pro">
            <img src={require("../../assets/img/products/f1.jpg")} alt="" />
            <StyledDes className="des">
              <span>adidas</span>
              <h5>Cartoun astronot tshirt</h5>
              <div className="star">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <h4>$78</h4>
            </StyledDes>
            <a href="#">
              <i className="fa fa-shopping-cart cart"></i>
            </a>
          </Pro>
          <Pro className="pro">
            <img src={require("../../assets/img/products/f2.jpg")} alt="" />
            <StyledDes className="des">
              <span>adidas</span>
              <h5>Cartoun astronot tshirt</h5>
              <div className="star">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <h4>$78</h4>
            </StyledDes>
            <a href="#">
              <i className="fa fa-shopping-cart cart"></i>
            </a>
          </Pro>
          <Pro className="pro">
            <img src={require("../../assets/img/products/f3.jpg")} alt="" />
            <StyledDes className="des">
              <span>adidas</span>
              <h5>Cartoun astronot tshirt</h5>
              <div className="star">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <h4>$78</h4>
            </StyledDes>
            <a href="#">
              <i className="fa fa-shopping-cart cart"></i>
            </a>
          </Pro>
          <Pro className="pro">
            <img src={require("../../assets/img/products/f4.jpg")} alt="" />
            <StyledDes className="des">
              <span>adidas</span>
              <h5>Cartoun astronot tshirt</h5>
              <div className="star">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <h4>$78</h4>
            </StyledDes>
            <a href="#">
              <i className="fa fa-shopping-cart cart"></i>
            </a>
          </Pro>
          <Pro className="pro">
            <img src={require("../../assets/img/products/f5.jpg")} alt="" />
            <StyledDes className="des">
              <span>adidas</span>
              <h5>Cartoun astronot tshirt</h5>
              <div className="star">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <h4>$78</h4>
            </StyledDes>
            <a href="#">
              <i className="fa fa-shopping-cart cart"></i>
            </a>
          </Pro>
          <Pro className="pro">
            <img src={require("../../assets/img/products/f6.jpg")} alt="" />
            <StyledDes className="des">
              <span>adidas</span>
              <h5>Cartoun astronot tshirt</h5>
              <div className="star">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <h4>$78</h4>
            </StyledDes>
            <a href="#">
              <i className="fa fa-shopping-cart cart"></i>
            </a>
          </Pro>
          <Pro className="pro">
            <img src={require("../../assets/img/products/f7.jpg")} alt="" />
            <StyledDes className="des">
              <span>adidas</span>
              <h5>Cartoun astronot tshirt</h5>
              <div className="star">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <h4>$78</h4>
            </StyledDes>
            <a href="#">
              <i className="fa fa-shopping-cart cart"></i>
            </a>
          </Pro>
          <Pro className="pro">
            <img src={require("../../assets/img/products/f8.jpg")} alt="" />
            <StyledDes className="des">
              <span>adidas</span>
              <h5>Cartoun astronot tshirt</h5>
              <div className="star">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <h4>$78</h4>
            </StyledDes>
            <a href="#">
              <i className="fa fa-shopping-cart cart"></i>
            </a>
          </Pro>

          <Pro className="pro">
            <img src={require("../../assets/img/products/n1.jpg")} alt="" />
            <StyledDes className="des">
              <span>adidas</span>
              <h5>Cartoun astronot tshirt</h5>
              <div className="star">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <h4>$78</h4>
            </StyledDes>
            <a href="#">
              <i className="fa fa-shopping-cart cart"></i>
            </a>
          </Pro>
          <Pro className="pro">
            <img src={require("../../assets/img/products/n2.jpg")} alt="" />
            <StyledDes className="des">
              <span>adidas</span>
              <h5>Cartoun astronot tshirt</h5>
              <div className="star">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <h4>$78</h4>
            </StyledDes>
            <a href="#">
              <i className="fa fa-shopping-cart cart"></i>
            </a>
          </Pro>
          <Pro className="pro">
            <img src={require("../../assets/img/products/n3.jpg")} alt="" />
            <StyledDes className="des">
              <span>adidas</span>
              <h5>Cartoun astronot tshirt</h5>
              <div className="star">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <h4>$78</h4>
            </StyledDes>
            <a href="#">
              <i className="fa fa-shopping-cart cart"></i>
            </a>
          </Pro>
          <Pro className="pro">
            <img src={require("../../assets/img/products/n4.jpg")} alt="" />
            <StyledDes className="des">
              <span>adidas</span>
              <h5>Cartoun astronot tshirt</h5>
              <div className="star">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <h4>$78</h4>
            </StyledDes>
            <a href="#">
              <i className="fa fa-shopping-cart cart"></i>
            </a>
          </Pro>
          <Pro className="pro">
            <img src={require("../../assets/img/products/n5.jpg")} alt="" />
            <StyledDes className="des">
              <span>adidas</span>
              <h5>Cartoun astronot tshirt</h5>
              <div className="star">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <h4>$78</h4>
            </StyledDes>
            <a href="#">
              <i className="fa fa-shopping-cart cart"></i>
            </a>
          </Pro>
          <Pro className="pro">
            <img src={require("../../assets/img/products/n6.jpg")} alt="" />
            <StyledDes className="des">
              <span>adidas</span>
              <h5>Cartoun astronot tshirt</h5>
              <div className="star">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <h4>$78</h4>
            </StyledDes>
            <a href="#">
              <i className="fa fa-shopping-cart cart"></i>
            </a>
          </Pro>
          <Pro className="pro">
            <img src={require("../../assets/img/products/n7.jpg")} alt="" />
            <StyledDes className="des">
              <span>adidas</span>
              <h5>Cartoun astronot tshirt</h5>
              <div className="star">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <h4>$78</h4>
            </StyledDes>
            <a href="#">
              <i className="fa fa-shopping-cart cart"></i>
            </a>
          </Pro>
          <Pro className="pro">
            <img src={require("../../assets/img/products/n8.jpg")} alt="" />
            <StyledDes className="des">
              <span>adidas</span>
              <h5>Cartoun astronot tshirt</h5>
              <div className="star">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <h4>$78</h4>
            </StyledDes>
            <a href="#">
              <i className="fa fa-shopping-cart cart"></i>
            </a>
          </Pro>
        </ProContainer>
      </StyledProduct1>

      <Styledpagination id="pagination" className="section-p1">
        <a href="#">1</a>
        <a href="#">2</a>
        <a href="#">
          <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
        </a>
      </Styledpagination>
    </React.Fragment>
  );
}
