'use strict';

const express = require('express');
const { ClothesModel } = require('../models');


const router = express.Router();

router.post('/clothes', async (req, res, send) => {
  console.log('req body', req.body);

  const newClothes = await ClothesModel.create(req.body);
  res.status(200).send(newClothes);
});

router.get('/clothes/1', async (req, res, send) => {
  const allClothes = await ClothesModel.findAll();
  res.status(200).send('All clothes:', JSON.stringify(allClothes));
});

router.get('/clothes/1', async (req, res, send) => {
  const allClothes = await ClothesModel.findAll({
    attributes: [req.body.id],
  });
  res.status(200).send('One item:', JSON.stringify(allClothes));
});

router.put('/clothes/1', async (req, res, send) => {
  const updateClothes = await ClothesModel.update();
  res.status(200).send(updateClothes);
});

router.delete('/clothes/1', async (req, res, send) => {
  const deleteClothes = await ClothesModel.destroy({
    where: {
      type: `${req.body.type}`,
    },
  });
  res.status(200).send(deleteClothes);
});


module.exports = router;
