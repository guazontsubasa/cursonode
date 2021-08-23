'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Users",
      [
        {         
          firstName: "Carla",
          lastName: "D'Angelo",
          email: "carladangelo@gmail.com",
          username:"cdangelo",
          password: bcrypt.hashSync('1234', 8),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {         
          firstName: "Luisina",
          lastName: "Kippes",
          email: "lkippes@gmail.com",
          username:"lkippes",
          password: bcrypt.hashSync('1234', 8),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {         
          firstName: "Mariana",
          lastName: "pocai",
          email: "mpocai@gmail.com",
          username:"mpocai",
          password: bcrypt.hashSync('1234', 8),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {         
          firstName: "Leandro",
          lastName: "Pocai",
          email: "lpocai@gmail.com",
          username:"guachon",
          password: bcrypt.hashSync('1234', 8),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Carlos",
          lastName: "Biaus",
          email: "cbiaus@gmail.com",
          username:"cbiaus",
          password: bcrypt.hashSync('123456', 8),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
