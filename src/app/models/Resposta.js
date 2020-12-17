import Sequelize, { Model } from 'sequelize';

class Resposta extends Model {
  static init(sequelize) {
    super.init(
      {
        resposta: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Provas2, { foreignKey: 'prova_id', as: 'provas2' });
    this.belongsTo(models.Exercicio, {
      foreignKey: 'exercicio_id',
      as: 'exercicio',
    });
  }
}

export default Resposta;
