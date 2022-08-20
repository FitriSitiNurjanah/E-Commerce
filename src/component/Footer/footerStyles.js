import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 40px 80px;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 10px;

  img {
    margin-bottom: 30px;
  }

  @media (max-width: 799px) {
    margin-bottom: 50px;
  }
`;

export const H4 = styled.h4`
  font-size: 14px;
  margin-bottom: 10px;
  margin-left: 10px;
`;

export const P = styled.p`
  font-size: 13px;
  margin: 0 0 8px 0;
`;

export const A = styled.a`
  font-size: 13px;
  text-decoration: none;
  color: #222;
  margin: 10px;
`;

export const Follow = styled.div`
  color: #465b52;
  padding-right: 4px;
  cursor: pointer;
  margin-top: 10px;

  i {
    margin: 5px;
  }
  i:hover a:hover {
    color: #088178;
  }

  @media (max-width: 799px) {
    margin-top: 50px;
  }
`;

export const Row = styled.div`
  s img {
    border: 1px solid #088178;
    border-radius: 6px;
  }
`;

export const Copyright = styled.div`
  margin-top: 70px;
  width: 100%;
  text-align: center;
`;
