import React, { useState } from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function ItemUsuario({ user, deletar }) {
  const [inputs] = useState(user);

  return (
    <tr className="text-left">
      <th scope="row">{inputs.id}</th>
      <th>{inputs.nome}</th>
      <td>{inputs.email}</td>
      <td className="text-center">
        <ButtonGroup>
          <Button
            style={{ backgroundColor: '#FF9A5C', border: 'none' }}
            color="danger"
            className="mx-1"
            onClick={() => {
              deletar(user.id);
            }}
          >
            <FaTrash />
          </Button>

          <Link to={`/usuario/editar/${inputs.id}`}>
            <Button style={{ backgroundColor: '#B0D235', border: 'none' }}>
              <FaEdit />
            </Button>
          </Link>
        </ButtonGroup>
      </td>
    </tr>
  );
}
