import connection from './util/connection';

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
