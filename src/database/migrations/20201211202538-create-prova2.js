'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('provas2', {
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
      monitor01: {
        type: Sequelize.DOUBLE,
        allowNull: true,
      },
      monitor02: {
        type: Sequelize.DOUBLE,
        allowNull: true,
      },
      monitor03: {
        type: Sequelize.DOUBLE,
        allowNull: true,
      },
      monitor04: {
        type: Sequelize.DOUBLE,
        allowNull: true,
      },
      monitor05: {
        type: Sequelize.DOUBLE,
        allowNull: true,
      },
      monitor06: {
        type: Sequelize.DOUBLE,
        allowNull: true,
      },
      monitor07: {
        type: Sequelize.DOUBLE,
        allowNull: true,
      },
      monitor08: {
        type: Sequelize.DOUBLE,
        allowNull: true,
      },
      monitor09: {
        type: Sequelize.DOUBLE,
        allowNull: true,
      },
      percepcao01: {
        type: Sequelize.DOUBLE,
        allowNull: true,
      },
      percepcao02: {
        type: Sequelize.DOUBLE,
        allowNull: true,
      },
      percepcao03: {
        type: Sequelize.DOUBLE,
        allowNull: true,
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
    return queryInterface.dropTable('provas2');
  },
};
