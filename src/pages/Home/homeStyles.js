import styled from "styled-components";
import img from "../../assets/img/hero4.png";
import imgButton from "../../assets/img/button.png";
import imgBanner2 from "../../assets/img/banner/b2.jpg";
import { Link } from "react-router-dom";
export const StyledHero = styled.div`
  background-image: url(${img});
  height: 90vh;
  width: 100%;
  background-size: cover;
  background-position: top 25% right 0;
  padding: 0px 80px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  @media (max-width: 799px) {
    height: 70vh;
    padding: 0 80px;
    background-position: top 30% right 30%;
  }
`;

export const HeroH4 = styled.h4`
  padding-bottom: 10px;
`;

export const HeroH1 = styled.h1`
  color: #088178;
`;

export const HeroH2 = styled.h2`
  font-size: 46px;
  line-height: 54px;
  color: #222;
`;

export const HeroP = styled.p`
  font-size: 16px;
  color: #465b52;
  margin: 15px 0 20px 0;
`;

export const StyledButton = styled.button`
  background-image: url(${imgButton});
  background-color: transparent;
  color: #088178;
  border: 0px;
  padding: 14px 80px 14px 65px;
  background-repeat: no-repeat;
  cursor: pointer;
  font-weight: 700;
  font-size: 20px;
  text-decoration: none;
`;

export const StyledFeature = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 799px) {
    justify-content: center;
  }
`;

export const Card = styled.div`
  padding: 40px 80px;

  @media (max-width: 799px) {
    padding: 40px 40px;
  }
`;

export const StyledBox = styled.div`
  width: 180px;
  text-align: center;
  padding: 25px 15px;
  box-shadow: 20px 20px 34px rgba(0, 0, 0, 0.03);
  border: 1px solid #cce7d0;
  border-radius: 12px;
  margin: 15px 0;

  &:hover {
    box-shadow: 10px 10px 54px rgba(70, 62, 221, 0.1);
  }
  img {
    width: 100%;
    margin-bottom: 10px;
  }

  h6 {
    display: inline-block;
    padding: 9px 8px 6px 8px;
    line-height: 1px;
    border-radius: 4px;
    color: #088178;
    background-color: #fddde4;
  }

  &:nth-child(2) h6 {
    background-color: #cdebbc;
  }

  &:nth-child(3) h6 {
    background-color: #d1e8f2;
  }

  &:nth-child(4) h6 {
    background-color: #cdd4f8;
  }

  &:nth-child(5) h6 {
    background-color: #f6dbf6;
  }

  &:nth-child(6) h6 {
    background-color: #fff2e5;
  }

  @media (max-width: 799px) {
    margin: 15px 15px;
  }
`;

export const StyledProduct1 = styled.div`
  text-align: center;
`;

export const H2Product = styled.h2`
  font-size: 46px;
  line-height: 54px;
  color: #222;
`;
export const ProContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
  flex-wrap: wrap;

  @media (max-width: 799px) {
    justify-content: center;
  }
`;

export const Pro = styled.div`
  width: 23%;
  min-width: 250px;
  padding: 10px 12px;
  border: 1px solid #cce7d0;
  border-radius: 25px;
  cursor: pointer;
  box-shadow: 20px 20px 30px rgba(0, 0, 0, 0.02);
  margin: 15px 0;
  transition: 0.2s ease;
  position: relative;

  &:hover {
    box-shadow: 20px 20px 30px rgba(0, 0, 0, 0.06);
  }

  @media (max-width: 799px) {
    margin: 15px;
  }
`;

export const IMG = styled.img`
  width: 100%;
  border-radius: 20px;
`;
export const StyledDes = styled.div`
  text-align: start;
  padding: 10px 0;
`;

export const I = styled.i`
  font-size: 12px;
  color: rgb(243, 181, 25);
`;
export const H4 = styled.div`
  padding-top: 7px;
  font-size: 15px;
  font-weight: 700;
  color: #088178;
`;

export const Span = styled.span`
  color: #606063;
  font-size: 12px;
`;

export const H5 = styled.h5`
  padding-top: 7px;
  color: #1a1a1a;
  font-size: px;
`;

export const Cart = styled.a`
  width: 40px;
  height: 40px;
  line-height: 40px;
  border-radius: 50px;
  background-color: #e8f6ea;
  font-weight: 500;
  color: #088178;
  border: 1px solid #cce7d0;
  position: absolute;
  bottom: 20px;
  right: 10px;
`;

//Banner
export const StyledBanner = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-image: url(${imgBanner2});
  width: 100%;
  height: 40vh;
  background-size: cover;
  background-position: center;

  
  button:hover {
    background: #088178;
    color: #fff;

    @media (max-width: 799px) {
      height: 10px;
      button:hover {
        background: #088178;
        color: #fff;
      }
    }

      @media (max-width: 414px){
          height: 20vh;
        button {
          margin-bottom: 5px;
        }
        button:hover {
          margin-bottom: 5px;
          background: #088178;
          color: #fff;
        }
      }
    
`;
export const Button = styled.button`
  font-size: 14px;
  font-weight: 600;
  padding: 15px 30px;
  color: #fff;
  background-color: #088178;
  border-radius: 4px;
  cursor: pointer;
  border: none;
  outline: none;
  transition: 0.2s;
`;

export const BannerH4 = styled.h4`
  color: #fff;
  font-size: 16px;

  @media (max-width: 799px) {
    margin-top: 10px;
    color: #fff;
    font-size: 23px;
  }
  @media (max-width: 799px) {
    color: #fff;
    font-size: 30px;
    padding: 10px 0;
  }
`;

export const BannerH2 = styled.h2`
  color: #fff;
  font-size: 30px;
  padding: 10px 0;

  @media (max-width: 799px) {
    color: #fff;
    font-size: 30px;
    padding: 10px 0;
  }

  @media (max-width: 414px) {
    color: #fff;
    font-size: 3px;
    padding: 10px 0;
  }
`;

export const BannerSpan = styled.span`
  color: #ef3636;
  @media (max-width: 799px) {
    color: #ef3636;
  }
  @media (max-width: 414px){span {
    color: #ef3636;
  }
`;

// export const LinkToDetail = styled(Link)`
//   padding-top: 7px;
//   color: #1a1a1a;
//   font-size: px;
// `;
