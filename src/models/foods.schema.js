'use strict';

module.exports = (sequelizeDatabase, DataTypes) => {
  return sequelizeDatabase.define('foods', {
    food: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    gluten: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    dairy: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    taste: {
      type: DataTypes.ENUM,
      values: ['sweet', 'sour', 'salty', 'bitter', 'umami'],
      allowNull: true,
    },
  });
};
