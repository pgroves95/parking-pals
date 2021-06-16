'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
      return Promise.all([
        queryInterface.addColumn('Users', 'access', {
          type: Sequelize.STRING,
          allowNull: false,
        }),
        queryInterface.addColumn('Users', 'first_name', {
          type: Sequelize.STRING,
          allowNull: false,
        }),
        queryInterface.addColumn('Users', 'last_name', {
          type: Sequelize.STRING,
          allowNull: false,
        })
      ]);
  },

  down: async (queryInterface, Sequelize) => {
     return await queryInterface.removeColumn('Users', 'name')
  }
};