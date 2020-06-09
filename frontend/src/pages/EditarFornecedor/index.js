import React, { Component } from 'react';

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

export default class Main extends Component {
  constructor() {
    super();

    this.handleValuesChange.bind(this);
  }
  state = {
    cnpj: '',
    loading: false,
    data: {},
    fornecedor: {},
  };

  async getForn(id) {
    try {
      console.log(id);
      let { data } = await api.get(`/fornecedor/${id}`);

      this.setState({ fornecedor: data });
    } catch (error) {
      // toast.error(
      //   error.response.data ? error.response.data.error : error.message
      // );
    }
  }

  async componentDidMount() {
    const id = this.props.match.params.id;
    this.getForn(id);
  }

  handleInputChange = e => {
    this.setState({ cnpj: e.target.value });
  };

  handleValuesChange = e => {
    this.setState({
      fornecedor: {
        ...this.state.fornecedor,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmitApi = async e => {
    e.preventDefault();
    try {
      const dados = this.state.fornecedor;

      //console.log(dados);

      this.setState({ loading: true });

      await api.put(`/fornecedor/${dados.id}`, {
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

      // redireciona se sucesso para a home
    } catch (erro) {
      // se erro
      if (erro.response) {
        // response status, data
        let { error } = erro.response.data;
        toast.error(error);
      }
    }

    this.setState({ loading: false });
  };

  render() {
    const { loading, fornecedor } = this.state;

    return (
      <>
        <Header />
        <List>
          <Form onSubmit={this.handleSubmitApi}>
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
                      value={fornecedor.cnpj}
                      name="cnpj"
                      onChange={this.handleValuesChange}
                    />
                  </Col>

                  <Col xs="12" sm="12" md="12" lg="6">
                    <label className="input-w">Razão:</label>
                    <input
                      className="label"
                      type="text"
                      value={fornecedor.nome}
                      name="nome"
                      onChange={this.handleValuesChange}
                    />
                  </Col>

                  <Col xs="12" sm="12" md="12" lg="6">
                    <label>Situação:</label>
                    <input
                      type="text"
                      value={fornecedor.situacao}
                      name="situacao"
                      onChange={this.handleValuesChange}
                    />
                  </Col>

                  <Col xs="12" sm="12" md="12" lg="6">
                    <label>Logradouro:</label>
                    <input
                      type="text"
                      value={fornecedor.logradouro}
                      name="logradouro"
                      onChange={this.handleValuesChange}
                    />
                  </Col>

                  <Col xs="12" sm="12" md="12" lg="6">
                    <label>Bairro:</label>
                    <input
                      type="text"
                      value={fornecedor.bairro}
                      name="bairro"
                      onChange={this.handleValuesChange}
                    />
                  </Col>

                  <Col xs="12" sm="12" md="12" lg="6">
                    <label>Numero:</label>
                    <input
                      type="text"
                      value={fornecedor.numero}
                      name="numero"
                      onChange={this.handleValuesChange}
                    />
                  </Col>

                  <Col xs="12" sm="12" md="12" lg="6">
                    <label>Cep:</label>
                    <input
                      type="text"
                      value={fornecedor.cep}
                      name="cep"
                      onChange={this.handleValuesChange}
                    />
                  </Col>

                  <Col xs="12" sm="12" md="12" lg="6">
                    <label>Municipio:</label>
                    <input
                      type="text"
                      value={fornecedor.municipio}
                      name="municipio"
                      onChange={this.handleValuesChange}
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
}
