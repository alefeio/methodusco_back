import Sequelize from 'sequelize';
// import mongoose from 'mongoose';

import Usuario from '../app/models/Usuario';
import Niveis from '../app/models/Niveis';
import Provas from '../app/models/Provas';
import Testes from '../app/models/Testes';
import Aulas from '../app/models/Aulas';
import Chamados from '../app/models/Chamados';
import Respostaschamados from '../app/models/Respostaschamados';

import databaseConfig from '../config/database';

const models = [
  Usuario,
  Niveis,
  Provas,
  Testes,
  Aulas,
  Chamados,
  Respostaschamados,
];

class Database {
  constructor() {
    this.init();
    // this.mongo();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }

  // mongo() {
  //   this.mongoConnection = mongoose.connect(process.env.MONGO_URL, {
  //     useNewUrlParser: true,
  //     useFindAndModify: true,
  //   });
  // }
}

export default new Database();
