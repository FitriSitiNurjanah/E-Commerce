import styled from "styled-components";
import img from "../../assets/img/hero4.png";
import imgButton from "../../assets/img/button.png";

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

  width: 100%;
  border: none;
  cursor: pointer;
  margin: 10px;

  &:focus {
    outline: none;
  }
`;

export const Page = styled.div`
  padding: 50px 0;
`;

export const Card = styled.div`
  margin-left: 150px;
  width: 300px;
  height: 400px;
  position: relative;
  text-align: center;
  padding: 20px 0;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.06);
  overflow: hidden;
  border-radius: 20px;

  input {
    width: 100%;
    height: 30px;
    margin: 10px 0;
    padding: 0 10px;
    border: 1px solid #ccc;
  }

  @media (max-width: 799px) {
    margin-left: 0px;
    width: 300px;
    height: 400px;
    position: relative;
    text-align: center;
    padding: 20px 0;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.06);
    overflow: hidden;
    border-radius: 20px;
  }

  @media (max-width: 414px) {
    margin-left: -150;
    width: 300px;
    height: 400px;
    position: relative;
    text-align: center;
    padding: 5px 0;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.06);
    overflow: hidden;
    border-radius: 20px;
  }
`;

export const Btn = styled.div`
  display: inline-block;
`;

export const Span = styled.div`
  font-weight: bold;
  padding: 0 10px;
  color: #555;
  cursor: pointer;
  width: 100px;
  display: inline-block;
`;

export const FormLogin = styled.form`
  max-width: 300px;
  padding: 0 20px;
  position: absolute;
  top: 130px;
  transition: transform 1s;
  left: -300px;

  a {
    font-size: 12px;
  }
  }
`;

export const RegForm = styled.form`
  max-width: 300px;
  padding: 0 20px;
  position: absolute;
  top: 130px;
  transition: transform 1s;
  left: 0;
  }
`;
