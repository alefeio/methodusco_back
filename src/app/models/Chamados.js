import Sequelize, { Model } from 'sequelize';

class Chamados extends Model {
  static init(sequelize) {
    super.init(
      {
        assunto: Sequelize.STRING,
        mensagem: Sequelize.TEXT,
        concluido: Sequelize.BOOLEAN,
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

export default Chamados;
