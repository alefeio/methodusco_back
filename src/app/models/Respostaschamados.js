import Sequelize, { Model } from 'sequelize';

class Respostaschamados extends Model {
  static init(sequelize) {
    super.init(
      {
        mensagem: Sequelize.TEXT,
        data: Sequelize.STRING,
        lido: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Usuario, { foreignKey: 'usuario_id', as: 'usuario' });
    this.belongsTo(models.Chamados, {
      foreignKey: 'chamado_id',
      as: 'chamado',
    });
  }
}

export default Respostaschamados;
