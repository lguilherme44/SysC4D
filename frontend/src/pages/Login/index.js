import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";

import { toast } from "react-toastify";

import api from "../../services/api";
import { FiLogIn } from "react-icons/fi";

import "./styles.css";
import "../../styles/global.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  async function handleSubmitApi(e) {
    e.preventDefault();

    const { data, problem } = await api.post("sessions", {
      email,
      password,
    });

    if (problem && !data) {
      toast.error(problem);
      return;
    }

    if (data.error) {
      // console.log(data);
      toast.error(data.error);
      return;
    }

    if (data) {
      localStorage.setItem("userName", data.user.nome);
      localStorage.setItem("userEmail", email);
      localStorage.setItem("userToken", data.token);

      toast.success(`Bem Vindo(a), ${data.user.nome}.`);

      history.push("/home");
    }
  }

  return (
    <>
      <div className="logon-container">
        <section className="form">
          <form onSubmit={handleSubmitApi}>
            <h1>SYSC4D</h1>
            <input
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button className="button" type="submit">
              Entrar
            </button>

            <Link className="back-link" to="/register">
              <FiLogIn size={16} color="#b0d235" />
              Criar conta grátis
            </Link>
          </form>
        </section>
      </div>
    </>
  );
}
