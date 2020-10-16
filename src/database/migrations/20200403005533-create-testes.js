'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('testes', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      numero: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      plm: {
        type: Sequelize.DOUBLE,
      },
      pcr: {
        type: Sequelize.INTEGER,
      },
      pcm: {
        type: Sequelize.DOUBLE,
      },
      horas: {
        type: Sequelize.DOUBLE,
      },
      finalizado: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      nivel_id: {
        type: Sequelize.INTEGER,
        references: { model: 'niveis', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: false,
      },
      prova_id: {
        type: Sequelize.INTEGER,
        references: { model: 'provas', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: false,
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
    return queryInterface.dropTable('testes');
  },
};
