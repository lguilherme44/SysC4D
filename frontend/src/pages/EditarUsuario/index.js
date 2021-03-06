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
  const [usuario, setUsuario] = useState({});

  useEffect(() => {
    async function getUser() {
      let { data, status, ok } = await api.get(`/usuario/${match.params.id}`);

      if (status === 200 && ok) {
        setNome(data.nome);
        setEmail(data.email);
        setUsuario(data);
      }
    }

    getUser();
  }, [match]);

  const handleSubmitApi = async e => {
    e.preventDefault();

    setLoading(true);

    const { status, ok, problem } = await api.put(`/usuario/${usuario.id}`, {
      nome,
      email,
    });

    console.log(problem);

    if (status === 200 && ok) {
      toast.success('Cadastro atualizado com sucesso!');
    } else {
      toast.error('Problema ao carregar dados da API');
    }

    setLoading(false);
  };

  return (
    <>
      <Header />
      <List>
        <Form onSubmit={handleSubmitApi}>
          <Container>
            <Row>
              <Col>
                <h3 className="text-muted">Editar Usuário</h3>
              </Col>
            </Row>

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
