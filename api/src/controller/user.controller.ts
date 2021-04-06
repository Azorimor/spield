import { validate } from 'class-validator';
import { Request, Response } from 'express';
import _ from 'lodash';
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
export const createUser = async (req: Request, res: Response) => {
  const userRepo = getCustomRepository(UserRepository);
  const user = userRepo.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    avatarUrl: req.body.avatarUrl
  });
  const errors = await validate(user);
  if (errors.length > 0) {
    res.status(400).json(errors);
    return;
  }
  try {
    const saved = await userRepo.save(user);
    logger.info(`User created: ${saved.id}, ${saved.username}`);
    delete saved.password;
    delete saved.updatedAt;
    delete saved.isAdmin;
    res.status(200).json(saved);
  } catch (error) {
    res.status(400).json({ message: 'User already exists.' });
  }
};

/**
 * Get user by id.
 * @param {Request} req Initial request.
 * @param {Response} res Initial response.
 * @route GET /user/:id
 */
export const getUserById = async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);
  if (isNaN(id) || id < 0) {
    res.status(400).json({ message: 'Invalid id supplied' });
    return;
  }
  try {
    const user = await getCustomRepository(UserRepository).findById(id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    logger.error(error);
    res.status(500).send();
  }
};

/**
 * Update user by id.
 * @param {Request} req Initial request.
 * @param {Response} res Initial response.
 * @route PATCH /user/:id
 */
export const updateUser = async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);
  if (isNaN(id) || id < 0) {
    res.status(400).json({ message: 'Invalid id supplied' });
    return;
  }
  if (_.isEmpty(req.body)) {
    res.status(400).json({ message: 'No data supplied.' });
    return;
  }
  try {
    const user = new User();
    if (req.body.username) {
      user.username = req.body.username;
    }
    if (req.body.password) {
      user.password = req.body.password;
    }
    if (req.body.email) {
      user.email = req.body.email;
    }
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.avatarUrl = req.body.avatarUrl;
    const errors = await validate(user);
    if (errors.length > 0) {
      res.status(400).json(errors);
      return;
    }
    const updated = await getCustomRepository(UserRepository).updateById(
      id,
      user
    );
    if (updated) {
      res.status(200).send();
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    logger.error(error);
    res.status(500).send();
  }
};

/**
 * Delete user by id.
 * @param {Request} req Initial request.
 * @param {Response} res Initial response.
 * @route DELETE /user/:id
 */
export const deleteUser = async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);
  if (isNaN(id) || id < 0) {
    res.status(400).json({ message: 'Invalid id supplied' });
    return;
  }
  try {
    const deleted = await getCustomRepository(UserRepository).deleteById(id);
    if (deleted) {
      res.status(200).send();
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    logger.error(error);
    res.status(500).send();
  }
};
