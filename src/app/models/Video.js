import Sequelize, { Model } from 'sequelize';

class Video extends Model {
  static init(sequelize) {
    super.init(
      {
        video: Sequelize.STRING,
        urlvideo: Sequelize.STRING,
        modulo: Sequelize.STRING,
        urlmodulo: Sequelize.STRING,
        aula: Sequelize.STRING,
        titulo: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Video;
