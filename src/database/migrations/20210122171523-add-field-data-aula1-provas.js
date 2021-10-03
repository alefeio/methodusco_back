'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('provas', 'inicioa1', {
      type: Sequelize.DATE,
    });
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('provas', 'inicioa1');
  },
};
