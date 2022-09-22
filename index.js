'use strict';

// requires from the model/index.js file
const { sequelizeDatabase } = require('./src/models');
const { start } = require('./src/server');

// create all associated tables and make sure connection is good!
sequelizeDatabase.sync()
  .then(() => {
    console.log('Successful Connection! YAY!');
    // Dangerous proof of life below
    // FoodsModel.create({ food: 'pizza', gluten: true, dairy: true, taste: 'bitter' });
    // ClothesModel.create({type:'pants', fabric:'denim', store:'holister', price:99});
  })
  .catch(err => console.error(err));

start();
