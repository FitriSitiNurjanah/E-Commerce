import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ProDetails, SingleImage, SingleProDetail, H4, H2, StyledSelect, Input, Button, Span } from "./productDetailStyles";
import { Card, StyledProduct1, ProContainer, Pro, StyledDes } from "../Home/homeStyles";
import { IMG, Cart, I, H2Product, HeroP, H5 } from "../Home/homeStyles";
import { useProductDetail } from "../../hooks/useProducts";
import { images } from "../../assets";
import { IsLoading } from "../Product/productStyles";

export default function ProductDetail() {
  const { id } = useParams();
  const [data, getProductDetail, isLoading] = useProductDetail();
  console.log("Data", data);
  console.log("id", id);
  useEffect(() => {
    if (data.length < 1) {
      getProductDetail(id);
    }
  }, [data]);

  return isLoading ? (
    <IsLoading>
      <h1>Loading...</h1>
    </IsLoading>
  ) : (
    <React.Fragment>
      <ProDetails>
        <SingleImage>
          <IMG src={images[data?.img]} alt="" />
        </SingleImage>

        <SingleProDetail>
          <h6>{data?.category}</h6>
          <H4>{data?.title}</H4>
          <H2>${data?.price}</H2>
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
          <Span>{data?.details}</Span>
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
