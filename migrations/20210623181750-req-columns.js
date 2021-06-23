'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn("Reservations", "start_req", {
      type: Sequelize.STRING,
      allowNull: false,
    })
    await queryInterface.changeColumn("Reservations", "end_req", {
      type: Sequelize.STRING,
      allowNull: false,
    })
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
