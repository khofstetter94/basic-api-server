'use strict';

const express = require('express');
const { FoodsModel } = require('../models');


const router = express.Router();

router.post('/foods', async (req, res, send) => {
  console.log('req body', req.body);

  const newFood = await FoodsModel.create(req.body);
  res.status(200).send(newFood);
});

router.get('/foods/1', async (req, res, send) => {
  const allFood = await FoodsModel.findAll();
  res.status(200).send('All foods:', JSON.stringify(allFood));
});

router.get('/foods/1', async (req, res, send) => {
  const allFood = await FoodsModel.findAll({
    attributes: [req.body.id],
  });
  res.status(200).send('One item:', JSON.stringify(allFood));
});

router.put('/foods/1', async (req, res, send) => {
  const updateFood = await FoodsModel.update();
  res.status(200).send(updateFood);
});

router.delete('/foods/1', async (req, res, send) => {
  const deleteFood = await FoodsModel.destroy({
    where: {
      type: `${req.body.food}`,
    },
  });
  res.status(200).send(deleteFood);
});

module.exports = router;
