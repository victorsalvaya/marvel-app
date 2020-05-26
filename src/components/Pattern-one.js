import React from 'react';
import { MainContainer, Navbar, DataContainer, Footer } from './styles';
import MainLogoNav from '../img/MainLogoRedBranco_NAV.png';

// import { Container } from './styles';

export default function PatternOne({ children }) {
  return (
    <MainContainer>
      <Navbar>
        <img src={MainLogoNav} alt="Esporte Interativo" />
      </Navbar>

      <DataContainer>{children}</DataContainer>

      <Footer>Titulo Do Footer</Footer>
    </MainContainer>
  );
}
