'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const foodsSchema = require('./foods.schema');
const clothesSchema = require('./clothes.schema');

// 'postgres://localhost:5432/api-app'

const DATABASE_URL = process.env.NODE_ENV === 'test' ?  'sqlite:memory' : process.env.DATABASE_URL;

// instantiates our database
const sequelizeDatabase = new Sequelize(DATABASE_URL);

// create foodModel/clothesModel with our schema
const FoodsModel = foodsSchema(sequelizeDatabase, DataTypes);
const ClothesModel = clothesSchema(sequelizeDatabase, DataTypes);

module.exports = { sequelizeDatabase, FoodsModel, ClothesModel };
