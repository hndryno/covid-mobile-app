'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user_assesments', {
      id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      mobile_user_id: {
        type: Sequelize.UUID,
        references:{
          model: 'mobile_users',
          key: 'id'
        }
      },
      assesment_point: {
        type: Sequelize.FLOAT
      },
      assesment_result: {
        type: Sequelize.STRING
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('user_assesments');
  }
};