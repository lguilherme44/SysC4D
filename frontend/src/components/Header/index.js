import React from 'react';
import { Link } from 'react-router-dom';

import { FiPower } from 'react-icons/fi';
import './styles.css';
import '../../styles/global.css';

export default function Header() {
  async function handleLogout() {
    localStorage.clear();

    window.location.reload();
  }

  return (
    <>
      <div class="header">
        <Link to="/home">Home</Link>
        <Link to="/usuario/add">Gerenciar Usuario</Link>
        <Link to="/fornecedor/add">Gerenciar Fornecedor</Link>

        <div class="header-right">
          <button onClick={handleLogout} type="button">
            <FiPower size={18} color="#b0d235" />
          </button>
        </div>
      </div>
    </>
  );
}
