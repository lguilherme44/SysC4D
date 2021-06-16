import React, { Component } from "react";

// font-awesome
import { FaSpinner, FaSave } from "react-icons/fa";

// reactstrap
import { Container, Row, Col } from "reactstrap";

// toastify
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

// chamada da api
import api from "../../services/api";

// import Container from '../../components/Container';

import { Form, SubmitButton, List } from "./styles";
import ContainerStyle from "../../components/Container";
import ContainerCustom from "../../components/ContainerCustom";
import TableUsuario from "../../components/TableUsuario";
import Header from "../../components/Header";

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.handleSubmitApi = this.handleSubmitApi.bind(this);
  }
  state = {
    loading: false,
    data: {},
    usuarios: [],
  };

  handleValuesChange = (e) => {
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmitApi = async (e) => {
    e.preventDefault();
    try {
      const dados = this.state.data;

      this.setState({ loading: true });

      await api.post(`/usuario`, {
        nome: dados.nome,
        email: dados.email,
        password: dados.password,
      });

      // se sucesso
      toast.success("Cadastro realizado com sucesso!");

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
    this.setState({ loading: false });
    this.getAllUser();
  };

  async componentDidMount() {
    this.getAllUser();
  }

  async getAllUser() {
    try {
      let { data } = await api.get("/usuario/all");
      this.setState({ usuarios: data });
    } catch (error) {
      // toast.error(
      //   error.response.data ? error.response.data.error : error.message
      // );
    }
  }

  render() {
    const { loading, data, usuarios } = this.state;

    return (
      <>
        <Header />
        <List>
          <Form onSubmit={this.handleSubmitApi}>
            <Container>
              <Row>
                <Col>
                  <h4 className="text-muted">Adicionar Usuário</h4>
                </Col>
              </Row>

              <ContainerStyle>
                <Row>
                  <Col xs="12" sm="12" md="12" lg="5">
                    <label className="input-w">Nome:</label>
                    <input
                      className="label"
                      type="text"
                      value={data.nome || ""}
                      name="nome"
                      onChange={this.handleValuesChange}
                      required
                    />
                  </Col>

                  <Col xs="12" sm="12" md="12" lg="4">
                    <label className="input-w">E-mail:</label>
                    <input
                      className="label"
                      type="text"
                      value={data.email || ""}
                      name="email"
                      onChange={this.handleValuesChange}
                      required
                    />
                  </Col>

                  <Col xs="12" sm="12" md="12" lg="3">
                    <label>Password:</label>
                    <input
                      type="password"
                      value={data.password || ""}
                      name="password"
                      onChange={this.handleValuesChange}
                      required
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

        <Container>
          <Row>
            <Col xs="12" sm="12" md="12" lg="" xl="">
              <h4 className="text-muted"></h4>
            </Col>
          </Row>
          <ContainerCustom>
            <Row>
              <Col>
                <TableUsuario
                  data={usuarios}
                  reload={() => this.getAllUser()}
                />
              </Col>
            </Row>
          </ContainerCustom>
        </Container>
      </>
    );
  }
}
