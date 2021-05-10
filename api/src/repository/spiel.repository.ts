import { EntityRepository, Repository } from 'typeorm';
import { Spiel } from '../entity/Spiel';

// eslint-disable-next-line new-cap
@EntityRepository(Spiel)
/**
 * Custom repository for spiel entity.
 */
export class SpielRepository extends Repository<Spiel> {
  /**
   * Find spiel by given id.
   * @param {string} id The spiel id to find.
   * @return {Promise<Spiel | undefined>} The spiel.
   */
  public findById(id: string): Promise<Spiel | undefined> {
    return this.findOne({ id });
  }

  /**
   * Delete spiel by given id.
   * @param {string} id The spiel id to delete.
   * @return {Promise<boolean>} {@code true} if the spiel was deleted, {@code false} otherwise.
   */
  public async deleteById(id: string): Promise<boolean> {
    const result = await this.delete({ id });
    return result.affected ? true : false;
  }

  /**
   * Update a given spiel by id.
   * @param {string} id The user id.
   * @param {any} spiel The partial new spiel properties.
   * @return {Promise<boolean>} result
   */
  public async updateById(id: string, spiel: any): Promise<boolean> {
    const existing = await this.findOne({ where: { id: id }, cache: false });
    if (!existing) {
      return false;
    }
    this.merge(existing, spiel);
    const result = await this.save(existing);
    return result ? true : false;
  }
}
