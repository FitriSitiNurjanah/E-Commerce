import React from "react";
import { Link } from "react-router-dom";
import { ProDetails, SingleImage, SingleProDetail, H4, H2, StyledSelect, Input, Button, Span, Featured } from "./productDetailStyles";
import { Card, StyledProduct1, ProContainer, Pro, StyledDes, StyledBanner } from "../Home/homeStyles";
import { IMG, Cart, I, H2Product, HeroP, H5 } from "../Home/homeStyles";
export default function ProductDetail() {
  return (
    <React.Fragment>
      <ProDetails>
        <SingleImage>
          <IMG src={require("../../assets/img/products/f1.jpg")} width="100%" id="MainImg" alt="" />
        </SingleImage>

        <SingleProDetail>
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

      <Card>
        <StyledProduct1>
          <H2Product> Featured Product</H2Product>
          <HeroP>Summer Collection New Morden Design </HeroP>
          <ProContainer className="pro-container">
            <Pro className="pro">
              <IMG src={require("../../assets/img/products/f1.jpg")} alt="" />
              <StyledDes>
                <Span>adidas</Span>
                <H5>Cartoun astronot tshirt</H5>
                <div className="star">
                  <I className="fa fa-star"></I>
                  <I className="fa fa-star"></I>
                  <I className="fa fa-star"></I>
                  <I className="fa fa-star"></I>
                </div>
                <H4>$78</H4>
              </StyledDes>
              <Cart href="/#">
                <i className="fa fa-shopping-cart cart"></i>
              </Cart>
            </Pro>
            <Pro className="pro">
              <IMG src={require("../../assets/img/products/f2.jpg")} alt="" />
              <StyledDes>
                <Span>adidas</Span>
                <H5>Cartoun astronot tshirt</H5>
                <div className="star">
                  <I className="fa fa-star"></I>
                  <I className="fa fa-star"></I>
                  <I className="fa fa-star"></I>
                  <I className="fa fa-star"></I>
                </div>
                <H4>$78</H4>
              </StyledDes>
              <Cart href="/#">
                <i className="fa fa-shopping-cart cart"></i>
              </Cart>
            </Pro>
            <Pro className="pro">
              <IMG src={require("../../assets/img/products/f3.jpg")} alt="" />
              <StyledDes>
                <Span>adidas</Span>
                <H5>Cartoun astronot tshirt</H5>
                <div className="star">
                  <I className="fa fa-star"></I>
                  <I className="fa fa-star"></I>
                  <I className="fa fa-star"></I>
                  <I className="fa fa-star"></I>
                </div>
                <H4>$78</H4>
              </StyledDes>
              <Cart href="/#">
                <i className="fa fa-shopping-cart cart"></i>
              </Cart>
            </Pro>
            <Pro className="pro">
              <IMG src={require("../../assets/img/products/f4.jpg")} alt="" />
              <StyledDes>
                <Span>adidas</Span>
                <H5>Cartoun astronot tshirt</H5>
                <div className="star">
                  <I className="fa fa-star"></I>
                  <I className="fa fa-star"></I>
                  <I className="fa fa-star"></I>
                  <I className="fa fa-star"></I>
                </div>
                <H4>$78</H4>
              </StyledDes>
              <Cart href="/#">
                <i className="fa fa-shopping-cart cart"></i>
              </Cart>
            </Pro>
            <Pro className="pro">
              <IMG src={require("../../assets/img/products/f5.jpg")} alt="" />
              <StyledDes>
                <Span>adidas</Span>
                <H5>Cartoun astronot tshirt</H5>
                <div className="star">
                  <I className="fa fa-star"></I>
                  <I className="fa fa-star"></I>
                  <I className="fa fa-star"></I>
                  <I className="fa fa-star"></I>
                </div>
                <H4>$78</H4>
              </StyledDes>
              <Cart href="/#">
                <i className="fa fa-shopping-cart cart"></i>
              </Cart>
            </Pro>
            <Pro className="pro">
              <IMG src={require("../../assets/img/products/f6.jpg")} alt="" />
              <StyledDes>
                <Span>adidas</Span>
                <H5>Cartoun astronot tshirt</H5>
                <div className="star">
                  <I className="fa fa-star"></I>
                  <I className="fa fa-star"></I>
                  <I className="fa fa-star"></I>
                  <I className="fa fa-star"></I>
                </div>
                <H4>$78</H4>
              </StyledDes>
              <Cart href="/#">
                <i className="fa fa-shopping-cart cart"></i>
              </Cart>
            </Pro>
            <Pro className="pro">
              <IMG src={require("../../assets/img/products/f7.jpg")} alt="" />
              <StyledDes>
                <Span>adidas</Span>
                <H5>Cartoun astronot tshirt</H5>
                <div className="star">
                  <I className="fa fa-star"></I>
                  <I className="fa fa-star"></I>
                  <I className="fa fa-star"></I>
                  <I className="fa fa-star"></I>
                </div>
                <H4>$78</H4>
              </StyledDes>
              <Cart href="/#">
                <i className="fa fa-shopping-cart cart"></i>
              </Cart>
            </Pro>
            <Pro className="pro">
              <IMG src={require("../../assets/img/products/f8.jpg")} alt="" />
              <StyledDes>
                <Span>adidas</Span>
                <H5>Cartoun astronot tshirt</H5>
                <div className="star">
                  <I className="fa fa-star"></I>
                  <I className="fa fa-star"></I>
                  <I className="fa fa-star"></I>
                  <I className="fa fa-star"></I>
                </div>
                <H4>$78</H4>
              </StyledDes>
              <Cart href="/#">
                <i className="fa fa-shopping-cart cart"></i>
              </Cart>
            </Pro>
          </ProContainer>
        </StyledProduct1>
      </Card>
    </React.Fragment>
  );
}
