import React from 'react';
import Header from '../../components/Header';
import { ButtonAdd, Container, MainContent } from './styles';
import { ImUser, ImUserTie } from 'react-icons/im';
import { FiPower } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function Home() {
  async function handleLogout() {
    localStorage.clear();

    window.location.reload();
  }

  return (
    <>
      <Container>
        <MainContent>
          <Link to="/usuario/add">
            <ButtonAdd>
              <ImUser size={35} />
              <strong>Usuários</strong>
            </ButtonAdd>
          </Link>

          <Link to="/fornecedor/add">
            <ButtonAdd>
              <ImUserTie size={35} />
              <strong>Fornecedores</strong>
            </ButtonAdd>
          </Link>

          <ButtonAdd onClick={handleLogout}>
            <FiPower size={40} />
          </ButtonAdd>
        </MainContent>
      </Container>
    </>
  );
}
