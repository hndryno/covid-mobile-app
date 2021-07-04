'use strict';
const bcrypt = require('bcryptjs')
const { v4: uuid } = require('uuid')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [{
         id: uuid(),
         fullname: 'Hendriyono',
         username: 'hndryno',
         email: 'hendriyono97@gmail.com',
         password:  bcrypt.hashSync("rootuser", 8),
         phone: '081211757124',
         ip: null,
         last_login: new Date(),
         createdAt: new Date(),
         updatedAt: new Date()
    }], {});
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