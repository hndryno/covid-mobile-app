'use strict';
const { v4: uuid } = require('uuid')
const sequelizePaginate = require('sequelize-paginate')
  
module.exports = (sequelize, DataTypes) => {
  const UserAssesment = sequelize.define(
    'user_assesment',
    {
      mobile_user_id: DataTypes.STRING,
      assesment_point: DataTypes.NUMBER,
      assesment_result: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
    },{
      underscored: true
    },
  )
  UserAssesment.associate = (models) => {
    // associations can be defined here
    UserAssesment.belongsTo(models.mobile_users, {foreignKey: 'mobile_user_id', as: 'mobile_users'})
  };

  UserAssesment.beforeCreate(userAssesment => userAssesment.id = uuid());
  sequelizePaginate.paginate(UserAssesment)
  return UserAssesment;
};