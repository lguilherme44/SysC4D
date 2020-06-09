import React, { Component } from 'react';

// font-awesome
import { FaSearch, FaSpinner, FaSave } from 'react-icons/fa';

// reactstrap
import { Container, Row, Col } from 'reactstrap';

// toastify
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

// chamada da api
import api from '../../services/api';

// import Container from '../../components/Container';

import { Form, SubmitButton, List } from './styles';
import ContainerStyle from '../../components/Container';
import TableFornecedor from '../../components/TableFornecedor';
import ContainerCustom from '../../components/ContainerCustom';
import Header from '../../components/Header';

export default class Main extends Component {
  state = {
    loadingSubmit: false,
    loadingApi: false,
    data: {},
    fornecedores: [],
    cnpj: '',
  };

  handleValuesChange = e => {
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmitApi = async e => {
    e.preventDefault();
    try {
      const dados = this.state.data;

      this.setState({ loadingApi: true });

      await api.post(`/fornecedor`, {
        cnpj: dados.cnpj,
        nome: dados.nome,
        situacao: dados.situacao,
        logradouro: dados.logradouro,
        bairro: dados.bairro,
        numero: dados.numero,
        cep: dados.cep,
        municipio: dados.municipio,
      });

      // se sucesso
      toast.success('Cadastro realizado com sucesso!');

      // limpa os dados dos input's
      this.setState({ data: {} });

      // redireciona se sucesso para a home
    } catch (erro) {
      // se erro
      if (erro.response) {
        // response status, data
        let { error } = erro.response.data;
        toast.error(error);
      }
    }
    this.setState({ loadingApi: false });
  };

  async getAllForn() {
    try {
      let { data } = await api.get('/fornecedor/all');
      this.setState({ fornecedores: data });
    } catch (error) {
      // toast.error(
      //   error.response.data ? error.response.data.error : error.message
      // );
    }
  }

  async componentDidMount() {
    this.getAllForn();
  }

  handleInputChange = e => {
    this.setState({ cnpj: e.target.value });
  };

  handleValuesChange = e => {
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = async e => {
    e.preventDefault();

    this.setState({ loadingSubmit: true });

    const { cnpj } = this.state;

    const response = await api.get(
      `https://cors-anywhere.herokuapp.com/http://www.receitaws.com.br/v1/cnpj/${cnpj}`
    );

    this.setState({
      data: response.data,
    });

    if (response.status !== '200') {
      toast.error(response.data.message);
      this.setState({ loadingSubmit: false });
    }

    this.setState({ loadingSubmit: false });
  };

  handleSubmitApi = async e => {
    e.preventDefault();
    try {
      const dados = this.state.data;

      this.setState({ loadingApi: true });

      await api.post(`/fornecedor`, {
        cnpj: dados.cnpj,
        nome: dados.nome,
        situacao: dados.situacao,
        logradouro: dados.logradouro,
        bairro: dados.bairro,
        numero: dados.numero,
        cep: dados.cep,
        municipio: dados.municipio,
      });

      // se sucesso
      toast.success('Cadastro realizado com sucesso!');

      this.getAllForn();

      // limpa os dados dos input's
      this.setState({ cnpj: '' });
      this.setState({ data: {} });

      // redireciona se sucesso para a home
    } catch (erro) {
      // se erro
      if (erro.response) {
        // response status, data
        let { error } = erro.response.data;
        toast.error(error);
      }
    }
    this.setState({ loadingApi: false });
  };

  render() {
    const { loadingSubmit, loadingApi, data, fornecedores, cnpj } = this.state;

    return (
      <>
        <Header />
        <List>
          <Container>
            <Row>
              <Col>
                <h4 className="text-muted">
                  Adicionar Fornecedor Automaticamente
                </h4>
              </Col>
            </Row>
          </Container>

          <Form onSubmit={this.handleSubmit}>
            <Container>
              <ContainerStyle>
                <Row>
                  <Col xs="12" sm="12" md="12" lg="12">
                    <input
                      pattern="[0-9]+"
                      placeholder="Digite apenas numeros do CNPJ"
                      value={cnpj}
                      minlength="14"
                      onChange={this.handleInputChange}
                      required
                    />
                  </Col>
                </Row>

                <SubmitButton loadingSubmit={loadingSubmit}>
                  {loadingSubmit ? (
                    <FaSpinner color="#FFF" size={14} />
                  ) : (
                    <FaSearch color="#FFF" size={14} />
                  )}
                </SubmitButton>
              </ContainerStyle>
            </Container>
          </Form>
        </List>

        <List>
          <Form onSubmit={this.handleSubmitApi}>
            <Container>
              <Row>
                <Col>
                  <h4 className="text-muted">Adicionar Fornecedor Manual</h4>
                </Col>
              </Row>

              <ContainerStyle>
                <Row>
                  <Col xs="12" sm="12" md="12" lg="4">
                    <label className="input-w">CNPJ:</label>
                    <input
                      className="label"
                      type="text"
                      value={data.cnpj || ''}
                      name="cnpj"
                      onChange={this.handleValuesChange}
                    />
                  </Col>

                  <Col xs="12" sm="12" md="12" lg="4">
                    <label className="input-w">Razão:</label>
                    <input
                      className="label"
                      type="text"
                      value={data.nome || ''}
                      name="nome"
                      onChange={this.handleValuesChange}
                    />
                  </Col>

                  <Col xs="12" sm="12" md="12" lg="4">
                    <label>Logradouro:</label>
                    <input
                      type="text"
                      value={data.logradouro || ''}
                      name="logradouro"
                      onChange={this.handleValuesChange}
                    />
                  </Col>

                  <Col xs="12" sm="12" md="12" lg="2">
                    <label>Situação:</label>
                    <input
                      type="text"
                      value={data.situacao || ''}
                      name="situacao"
                      onChange={this.handleValuesChange}
                    />
                  </Col>

                  <Col xs="12" sm="12" md="12" lg="3">
                    <label>Bairro:</label>
                    <input
                      type="text"
                      value={data.bairro || ''}
                      name="bairro"
                      onChange={this.handleValuesChange}
                    />
                  </Col>

                  <Col xs="12" sm="12" md="12" lg="2">
                    <label>Numero:</label>
                    <input
                      type="text"
                      value={data.numero || ''}
                      name="numero"
                      onChange={this.handleValuesChange}
                    />
                  </Col>

                  <Col xs="12" sm="12" md="12" lg="2">
                    <label>Cep:</label>
                    <input
                      type="text"
                      value={data.cep || ''}
                      name="cep"
                      onChange={this.handleValuesChange}
                    />
                  </Col>

                  <Col xs="12" sm="12" md="12" lg="3">
                    <label>Municipio:</label>
                    <input
                      type="text"
                      value={data.municipio || ''}
                      name="municipio"
                      onChange={this.handleValuesChange}
                    />
                  </Col>
                </Row>

                <SubmitButton loadingApi={loadingApi}>
                  {loadingApi ? (
                    <FaSpinner color="#FFF" size={14} />
                  ) : (
                    <FaSave color="#FFF" size={14} />
                  )}
                </SubmitButton>
              </ContainerStyle>
            </Container>
          </Form>
        </List>

        <Container>
          <Row>
            <Col>
              <h4 className="text-muted">Lista de Fornecedores</h4>
            </Col>
          </Row>
          <ContainerCustom>
            <Row>
              <Col>
                <TableFornecedor
                  data={fornecedores}
                  reload={() => this.getAllForn()}
                />
              </Col>
            </Row>
          </ContainerCustom>
        </Container>

        {/* {data.nome && (
          <List>
            <Form onSubmit={this.handleSubmitApi}>
              <Container>
                <ContainerStyle>
                  <label className="input-w">CNPJ:</label>
                  <input
                    className="label"
                    type="text"
                    value={data.cnpj}
                    name="cnpj"
                    onChange={this.handleValuesChange}
                  />

                  <label className="input-w">Razão:</label>
                  <input
                    className="label"
                    type="text"
                    value={data.nome}
                    name="nome"
                    onChange={this.handleValuesChange}
                  />

                  <label>Situação:</label>
                  <input
                    type="text"
                    value={data.situacao}
                    name="situacao"
                    onChange={this.handleValuesChange}
                  />

                  <label>Logradouro:</label>
                  <input
                    type="text"
                    value={data.logradouro}
                    name="logradouro"
                    onChange={this.handleValuesChange}
                  />

                  <label>Bairro:</label>
                  <input
                    type="text"
                    value={data.bairro}
                    name="bairro"
                    onChange={this.handleValuesChange}
                  />

                  <label>Numero:</label>
                  <input
                    type="text"
                    value={data.numero}
                    name="numero"
                    onChange={this.handleValuesChange}
                  />

                  <label>Cep:</label>
                  <input
                    type="text"
                    value={data.cep}
                    name="cep"
                    onChange={this.handleValuesChange}
                  />

                  <label>Municipio:</label>
                  <input
                    type="text"
                    value={data.municipio}
                    name="municipio"
                    onChange={this.handleValuesChange}
                  />
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
        )} */}
      </>
    );
  }
}
