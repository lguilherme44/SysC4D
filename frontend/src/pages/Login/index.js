import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';

import { toast } from 'react-toastify';

import api from '../../services/api';
import { FiLogIn } from 'react-icons/fi';

import './styles.css';
import '../../styles/global.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  async function handleSubmitApi(e) {
    e.preventDefault();

    try {
      const response = await api.post('sessions', { email, password });

      localStorage.setItem('userName', response.data.user.nome);
      localStorage.setItem('userEmail', email);
      localStorage.setItem('userToken', response.data.token);

      toast(`Bem Vindo(a), ${response.data.user.nome}.`);

      history.push('/home');
    } catch (error) {
      toast.error('Usuário e/ou Password invalidos.');
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
              onChange={e => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
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
