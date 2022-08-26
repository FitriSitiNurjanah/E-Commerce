import React from "react";
import { useProducts } from "hooks/useProducts";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { images } from "assets";
import { Link } from "react-router-dom";

import { Card, StyledHero, StyledButton, StyledFeature, StyledBox, StyledProduct1, ProContainer, Pro, StyledDes, HeroH4, HeroH1, HeroH2, HeroP, H2Product, IMG, Span, H5, I, H4, Cart } from "./homeStyles";
export default function Home() {
  const [data, getAllProducts, isLoading] = useProducts();
  const navigate = useNavigate();

  useEffect(() => {
    if (data.length < 1) {
      getAllProducts(1, 12, "", "");
    }
  }, [data.length, getAllProducts, isLoading]);

  return (
    <div>
      <React.Fragment>
        <StyledHero id="hero">
          <HeroH4>Trade-in-offer</HeroH4>
          <HeroH2>Super value deals</HeroH2>
          <HeroH1>On all product</HeroH1>
          <HeroP>Save more with coupons & up to 70% off</HeroP>
          <StyledButton>Shop Now</StyledButton>
        </StyledHero>

        <Card>
          <StyledFeature>
            <StyledBox>
              <img src={require("../../assets/img/features/f1.png")} alt="" />
              <h6>Free Shipping</h6>
            </StyledBox>
            <StyledBox>
              <img src={require("../../assets/img/features/f2.png")} alt="" />
              <h6>Online Order</h6>
            </StyledBox>
            <StyledBox>
              <img src={require("../../assets/img/features/f3.png")} alt="" />
              <h6>Save Money</h6>
            </StyledBox>
            <StyledBox>
              <img src={require("../../assets/img/features/f4.png")} alt="" />
              <h6>Promotions</h6>
            </StyledBox>
            <StyledBox>
              <img src={require("../../assets/img/features/f5.png")} alt="" />
              <h6>Happy Sell</h6>
            </StyledBox>
            <StyledBox>
              <img src={require("../../assets/img/features/f6.png")} alt="" />
              <h6>Support</h6>
            </StyledBox>
          </StyledFeature>
        </Card>

        <Card>
          <StyledProduct1>
            <H2Product> Featured Product</H2Product>
            <HeroP>Summer Collection New Morden Design </HeroP>
            <ProContainer className="pro-container">
              {data?.map((product, index) => (
                <Pro key={index}>
                  <IMG src={images[product.img]} alt="" onClick={() => navigate(`/product/${product.id}`)} />
                  <Link to={`/product/${product.id}`}>
                    <StyledDes>
                      <Span>{product.category}</Span>
                      <H5>{product.title}</H5>
                      <div className="star">
                        <I className="fa fa-star"></I>
                        <I className="fa fa-star"></I>
                        <I className="fa fa-star"></I>
                        <I className="fa fa-star"></I>
                      </div>
                      <H4>${product.price}</H4>
                    </StyledDes>
                  </Link>
                  <Cart href="/#">
                    <i className="fa fa-shopping-cart cart"></i>
                  </Cart>
                </Pro>
              ))}
            </ProContainer>
          </StyledProduct1>
        </Card>
      </React.Fragment>
    </div>
  );
}
