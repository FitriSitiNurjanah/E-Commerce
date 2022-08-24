import React from "react";
import {
  Card,
  StyledHero,
  StyledButton,
  StyledFeature,
  StyledBox,
  StyledProduct1,
  ProContainer,
  Pro,
  StyledDes,
  StyledBanner,
  HeroH4,
  HeroH1,
  HeroH2,
  HeroP,
  H2Product,
  IMG,
  Span,
  H5,
  I,
  H4,
  Cart,
  BannerH4,
  BannerH2,
  BannerSpan,
  Button,
} from "./homeStyles";
export default function Home() {
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

        <StyledBanner>
          <section id="banner" className="section-m1">
            <BannerH4>Repear Service</BannerH4>
            <BannerH2>
              UP to <BannerSpan>70% off </BannerSpan> - All t-Shirts & Accessories
            </BannerH2>
            <Button className="normal">Explore More</Button>
          </section>
        </StyledBanner>

        <Card id="product1" className="section-p1">
          <StyledProduct1>
            <h2> New Arrival</h2>
            <p>Summer Collection New Morden Design </p>
            <ProContainer className="pro-container">
              <Pro className="pro">
                <IMG src={require("../../assets/img/products/n1.jpg")} alt="" />
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
                <IMG src={require("../../assets/img/products/n2.jpg")} alt="" />
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
                <IMG src={require("../../assets/img/products/n3.jpg")} alt="" />
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
                <IMG src={require("../../assets/img/products/n4.jpg")} alt="" />
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
                <IMG src={require("../../assets/img/products/n5.jpg")} alt="" />
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
                <a href="/#">
                  <i className="fa fa-shopping-cart cart"></i>
                </a>
              </Pro>
              <Pro className="pro">
                <IMG src={require("../../assets/img/products/n6.jpg")} alt="" />
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
                <IMG src={require("../../assets/img/products/n7.jpg")} alt="" />
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
                <IMG src={require("../../assets/img/products/n8.jpg")} alt="" />
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
    </div>
  );
}
