module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('clientes', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      cnpj: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      cpf: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      logradouro: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      bairro: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      numero: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cep: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      municipio: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      uf: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('clientes');
  },
};
