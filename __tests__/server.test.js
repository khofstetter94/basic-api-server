'use strict';

const supertest = require('supertest');
const { app } = require('../src/server');
const { sequelizeDatabase } = require('../src/server');
const request = supertest(app);

beforeAll(() => {
  sequelizeDatabase.sync();
});

afterAll(() => {
  sequelizeDatabase.sync();
});

describe('Testing REST API', () => {
  test('Create a food', async () => {
    let response = await request.post('/foods').send({
      food: 'tester',
      gluten: true,
      dairy: true,
      taste: 'bitter',
    });

    expect(response.status).toEqual(200);
    expect(response.food).toEqual('tester');
    expect(response.gluten).toEqual(true);
    expect(response.dairy).toEqual(true);
    expect(response.taste).toEqual('bitter');
  });

  test('Should read from foods', () => {
    expect(true).toBe(false);
  });

  test('Should update a food', () => {
    expect(true).toBe(false);
  });

  test('Should delete a food', () => {
    expect(true).toBe(false);
  });
});

describe('Testing REST API', () => {
  test('Create clothes', async () => {
    let response = await request.post('/clothes').send({
      type: 'dress',
      fabric: 'silk',
      store: 'Aritzia',
      price: 89,
    });

    expect(response.status).toEqual(200);
    expect(response.type).toEqual('dress');
    expect(response.fabric).toEqual('silk');
    expect(response.store).toEqual('Aritzia');
    expect(response.price).toEqual(89);
  });

  test('Should read from clothes', () => {
    expect(true).toBe(false);
  });

  test('Should update a clothing', () => {
    expect(true).toBe(false);
  });

  test('Should delete a clothing', () => {
    expect(true).toBe(false);
  });
});

