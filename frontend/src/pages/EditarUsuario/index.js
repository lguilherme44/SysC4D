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
    usuario: {},
  };

  async getUser(id) {
    try {
      let { data } = await api.get(`/usuario/${id}`);

      this.setState({ usuario: data });
    } catch (error) {
      // toast.error(
      //   error.response.data ? error.response.data.error : error.message
      // );
    }
  }

  async componentDidMount() {
    const id = this.props.match.params.id;
    this.getUser(id);
  }

  handleInputChange = e => {
    this.setState({ cnpj: e.target.value });
  };

  handleValuesChange = e => {
    this.setState({
      usuario: {
        ...this.state.usuario,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmitApi = async e => {
    e.preventDefault();
    try {
      const dados = this.state.usuario;

      //console.log(dados);

      this.setState({ loading: true });

      await api.put(`/usuario/${dados.id}`, {
        nome: dados.nome,
        email: dados.email,
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
    const { loading, usuario } = this.state;

    return (
      <>
        <Header />
        <List>
          <Form onSubmit={this.handleSubmitApi}>
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
                      value={usuario.nome}
                      name="nome"
                      onChange={this.handleValuesChange}
                    />
                  </Col>

                  <Col xs="12" sm="12" md="12" lg="6">
                    <label className="input-w">E-mail:</label>
                    <input
                      className="label"
                      type="text"
                      value={usuario.email}
                      name="email"
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
