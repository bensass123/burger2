'use strict';

var data = [
  {   
    burger_name: 'Meater',
    createdAt: new Date(),
    updatedAt: new Date(),
    devoured: false
  },
  {   
    burger_name: 'The Undertaker',
    createdAt: new Date(),
    updatedAt: new Date(),
    devoured: false
  },
  {   
    burger_name: 'Veggie',
    createdAt: new Date(),
    updatedAt: new Date(),
    devoured: false
  }
]



module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('burgers', data);
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('burgers', data);
  }
};
