import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { StyledHeader, StyledProduct1, Styledpagination, A, IMG, Styledcart } from "./productStyles";
import { ProContainer, Pro, StyledDes, Span, H5, start, H4 } from "../Home/homeStyles";
export default function product() {
  return (
    <React.Fragment>
      <StyledHeader>
        <h2>#StayHome</h2>
        <p>Save more with coupons & up to 70% off</p>\
      </StyledHeader>

      <StyledProduct1>
        <ProContainer>
          <Styledcart>
            <Link to="/productDetail">
              <Pro>
                <IMG src={require("../../assets/img/products/f1.jpg")} alt="" />
                <StyledDes>
                  <Span>adidas</Span>
                  <H5>Cartoun astronot tshirt</H5>
                  <div className="star">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <H4>$78</H4>
                </StyledDes>
                <A>
                  <i className="fa fa-shopping-cart cart"></i>
                </A>
              </Pro>
            </Link>

            <Link to="/productDetail">
              <Pro>
                <IMG src={require("../../assets/img/products/f2.jpg")} alt="" />
                <StyledDes>
                  <Span>adidas</Span>
                  <H5>Cartoun astronot tshirt</H5>
                  <div className="star">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <H4>$78</H4>
                </StyledDes>
                <A>
                  <i className="fa fa-shopping-cart cart"></i>
                </A>
              </Pro>
            </Link>

            <Link to="/productDetail">
              <Pro>
                <IMG src={require("../../assets/img/products/f3.jpg")} alt="" />
                <StyledDes>
                  <Span>adidas</Span>
                  <H5>Cartoun astronot tshirt</H5>
                  <div className="star">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <H4>$78</H4>
                </StyledDes>
                <A>
                  <i className="fa fa-shopping-cart cart"></i>
                </A>
              </Pro>
            </Link>

            <Link to="/productDetail">
              <Pro>
                <IMG src={require("../../assets/img/products/f4.jpg")} alt="" />
                <StyledDes>
                  <Span>adidas</Span>
                  <H5>Cartoun astronot tshirt</H5>
                  <div className="star">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <H4>$78</H4>
                </StyledDes>
                <A>
                  <i className="fa fa-shopping-cart cart"></i>
                </A>
              </Pro>
            </Link>
          </Styledcart>
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
