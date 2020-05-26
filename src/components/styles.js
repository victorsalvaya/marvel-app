import styled from 'styled-components';
// import Bg from '../img/bg.jpg';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  background: red;
  padding: 10px 0px;

  img {
    width: 170px;
    max-width: 170px;
  }
`;

export const DataContainer = styled.main`
  display: flex;
  justify-content: center;
`;

export const Footer = styled.footer`
  margin-top: auto;
  display: flex;
  justify-content: center;
  padding: 20px;
  background-color: #efefef;
  font-size: 12px;
  letter-spacing: 2px;
`;
