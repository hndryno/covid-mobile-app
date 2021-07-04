'use strict';
const { v4: uuid } = require('uuid')
const sequelizePaginate = require('sequelize-paginate')
  
module.exports = (sequelize, DataTypes) => {
  const MobileUser = sequelize.define(
    'mobile_users',
    {
      name: DataTypes.STRING,
      phone: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
    },{
      underscored: true
    },
  )
  MobileUser.associate = (models) => {
    // associations can be defined here
    MobileUser.hasMany(models.user_assesment)
  };
  MobileUser.beforeCreate(mobileUser => mobileUser.id = uuid());
  sequelizePaginate.paginate(MobileUser)
  // sequelizePaginate.paginate(User)
  return MobileUser;
};