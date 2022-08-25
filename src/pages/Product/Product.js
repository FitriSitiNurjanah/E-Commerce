import React, { useEffect } from "react";
import { useProducts } from "../../hooks/useProducts";
import { images } from "../../assets";
import { Link, useNavigate } from "react-router-dom";
import { Card, StyledProduct1, ProContainer, Pro, StyledDes, IMG, Span, H5, I, H4, Cart } from "../Home/homeStyles";
import { IsLoading, StyledHeader, Styledpagination } from "./productStyles";

export default function Product() {
  const [data, getAllProducts, isLoading] = useProducts();
  const navigate = useNavigate();

  useEffect(() => {
    if (data.length < 1) {
      getAllProducts(1, 12, "", "");
    }
  }, [data.length, getAllProducts, isLoading]);

  return isLoading ? (
    <IsLoading>
      <h1>Loading...</h1>
    </IsLoading>
  ) : (
    <React.Fragment>
      <StyledHeader>
        <h2>#StayHome</h2>
        <p>Save more with coupons & up to 70% off</p>\
      </StyledHeader>

      <Card>
        <StyledProduct1>
          <ProContainer>
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

        <Styledpagination id="pagination" className="section-p1">
          <a href="#">1</a>
          <a href="#">2</a>
          <a href="#">
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </Styledpagination>
      </Card>
    </React.Fragment>
  );
}
