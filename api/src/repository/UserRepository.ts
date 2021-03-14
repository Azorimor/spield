import { EntityRepository, Repository } from 'typeorm';
import { User } from '../entity/User';

// eslint-disable-next-line new-cap
@EntityRepository(User)
/**
 * Custom repository for user entity.
 */
export class UserRepository extends Repository<User> {
  /**
   * Find user by given id.
   * @param {number} id The user id to find.
   * @return {Promise<User | undefined>} The user.
   */
  public findById(id: number): Promise<User | undefined> {
    return this.findOne({ id });
  }
}
