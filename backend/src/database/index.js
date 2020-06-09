import Sequelize from 'sequelize';

// import User from '../app/models/User';
import Fornecedor from '../app/models/Fornecedor';
import Usuario from '../app/models/Usuario';
import Cliente from '../app/models/Cliente';

import databaseConfig from '../config/database';

const models = [Fornecedor, Usuario, Cliente];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
  }
}

export default new Database();
