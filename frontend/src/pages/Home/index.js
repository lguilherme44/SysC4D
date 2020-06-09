import React from 'react';
import Header from '../../components/Header';
import { List } from '../EditarFornecedor/styles';
import { Container, Jumbotron } from 'reactstrap';

export default function Home() {
  return (
    <>
      <Header />
      <List>
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="display-3 text-center">SYSC4D</h1>
            <p className="lead text-center">
              Sistema Web para Gerenciamento de Cadastros.
            </p>
          </Container>
        </Jumbotron>
      </List>
    </>
  );
}
