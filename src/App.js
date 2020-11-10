import React from 'react';
import './App.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Header from './components/Header/index'
import Card from './components/Card/index'

function App() {

  return (
    <>
      <Header></Header>
      <Container fluid>
        <Row>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </Row>
      </Container>
    </>
  );
}

export default App;
