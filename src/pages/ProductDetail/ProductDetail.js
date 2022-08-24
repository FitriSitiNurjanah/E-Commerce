import React from "react";
import { Link } from "react-router-dom";
import { ProDetails, SingleImage, SingleProDetail, H4, H2, StyledSelect, Input, Button, Span, Featured } from "./productDetailStyles";
import { Card, StyledProduct1, ProContainer, Pro, StyledDes, StyledBanner } from "../Home/homeStyles";

export default function ProductDetail() {
  return (
    <React.Fragment>
      <ProDetails id="prodetails" className="section-p1">
        <SingleImage className="single-pro-image">
          <img src={require("../../assets/img/products/f1.jpg")} width="100%" id="MainImg" alt="" />
        </SingleImage>
        <SingleProDetail className="single-pro-details">
          <h6>Home / T-Shirt</h6>
          <H4>Men's Fashion T Shirt</H4>
          <H2>$120</H2>
          <StyledSelect>
            <option>Select Size</option>
            <option>XL</option>
            <option>XXL</option>
            <option>Small</option>
            <option>Large</option>
          </StyledSelect>
          <Input type="number" value="1" />
          <Link to="/cart">
            <Button>Add to Cart</Button>
          </Link>
          <H4>Product Details</H4>
          <Span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eum cumque iusto, odit incidunt obcaecati nobis dicta nisi, similique sequi natus expedita laboriosam aspernatur consectetur. Pariatur dolorum vero sed quasi?
          </Span>
        </SingleProDetail>
      </ProDetails>

      <Card id="product1" className="section-p1">
        <StyledProduct1>
          <h2> Featured Product</h2>
          <p>Summer Collection New Morden Design </p>
          <ProContainer className="pro-container">
            <Pro className="pro">
              <img src={require("../../assets/img/products/f1.jpg")} alt="" />
              <StyledDes>
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
              <a href="/#">
                <i className="fa fa-shopping-cart cart"></i>
              </a>
            </Pro>
            <Pro className="pro">
              <img src={require("../../assets/img/products/f2.jpg")} alt="" />
              <StyledDes>
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
              <a href="/#">
                <i className="fa fa-shopping-cart cart"></i>
              </a>
            </Pro>
            <Pro className="pro">
              <img src={require("../../assets/img/products/f3.jpg")} alt="" />
              <StyledDes>
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
              <a href="/#">
                <i className="fa fa-shopping-cart cart"></i>
              </a>
            </Pro>
            <Pro className="pro">
              <img src={require("../../assets/img/products/f4.jpg")} alt="" />
              <StyledDes>
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
              <a href="/#">
                <i className="fa fa-shopping-cart cart"></i>
              </a>
            </Pro>
            <Pro className="pro">
              <img src={require("../../assets/img/products/f5.jpg")} alt="" />
              <StyledDes>
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
              <a href="/#">
                <i className="fa fa-shopping-cart cart"></i>
              </a>
            </Pro>
            <Pro className="pro">
              <img src={require("../../assets/img/products/f6.jpg")} alt="" />
              <StyledDes>
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
              <a href="/#">
                <i className="fa fa-shopping-cart cart"></i>
              </a>
            </Pro>
            <Pro className="pro">
              <img src={require("../../assets/img/products/f7.jpg")} alt="" />
              <StyledDes>
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
              <a href="/#">
                <i className="fa fa-shopping-cart cart"></i>
              </a>
            </Pro>
            <Pro className="pro">
              <img src={require("../../assets/img/products/f8.jpg")} alt="" />
              <StyledDes>
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
              <a href="/#">
                <i className="fa fa-shopping-cart cart"></i>
              </a>
            </Pro>
          </ProContainer>
        </StyledProduct1>
      </Card>

      <StyledBanner>
        <section id="banner" className="section-m1">
          <h4>Repear Service</h4>
          <h2>
            UP to <span>70% off </span> - All t-Shirts & Accessories
          </h2>
          <button className="normal">Explore More</button>
        </section>
      </StyledBanner>

      <Card id="product1" className="section-p1">
        <StyledProduct1>
          <h2> New Arrival</h2>
          <p>Summer Collection New Morden Design </p>
          <ProContainer className="pro-container">
            <Pro className="pro">
              <img src={require("../../assets/img/products/n1.jpg")} alt="" />
              <StyledDes>
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
              <a href="/#">
                <i className="fa fa-shopping-cart cart"></i>
              </a>
            </Pro>
            <Pro className="pro">
              <img src={require("../../assets/img/products/n2.jpg")} alt="" />
              <StyledDes>
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
              <a href="/#">
                <i className="fa fa-shopping-cart cart"></i>
              </a>
            </Pro>
            <Pro className="pro">
              <img src={require("../../assets/img/products/n3.jpg")} alt="" />
              <StyledDes>
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
              <a href="/#">
                <i className="fa fa-shopping-cart cart"></i>
              </a>
            </Pro>
            <Pro className="pro">
              <img src={require("../../assets/img/products/n4.jpg")} alt="" />
              <StyledDes>
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
              <a href="/#">
                <i className="fa fa-shopping-cart cart"></i>
              </a>
            </Pro>
            <Pro className="pro">
              <img src={require("../../assets/img/products/n5.jpg")} alt="" />
              <StyledDes>
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
              <a href="/#">
                <i className="fa fa-shopping-cart cart"></i>
              </a>
            </Pro>
            <Pro className="pro">
              <img src={require("../../assets/img/products/n6.jpg")} alt="" />
              <StyledDes>
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
              <a href="/#">
                <i className="fa fa-shopping-cart cart"></i>
              </a>
            </Pro>
            <Pro className="pro">
              <img src={require("../../assets/img/products/n7.jpg")} alt="" />
              <StyledDes>
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
              <a href="/#">
                <i className="fa fa-shopping-cart cart"></i>
              </a>
            </Pro>
            <Pro className="pro">
              <img src={require("../../assets/img/products/n8.jpg")} alt="" />
              <StyledDes>
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
              <a href="/#">
                <i className="fa fa-shopping-cart cart"></i>
              </a>
            </Pro>
          </ProContainer>
        </StyledProduct1>
      </Card>
    </React.Fragment>
  );
}
