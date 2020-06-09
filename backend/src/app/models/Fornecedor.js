import Sequelize, { Model } from 'sequelize';

class Fornecedor extends Model {
  static init(sequelize) {
    super.init(
      {
        cnpj: Sequelize.STRING,
        nome: Sequelize.STRING,
        situacao: Sequelize.STRING,
        logradouro: Sequelize.STRING,
        bairro: Sequelize.STRING,
        numero: Sequelize.STRING,
        cep: Sequelize.STRING,
        municipio: Sequelize.STRING,
      },
      {
        sequelize,
        tableName: 'fornecedores',
      }
    );
  }
}

export default Fornecedor;
