import Sequelize, { Model } from 'sequelize';

class Cliente extends Model {
  static init(sequelize) {
    super.init(
      {
        cnpj: Sequelize.STRING,
        cpf: Sequelize.STRING,
        nome: Sequelize.STRING,
        logradouro: Sequelize.STRING,
        bairro: Sequelize.STRING,
        numero: Sequelize.STRING,
        cep: Sequelize.STRING,
        municipio: Sequelize.STRING,
        uf: Sequelize.STRING,
      },
      {
        sequelize,
        tableName: 'clientes',
      }
    );
  }
}

export default Cliente;
