'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('videos', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      video: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      urlvideo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      modulo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      urlmodulo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      aula: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      titulo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('videos');
  },
};
