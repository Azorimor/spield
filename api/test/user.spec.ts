import connection from './util/connection';
import request from 'supertest';
import app from '../src/app';
import { UserRepository } from '../src/repository/UserRepository';
import { getCustomRepository, getRepository } from 'typeorm';
import { User } from '../src/entity/User';

beforeAll(async (done) => {
  await connection.create();
  done();
});

afterAll(async (done) => {
  await connection.clear();
  await connection.close();
  done();
});

afterEach(async (done) => {
  await connection.clear();
  done();
});

describe('POST /user', () => {
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
    const user = await getCustomRepository(UserRepository).findById(
      response.body.id
    );
    expect(user).toBeTruthy();
    done();
  });

  test('User should not be returned (no email).', async (done) => {
    const response = await request(app).post('/user').send({
      username: 'username',
      password: 'testpassword'
    });
    expect(response.status).toBe(400);
    expect(response.body[0].constraints).toBeDefined();
    done();
  });

  test('User should not be saved (no email).', async (done) => {
    const response = await request(app).post('/user').send({
      username: 'username2',
      password: 'testpassword'
    });
    expect(response.status).toBe(400);
    const user = await getCustomRepository(UserRepository).findById(
      response.body.id
    );
    expect(user).toBeUndefined();
    done();
  });
});

describe('GET /user/:id', () => {
  test('User information should be returned after valid request.', async (done) => {
    const insertedUser = await getRepository(User).save({
      username: 'username3',
      email: 'testmail3@mail.com',
      password: 'superPassword',
      firstName: 'firstName',
      lastName: 'lastName',
      avatarUrl: 'https://avatar.com/id=45'
    });
    const response = await request(app).get(`/user/${insertedUser.id}`).send();
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      username: insertedUser.username,
      email: insertedUser.email,
      id: insertedUser.id,
      createdAt: insertedUser.createdAt!.toISOString(),
      updatedAt: insertedUser.updatedAt!.toISOString(),
      avatarUrl: insertedUser.avatarUrl,
      firstName: insertedUser.firstName,
      lastName: insertedUser.lastName
    });
    done();
  });

  test('User id is not in database. Return Code 404', async (done) => {
    const response = await request(app).get('/user/5').send();
    expect(response.status).toBe(404);
    expect(response.body).toEqual({
      message: 'User not found'
    });
    done();
  });

  test('User id is not a number. Return Code 400', async (done) => {
    const response = await request(app).get('/user/nan').send();
    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      message: 'Invalid id supplied'
    });
    done();
  });

  test('User id is a negative number. Return Code 400', async (done) => {
    const response = await request(app).get('/user/-5').send();
    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      message: 'Invalid id supplied'
    });
    done();
  });
});

describe('PATCH /user/:id', () => {
  test('User information should be updated after valid request.', async (done) => {
    const initialUser = await getRepository(User).save({
      username: 'username',
      email: 'testmail@mail.com',
      password: 'superPassword',
      firstName: 'firstName',
      lastName: 'lastName',
      avatarUrl: 'https://avatar.com/id=45'
    });
    const data = {
      username: 'newName',
      email: 'othermail@mail.com',
      password: 'superSecurePassword',
      firstName: 'secondName',
      lastName: 'thirdName',
      avatarUrl: 'https://avatar.com/id=46'
    };
    const response = await request(app)
      .patch(`/user/${initialUser.id}`)
      .send(data);

    expect(response.status).toBe(200);
    const updatedUser = await getCustomRepository(UserRepository).findOne({
      where: { id: initialUser.id },
      cache: false
    });
    expect(updatedUser).not.toBeUndefined();
    if (updatedUser) {
      expect(response.body).toEqual({});
      expect(updatedUser.password).not.toEqual(initialUser.password);
      expect(updatedUser.password).not.toEqual(data.password);
      expect(updatedUser.updatedAt).not.toEqual(
        initialUser.updatedAt!.toISOString()
      );
      expect(updatedUser).toEqual(
        expect.objectContaining({
          username: data.username,
          email: data.email,
          firstName: data.firstName,
          lastName: data.lastName,
          avatarUrl: data.avatarUrl,
          id: initialUser.id,
          createdAt: initialUser.createdAt
        })
      );
    }
    done();
  });

  test('User id is not in database. Return Code 404', async (done) => {
    const data = {
      username: 'newName',
      email: 'othermail@mail.com',
      password: 'superSecurePassword',
      firstName: 'secondName',
      lastName: 'thirdName',
      avatarUrl: 'https://avatar.com/id=46'
    };
    const response = await request(app).patch('/user/5').send(data);
    expect(response.status).toBe(404);
    expect(response.body).toEqual({
      message: 'User not found'
    });
    done();
  });

  test('User id is not a number. Return Code 400', async (done) => {
    const data = {
      username: 'newName',
      email: 'othermail@mail.com',
      password: 'superSecurePassword',
      firstName: 'secondName',
      lastName: 'thirdName',
      avatarUrl: 'https://avatar.com/id=46'
    };
    const response = await request(app).patch('/user/nan').send(data);
    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      message: 'Invalid id supplied'
    });
    done();
  });

  test('User id is a negative number. Return Code 400', async (done) => {
    const data = {
      username: 'newName',
      email: 'othermail@mail.com',
      password: 'superSecurePassword',
      firstName: 'secondName',
      lastName: 'thirdName',
      avatarUrl: 'https://avatar.com/id=46'
    };
    const response = await request(app).patch('/user/-5').send(data);
    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      message: 'Invalid id supplied'
    });
    done();
  });

  test('Send empty update data. Return Code 400', async (done) => {
    const initialUser = await getRepository(User).save({
      username: 'username',
      email: 'testmail@mail.com',
      password: 'superPassword',
      firstName: 'firstName',
      lastName: 'lastName',
      avatarUrl: 'https://avatar.com/id=45'
    });

    const data = {};
    const response = await request(app)
      .patch(`/user/${initialUser.id}`)
      .send(data);
    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      message: 'No data supplied.'
    });
    done();
  });

  test('Send partial update data. Return Code 200', async (done) => {
    const initialUser = await getRepository(User).save({
      username: 'username',
      email: 'testmail@mail.com',
      password: 'superPassword',
      firstName: 'firstName',
      lastName: 'lastName',
      avatarUrl: 'https://avatar.com/id=45'
    });
    const data = {
      email: 'othermail@mail.com',
      avatarUrl: 'https://avatar.com/id=46'
    };
    const response = await request(app)
      .patch(`/user/${initialUser.id}`)
      .send(data);

    expect(response.status).toBe(200);
    const updatedUser = await getCustomRepository(UserRepository).findOne({
      select: [
        'id',
        'password', // needed to select password for comparison
        'avatarUrl',
        'createdAt',
        'updatedAt',
        'email',
        'firstName',
        'lastName',
        'username'
      ],
      where: { id: initialUser.id },
      cache: false
    });
    expect(updatedUser).not.toBeUndefined();
    if (updatedUser) {
      expect(response.body).toEqual({});
      expect(updatedUser.password).toEqual(initialUser.password);
      expect(updatedUser.updatedAt).not.toEqual(
        initialUser.updatedAt!.toISOString()
      );
      expect(updatedUser).toEqual(
        expect.objectContaining({
          username: initialUser.username,
          email: data.email,
          firstName: initialUser.firstName,
          lastName: initialUser.lastName,
          avatarUrl: data.avatarUrl,
          id: initialUser.id,
          createdAt: initialUser.createdAt
        })
      );
    }
    done();
  });
});
