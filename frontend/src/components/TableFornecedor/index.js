import React from 'react';
import { Table } from 'reactstrap';
import api from '../../services/api';
import { toast } from 'react-toastify';
import ItemFornecedor from '../ItemFornecedor';
import { TableStyle } from '../Table/styles';

const TableFornecedor = props => {
  // função que deleta o registro
  const handleDelete = async id => {
    try {
      const { data } = await api.delete(`/fornecedor/${id}`);
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
      await api.get(`/fornecedor/${id}`);
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
            <th>CNPJ</th>
            <th>Nome</th>
            <th>Situação</th>
            <th>Logradouro</th>
            <th>Bairro</th>
            <th>Numero</th>
            <th>Cep</th>
            <th>Municipio</th>
            <th className="text-center">Opções</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map(forn => (
            <ItemFornecedor
              key={forn.id}
              forn={forn}
              deletar={handleDelete}
              editar={handleEdit}
            />
          ))}
        </tbody>
      </Table>
    </TableStyle>
  );
};

export default TableFornecedor;
