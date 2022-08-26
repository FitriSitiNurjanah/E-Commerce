import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ProDetails, SingleImage, SingleProDetail, H4, H2, Input, Button, Span, StyledSelect } from "./productDetailStyles";
import { Card, StyledProduct1, ProContainer, Pro, StyledDes } from "../Home/homeStyles";
import { IMG, Cart, I, H2Product, HeroP, H5 } from "../Home/homeStyles";
import { Image } from "./productDetailStyles";
import { useProductDetail } from "../../hooks/useProducts";
import { images } from "../../assets";
import { IsLoading } from "../Product/productStyles";
import { auth } from "config/firebase";
import { useDispatch } from "react-redux";
import { useAuthState } from "react-firebase-hooks/auth";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();
  const [data, getProductDetail, isLoading] = useProductDetail();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [detailOrder, setDetailOrder] = useState({
    size: "",
    quantity: 0,
  });

  const handleCart = () => {
    if (!user) {
      alert("User Not Found", "User Not Found, please login", "error");
      navigate("/login");
    } else {
      const { id, img, title, price, details, category, size } = data;
      const { quantity } = detailOrder;
      const dt = { id, img, title, price, details, category, quantity, size };
      if (size === "" || quantity === 0) {
        alert("Please fill all field", "Please fill all field", "error");
      } else {
        dispatch({ type: "ADD_TO_CART", value: dt });
        alert("Added to cart");
        console.log("ini data ", dt);
      }
    }
  };

  // console.log("Data", data);
  // console.log("id", id);
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
          <Image src={images[data?.img]} alt="" />
        </SingleImage>

        <SingleProDetail>
          <h6>{data?.category}</h6>
          <H4>{data?.title}</H4>
          <H2>${data?.price}</H2>
          <StyledSelect onChange={(e) => setDetailOrder({ ...detailOrder, size: e.target.value })}>
            <option>Select Size</option>
            <option>XL</option>
            <option>XXL</option>
            <option>Small</option>
            <option>Large</option>
          </StyledSelect>
          <Input type="number" min="0" defaultValue={0} onChange={(e) => setDetailOrder({ ...detailOrder, quantity: e.target.value })} />
          {user ? (
            <Link to="/cart" onClick={handleCart}>
              <Button>Add to Cart</Button>
            </Link>
          ) : (
            <Link to="/login" onClick={handleCart}>
              <Button>Add to Cart</Button>
            </Link>
          )}

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
              <Link to="/product">
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
              </Link>
            </Pro>
            <Pro className="pro">
              <Link to="/product">
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
              </Link>
            </Pro>
            <Pro className="pro">
              <Link to="/product">
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
              </Link>
            </Pro>
            <Pro className="pro">
              <Link to="/product">
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
              </Link>
            </Pro>
            <Pro className="pro">
              <Link to="/product">
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
              </Link>
            </Pro>
            <Pro className="pro">
              <Link to="/product">
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
              </Link>
            </Pro>
            <Pro className="pro">
              <Link to="/product">
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
              </Link>
            </Pro>
            <Pro className="pro">
              <Link to="/product">
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
              </Link>
            </Pro>
          </ProContainer>
        </StyledProduct1>
      </Card>
    </React.Fragment>
  );
}
