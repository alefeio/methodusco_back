import Sequelize, { Model } from 'sequelize';

class Aulas extends Model {
  static init(sequelize) {
    super.init(
      {
        numero: Sequelize.INTEGER,
        dataInicio: Sequelize.DATE,
        dataFim: Sequelize.DATE,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Usuario, { foreignKey: 'usuario_id', as: 'usuario' });
    this.belongsTo(models.Provas, { foreignKey: 'prova_id', as: 'prova' });
  }
}

export default Aulas;
