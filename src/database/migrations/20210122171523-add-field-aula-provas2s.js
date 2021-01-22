'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('aula', 'provas2s', {
      type: Sequelize.INTEGER,
      defaultValue: 0,
      allowNull: false,
    });
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('aula', 'provas2s');
  },
};
