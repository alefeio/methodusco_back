'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('provas', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      avaliacao: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      aula01: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      aula02: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      aula03: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      aula04: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      aula05: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      aula06: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      aula07: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      aula08: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      aula09: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      aula10: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      aula11: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      aula12: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      aula13: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      aula14: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      aula15: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      aula16: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      finalizada: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      usuario_id: {
        type: Sequelize.INTEGER,
        references: { model: 'usuarios', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
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

  down: (queryInterface) => {
    return queryInterface.dropTable('provas');
  },
};
