'use strict';
const { v4: uuid } = require('uuid')
const sequelizePaginate = require('sequelize-paginate')
  
module.exports = (sequelize, DataTypes) => {
  const Hospital = sequelize.define(
    'hospital',
    {
      name: DataTypes.STRING,
      address: DataTypes.STRING,
      region: DataTypes.STRING,
      phone: DataTypes.STRING,
      province: DataTypes.STRING,
      lat: DataTypes.STRING,
      long: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
    },{
      underscored: true
    },
  )

  Hospital.beforeCreate(hospital => hospital.id = uuid());
  sequelizePaginate.paginate(Hospital)
  return Hospital;
};