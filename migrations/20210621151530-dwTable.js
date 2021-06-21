'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    // await queryInterface.addColumn("Driveways", "lat_long", {
    //   type: Sequelize.ARRAY(Sequelize.FLOAT),
    //   allowNull: true
    // })

    await queryInterface.addColumn("Reservations", "start_req", {
      type: Sequelize.DATE
    })

    await queryInterface.addColumn("Reservations", "end_req", {
      type: Sequelize.DATE
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
