import styled from "styled-components";
import img from "../../assets/img/banner/b1.jpg";
export const StyledHeader = styled.div`
  background-image: url(${img});
  width: 100%;
  height: 40vh;
  background-size: cover;
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  padding: 14px;

  h2,
  p {
    color: #fff;
  }
`;

export const StyledProduct1 = styled.div`
  text-align: center;
  padding: 40px 80px;
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
export const A = styled.a`
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

export const Styledpagination = styled.div`
  text-align: center;

  a {
    text-decoration: none;
    background-color: #088178;
    padding: 15px 20px;
    border-radius: 4px;
    color: #fff;
    font-weight: 600;
    margin: 5px;
  }
  a i {
    font-size: 16px;
    font-weight: 600;
  }
`;

export const Styledcart = styled.div`
  display: flex;
`;
