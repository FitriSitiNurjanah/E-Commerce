import styled from "styled-components";

export const ProDetails = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const SingleImage = styled.div`
  width: 40%;
  margin-right: 50px;
`;

export const Image = styled.img`
  width: 70%;
  margin-left: 60px;
  border-radius: 15px;
`;

export const SingleProDetail = styled.div`
  width: 50%;
  padding-top: 30px;
`;

export const H4 = styled.h4`
  padding: 40px 0 20px 0;
`;

export const H2 = styled.h2`
  font-size: 26px;
`;

export const StyledSelect = styled.select`
  display: block;
  padding: 5px 10px;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  width: 50px;
  height: 47px;
  padding-left: 10px;
  font-size: 16px;
  margin-right: 10px;

  &:focus {
    outline: none;
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

export const Span = styled.span`
  line-height: 25px;
`;

export const Featured = styled.h2`
  color: #000;
  font-size: 30px;
  padding: 10px 0;
`;
