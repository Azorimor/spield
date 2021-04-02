import connection from './util/connection';
import request from 'supertest';
import app from '../src/app';
import { UserRepository } from '../src/repository/UserRepository';

describe('POST /user', () => {
  beforeAll(async () => {
    await connection.create();
  });

  afterAll(async () => {
    await connection.clear();
    await connection.close();
  });

  test('User should be returned.', async (done) => {
    const response = await request(app).post('/user').send({
      username: 'username',
      password: 'testpassword',
      email: 'testemail@mail.de',
      firstName: 'firstName',
      lastName: 'lastName'
    });
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      username: 'username',
      email: 'testemail@mail.de',
      id: expect.any(Number),
      createdAt: expect.any(String),
      avatarUrl: null,
      firstName: 'firstName',
      lastName: 'lastName'
    });
    done();
  });
  test('User should be saved.', async (done) => {
    const response = await request(app).post('/user').send({
      username: 'username2',
      password: 'testpassword',
      email: '2testemail@mail.de',
      firstName: 'firstName',
      lastName: 'lastName'
    });
    expect(response.status).toBe(200);
    const user = await connection
      .getDBConnection()
      .getCustomRepository(UserRepository)
      .findById(response.body.id);
    expect(user).toBeTruthy();
    done();
  });

  test('User should not be returned.', async (done) => {
    const response = await request(app).post('/user').send({
      username: 'username',
      password: 'testpassword'
    });
    expect(response.status).toBe(400);
    expect(response.body[0].constraints).toBeDefined();
    done();
  });

  test('User should not be saved.', async (done) => {
    const response = await request(app).post('/user').send({
      username: 'username2',
      password: 'testpassword'
    });
    expect(response.status).toBe(400);
    const user = await connection
      .getDBConnection()
      .getCustomRepository(UserRepository)
      .findById(response.body.id);
    expect(user).toBeUndefined();
    done();
  });
});
