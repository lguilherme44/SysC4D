import React, { useState, useEffect } from 'react';

// font-awesome
import { FaSpinner, FaSave } from 'react-icons/fa';

// reactstrap
import { Container, Row, Col } from 'reactstrap';

// toastify
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// chamada da api
import api from '../../services/api';

// styled-components
import { Form, SubmitButton, List } from './styles';
import ContainerStyle from '../../components/Container';
import Header from '../../components/Header';

export default function EditarUsuario({ match }) {
  const [loading, setLoading] = useState(false);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    async function getUser() {
      const { data, status, ok, problem } = await api.get(
        `/usuario/${match.params.id}`
      );

      if (status === 200 && ok) {
        setNome(data.nome);
        setEmail(data.email);
      } else {
        toast.error(problem);
      }
    }

    getUser();
  }, [match]);

  const handleSubmitApi = async e => {
    e.preventDefault();

    setLoading(true);

    const { status, ok } = await api.put(`/usuario/${match.params.id}`, {
      nome,
      email,
    });

    if (status === 200 && ok) {
      toast.success('Cadastro atualizado com sucesso!');
    } else {
      toast.error('Problema ao acessar servidor');
    }

    setLoading(false);
  };

  return (
    <>
      <Header />
      <List>
        <Form onSubmit={handleSubmitApi}>
          <Container>
            <ContainerStyle>
              <Row>
                <Col xs="12" sm="12" md="12" lg="6">
                  <label className="input-w">Nome:</label>
                  <input
                    className="label"
                    type="text"
                    value={nome}
                    name="nome"
                    onChange={e => setNome(e.target.value)}
                  />
                </Col>

                <Col xs="12" sm="12" md="12" lg="6">
                  <label className="input-w">E-mail:</label>
                  <input
                    className="label"
                    type="text"
                    value={email}
                    name="email"
                    onChange={e => setEmail(e.target.value)}
                  />
                </Col>
              </Row>

              <SubmitButton loading={loading}>
                {loading ? (
                  <FaSpinner color="#FFF" size={14} />
                ) : (
                  <FaSave color="#FFF" size={14} />
                )}
              </SubmitButton>
            </ContainerStyle>
          </Container>
        </Form>
      </List>
    </>
  );
}
