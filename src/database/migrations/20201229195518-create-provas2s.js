'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('provas2s', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nota: {
        type: Sequelize.DOUBLE,
        defaultValue: 0,
      },
      finalizada: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      monitor01: {
        type: Sequelize.DOUBLE,
        defaultValue: 0,
      },
      monitor02: {
        type: Sequelize.DOUBLE,
        defaultValue: 0,
      },
      monitor03: {
        type: Sequelize.DOUBLE,
        defaultValue: 0,
      },
      monitor04: {
        type: Sequelize.DOUBLE,
        defaultValue: 0,
      },
      monitor05: {
        type: Sequelize.DOUBLE,
        defaultValue: 0,
      },
      monitor06: {
        type: Sequelize.DOUBLE,
        defaultValue: 0,
      },
      monitor07: {
        type: Sequelize.DOUBLE,
        defaultValue: 0,
      },
      monitor08: {
        type: Sequelize.DOUBLE,
        defaultValue: 0,
      },
      monitor09: {
        type: Sequelize.DOUBLE,
        defaultValue: 0,
      },
      percepcao01: {
        type: Sequelize.DOUBLE,
        defaultValue: 0,
      },
      percepcao02: {
        type: Sequelize.DOUBLE,
        defaultValue: 0,
      },
      percepcao03: {
        type: Sequelize.DOUBLE,
        defaultValue: 0,
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
    return queryInterface.dropTable('provas2s');
  },
};
