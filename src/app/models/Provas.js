import Sequelize, { Model } from 'sequelize';

class Provas extends Model {
  static init(sequelize) {
    super.init(
      {
        avaliacao: Sequelize.BOOLEAN,
        aula01: Sequelize.BOOLEAN,
        aula02: Sequelize.BOOLEAN,
        aula03: Sequelize.BOOLEAN,
        aula04: Sequelize.BOOLEAN,
        aula05: Sequelize.BOOLEAN,
        aula06: Sequelize.BOOLEAN,
        aula07: Sequelize.BOOLEAN,
        aula08: Sequelize.BOOLEAN,
        aula09: Sequelize.BOOLEAN,
        aula10: Sequelize.BOOLEAN,
        aula11: Sequelize.BOOLEAN,
        aula12: Sequelize.BOOLEAN,
        aula13: Sequelize.BOOLEAN,
        aula14: Sequelize.BOOLEAN,
        aula15: Sequelize.BOOLEAN,
        aula16: Sequelize.BOOLEAN,
        finalizada: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Usuario, { foreignKey: 'usuario_id', as: 'usuario' });
  }
}

export default Provas;
