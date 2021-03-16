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

  /**
   * Delete user by given id.
   * @param {number} id The user id to delete.
   * @return {Promise<boolean>} {@code true}, if the user was deleted, {@code false} otherwise.
   */
  public async deleteById(id: number): Promise<boolean> {
    const result = await this.delete({ id });
    return result.affected ? true : false;
  }

  /**
   * Update a given user by id.
   * @param {number} id The user id.
   * @param {any} user The partial new user properties.
   * @return {Promise<boolean>} result
   */
  public async updateById(id: number, user: any): Promise<boolean> {
    const result = await this.update({ id }, user);
    return result ? true : false;
  }
}
