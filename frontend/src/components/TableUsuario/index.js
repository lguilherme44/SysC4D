import React from 'react';
import { Table } from 'reactstrap';
import api from '../../services/api';
import { toast } from 'react-toastify';
import ItemUsuario from '../ItemUsuario';
import { TableStyle } from '../Table/styles';

const TableUsuario = props => {
  // função que deleta o registro
  const handleDelete = async id => {
    try {
      const { data } = await api.delete(`/usuario/${id}`);
      // console.log(data);
      toast.success(data.message);
      props.reload();
    } catch (error) {
      toast.error(
        error.response.data ? error.response.data.message : error.message
      );
    }
  };

  const handleEdit = async id => {
    try {
      await api.get(`/usuario/${id}`);
      // console.log(data);
      // toast.success(data.message);
      // props.reload();
    } catch (error) {
      toast.error(
        error.response.data ? error.response.data.message : error.message
      );
    }
  };

  return (
    <TableStyle>
      <Table responsive borderless>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>E-mail</th>
            <th className="text-center">Opções</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map(user => (
            <ItemUsuario
              key={user.id}
              user={user}
              deletar={handleDelete}
              editar={handleEdit}
            />
          ))}
        </tbody>
      </Table>
    </TableStyle>
  );
};

export default TableUsuario;
