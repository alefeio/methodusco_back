import Sequelize, { Model } from 'sequelize';

class Testes extends Model {
  static init(sequelize) {
    super.init(
      {
        numero: Sequelize.INTEGER,
        plm: Sequelize.INTEGER,
        pcr: Sequelize.INTEGER,
        pcm: Sequelize.INTEGER,
        horas: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Usuario, { foreignKey: 'usuario_id', as: 'usuario' });
    this.belongsTo(models.Niveis, { foreignKey: 'nivel_id', as: 'nivel' });
    this.belongsTo(models.Provas, { foreignKey: 'prova_id', as: 'prova' });
  }
}

export default Testes;
