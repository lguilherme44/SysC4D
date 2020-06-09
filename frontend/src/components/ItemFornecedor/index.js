import React, { useState } from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import { FaEdit, FaTrash } from 'react-icons/fa';

import { Link } from 'react-router-dom';

export default function ItemFornecedor({ forn, deletar }) {
  const [inputs] = useState(forn);

  return (
    <tr className="text-left">
      <th scope="row">{inputs.id}</th>
      <th>{inputs.cnpj}</th>
      <td>{inputs.nome}</td>
      <td>{inputs.situacao}</td>
      <td>{inputs.logradouro}</td>
      <td>{inputs.bairro}</td>
      <td>{inputs.numero}</td>
      <td>{inputs.cep}</td>
      <td>{inputs.municipio}</td>
      <td className="text-center">
        <ButtonGroup>
          <Button
            style={{ backgroundColor: '#FF9A5C', border: 'none' }}
            color="danger"
            className="mx-1"
            onClick={() => {
              deletar(forn.id);
            }}
          >
            <FaTrash />
          </Button>

          <Link to={`/fornecedor/editar/${inputs.id}`}>
            <Button style={{ backgroundColor: '#B0D235', border: 'none' }}>
              <FaEdit />
            </Button>
          </Link>
        </ButtonGroup>
      </td>
    </tr>
  );
}
