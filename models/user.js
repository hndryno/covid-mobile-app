'use strict';
const { v4: uuid } = require('uuid')
const sequelizePaginate = require('sequelize-paginate')
  
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'user',
    {
      fullname: DataTypes.STRING,
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      phone: DataTypes.STRING,
      ip: DataTypes.STRING,
      last_login: DataTypes.DATE,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
    },{
      underscored: true
    },
  )
  User.beforeCreate(user => user.id = uuid());
  sequelizePaginate.paginate(User)
  // sequelizePaginate.paginate(User)
  return User;
};