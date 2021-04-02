import { getConnection } from 'typeorm';
import dotenv from 'dotenv';
import { default as testConnection } from '../../src/util/connection';

dotenv.config();

const connection = {
  async create() {
    await testConnection;
  },

  async close() {
    await getConnection().close();
  },

  async clear() {
    const connection = getConnection();
    const entities = connection.entityMetadatas;
    for (const entity of entities) {
      await connection
        .getRepository(entity.name)
        .query(`DELETE FROM \"${entity.tableName}\";`);
    }
  },

  getDBConnection() {
    return getConnection();
  }
};
export default connection;
