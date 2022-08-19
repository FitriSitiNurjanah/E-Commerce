import styled from "styled-components";

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 80px;
  background-color: #e3e6f3;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.06);
  z-index: 999;
  position: sticky;
  top: 0;
  right: 0;
`;

export const StyledNavbar = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 799px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    position: fixed;
    top: 0;
    right: -300px;
    height: 100vh;
    width: 300px;
    background-color: #e3e6fe;
    box-shadow: 0 40px 60px rgba(0, 0, 0, 0.1);
    padding: 80px 0 0 10px;
    transition: 0.3s;
  }
`;

export const Li = styled.li`
  list-style: none;
  padding: 0px 20px;
  position: relative;

  a {
    text-decoration: none;
    font-size: 16px;
    font-weight: 600;
    color: #1a1a1a;
    transition: 0.3s ease;
  }

  a:hover,
  a.active {
    color: #088178;
  }

  a.active::after,
  a:hover::after {
    content: "";
    width: 30%;
    height: 2px;
    background: #088178;
    position: absolute;
    bottom: -4px;
    left: 20px;
  }
`;

export const StyledMobile = styled.div`
  display: none;
  align-items: center;

  @media (max-width: 799px) {
    display: flex;
    align-items: center;

    i {
      color: #1a1a1a;
      font-size: 24px;
      padding-left: 20px;
    }
  }
`;

export const StyledCart = styled.div`
  display: none;
  align-items: center;

  @media (max-width: 799px) {
    display: flex;
    align-items: center;

    i {
      color: #1a1a1a;
      font-size: 24px;
      padding-left: 20px;
    }
  }
`;

export const Styledclose = styled.a`
  display: none;

  @media (max-width: 799px) {
    display: initial;
    position: absolute;
    top: 30px;
    left: 30px;
    color: #222;
    font-size: 24px;
  }
`;

export const Styledlogout = styled.div`
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  color: #1a1a1a;
  transition: 0.3s ease;

  &:hover,
  &.active {
    color: #088178;
  }

  &.active::after,
  &:hover::after {
    content: "";
    width: 30%;
    height: 2px;
    background: #088178;
    position: absolute;
    bottom: -4px;
    left: 20px;
`;
