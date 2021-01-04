import Sequelize from 'sequelize';
// import mongoose from 'mongoose';

import Usuario from '../app/models/Usuario';
import Niveis from '../app/models/Niveis';
import Provas from '../app/models/Provas';
import Testes from '../app/models/Testes';
import Aulas from '../app/models/Aulas';
import Chamados from '../app/models/Chamados';
import Respostaschamados from '../app/models/Respostaschamados';
import Resposta from '../app/models/Resposta';
import Exercicio from '../app/models/Exercicio';
import Modulo from '../app/models/Modulo';
import Categoria from '../app/models/Categoria';
import Tipo from '../app/models/Tipo';
import Provas2s from '../app/models/Provas2s';

import databaseConfig from '../config/database';

const models = [
  Usuario,
  Niveis,
  Provas,
  Provas2s,
  Testes,
  Aulas,
  Chamados,
  Respostaschamados,
  Resposta,
  Exercicio,
  Modulo,
  Categoria,
  Tipo,
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
