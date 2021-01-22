'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('provas2s', 'aula', {
      type: Sequelize.INTEGER,
      defaultValue: 0,
      allowNull: false,
    });
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('provas2s', 'aula');
  },
};
