'use strict';

const express = require('express');
const foodsRouter = require('./routes/foods');
const clothesRouter = require('./routes/clothes');
const PORT = process.env.PORT || 3002;
// bring in middleware

const app = express();
app.use(express.json());
app.use(foodsRouter);
app.use(clothesRouter);

function start() {
  app.listen(PORT, () => console.log('Listening on port', PORT));
}

module.exports = { app, start };
