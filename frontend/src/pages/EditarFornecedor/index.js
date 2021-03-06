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

// components
// import Container from '../../components/Container';

// styled-components
import { Form, SubmitButton, List } from './styles';
import ContainerStyle from '../../components/Container';
import Header from '../../components/Header';

export default function EditarFornecedor({ match }) {
  const [cnpj, setCnpj] = useState('');
  const [nome, setNome] = useState('');
  const [situacao, setSituacao] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [bairro, setBairro] = useState('');
  const [numero, setNumero] = useState('');
  const [cep, setCep] = useState('');
  const [municipio, setMunicipio] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getForn() {
      const { data, status, ok, problem } = await api.get(
        `/fornecedor/${match.params.id}`
      );

      if (status === 200 && ok) {
        setCnpj(data.cnpj);
        setNome(data.nome);
        setSituacao(data.situacao);
        setLogradouro(data.logradouro);
        setBairro(data.bairro);
        setNumero(data.numero);
        setCep(data.cep);
        setMunicipio(data.municipio);
      } else {
        toast.error(problem);
      }
    }

    getForn();
  }, [match]);

  const handleSubmitApi = async e => {
    e.preventDefault();

    setLoading(true);

    const { status, ok, problem } = await api.put(
      `/fornecedor/${match.params.id}`,
      {
        cnpj,
        nome,
        situacao,
        logradouro,
        bairro,
        numero,
        cep,
        municipio,
      }
    );

    if (status === 200 && ok) {
      toast.success('Cadastro atualizado com sucesso!');
    } else {
      toast.error(problem);
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
                <h3 className="text-muted">Editar Fornecedor</h3>
              </Col>
            </Row>
            <ContainerStyle>
              <Row>
                <Col xs="12" sm="12" md="12" lg="6">
                  <label className="input-w">CNPJ:</label>
                  <input
                    className="label"
                    type="text"
                    value={cnpj}
                    name="cnpj"
                    onChange={e => setCnpj(e.target.value)}
                  />
                </Col>

                <Col xs="12" sm="12" md="12" lg="6">
                  <label className="input-w">Razão:</label>
                  <input
                    className="label"
                    type="text"
                    value={nome}
                    name="nome"
                    onChange={e => setNome(e.target.value)}
                  />
                </Col>

                <Col xs="12" sm="12" md="12" lg="6">
                  <label>Situação:</label>
                  <input
                    type="text"
                    value={situacao}
                    name="situacao"
                    onChange={e => setSituacao(e.target.value)}
                  />
                </Col>

                <Col xs="12" sm="12" md="12" lg="6">
                  <label>Logradouro:</label>
                  <input
                    type="text"
                    value={logradouro}
                    name="logradouro"
                    onChange={e => setLogradouro(e.target.value)}
                  />
                </Col>

                <Col xs="12" sm="12" md="12" lg="6">
                  <label>Bairro:</label>
                  <input
                    type="text"
                    value={bairro}
                    name="bairro"
                    onChange={e => setBairro(e.target.value)}
                  />
                </Col>

                <Col xs="12" sm="12" md="12" lg="6">
                  <label>Numero:</label>
                  <input
                    type="text"
                    value={numero}
                    name="numero"
                    onChange={e => setNumero(e.target.value)}
                  />
                </Col>

                <Col xs="12" sm="12" md="12" lg="6">
                  <label>Cep:</label>
                  <input
                    type="text"
                    value={cep}
                    name="cep"
                    onChange={e => setCep(e.target.value)}
                  />
                </Col>

                <Col xs="12" sm="12" md="12" lg="6">
                  <label>Municipio:</label>
                  <input
                    type="text"
                    value={municipio}
                    name="municipio"
                    onChange={e => setMunicipio(e.target.value)}
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
