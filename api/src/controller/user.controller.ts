import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { User } from '../entity/User';
import { UserRepository } from '../repository/UserRepository';
import logger from '../util/logger';

/**
 * Register user.
 * @param {Request} req Initial request.
 * @param {Response} res Initial response.
 * @route POST /user
 */
export const saveUser = async (req: Request, res: Response): Promise<void> => {
  const userRepo = getCustomRepository(UserRepository);
  const user = userRepo.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName
  });
  // TODO handle verification and database errors (duplicate keys, ...)
  try {
    const saved: User = await userRepo.save(user);
    logger.info(`User created: ${saved.id}, ${saved.username}`);
    const saveReturn = {
      id: saved.id,
      username: saved.username,
      email: saved.email,
      firstName: saved.firstName,
      lastName: saved.lastName,
      games: saved.games
    };
    res.status(200).json(saveReturn);
  } catch (error) {
    logger.error(error);
    res.status(404).send();
  }
};
