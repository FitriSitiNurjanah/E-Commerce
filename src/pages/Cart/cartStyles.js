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

export const Cart = styled.div`
  padding: 40px 80px;
  align-item: center;
  overflow-x: auto;

  @media (max-width: 414px) {
    overflow-x: auto;
  }
`;

export const CartTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
  white-space: nowrap;

  img {
    width: 70px;
  }

  @media (max-width: 414px) {
    width: 100%;
    border-collapse: collapse;
    table-layout: fixed;
    white-space: nowrap;
  }
  img {
    width: 70px;
  }
  td:nth-child(1) {
    width: 80px;
    text-align: center;
  }
  td:nth-child(2) {
    width: 150px;
    text-align: center;
  }
  td:nth-child(3) {
    width: 250px;
    text-align: center;
  }
  td:nth-child(4) {
    width: 150px;np
    text-align: center;
  }
  td:nth-child(5) {
    width: 150px;
    text-align: center;

    input {
      width: 50px;
      text-align: center;
      line-height: 20px;
      padding: 10px, 5px, 10px, 15px;
    }
  }
`;

export const Thead = styled.table`
  border: 1px solid #e2e9e1;
  line-height: 50px;
  border-left: none;
  border-right: none;

  @media (max-width: 414px) {
    border: 1px solid #e2e9e1;
    line-height: 50px;
    border-left: none;
    border-right: none;
    td {
      font-weight: 100;
      text-transform: uppercase;
      font-size: 13px;
      padding: 18px, 0;
    }
  }
`;

export const Tbody = styled.table`
  padding-top: 15px;
  @media (max-width: 414px) {
    tr td {
      padding-top: 15px;
    }
  }
`;

export const CardAdd = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 414px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    flex-direction: column;
  }
`;

export const Coupon = styled.div`
  width: 50%;
  margin-bottom: 30px;
  padding-left: 100px;
  h3 {
    padding-bottom: 15px;
  }
  @media (max-width: 414px) {
    width: 100%;
    padding-left: 5px;
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

export const Input = styled.input`
  padding: 10px 20px;
  outline: none;
  width: 60%;
  margin-right: 10px;
  border: 1px solid #e2e9e1;
`;

export const StyledSubtotal = styled.div`
  width: 50%;
  margin-bottom: 30px;
  border: 1px solid #e2e9e1;
  padding: 30px;

  table {
    border-collapse: collapse;
    width: 100%;
    margin-bottom: 20px;
  }

  td {
    width: 50px;
    border: 1px solid #e2e9e1;
    padding: 10px;
    font-size: 13px;
  }

  @media (max-width: 414px) {
    width: 100%;
    padding: 20px;
  }
`;
