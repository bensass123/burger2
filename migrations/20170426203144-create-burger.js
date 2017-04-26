'use strict';




module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Burgers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      burger_name: {
        type: Sequelize.STRING
      },
      devoured: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue:  Sequelize.NOW
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue:  Sequelize.NOW
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Burgers');
  }
};