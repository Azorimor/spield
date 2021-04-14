import { Request, Response } from 'express';
import logger from '../util/logger';

/**
 * Create a new spiel.
 * @param {Request} req Initial request.
 * @param {Response} res Initial response.
 * @route POST /spiel
 */
export const createSpiel = async (req: Request, res: Response) => {
  logger.error('not implemented');
  res.json({ message: 'not implemented' }).send();
};

/**
 * Get spiel by id.
 * @param {Request} req Initial request.
 * @param {Response} res Initial response.
 * @route GET /spiel/:id
 */
export const getSpielById = async (req: Request, res: Response) => {
  logger.error('not implemented');
  res.json({ message: 'not implemented' }).send();
};

/**
 * Update spiel by id.
 * @param {Request} req Initial request.
 * @param {Response} res Initial response.
 * @route PATCH /spiel/:id
 */
export const updateSpiel = async (req: Request, res: Response) => {
  logger.error('not implemented');
  res.json({ message: 'not implemented' }).send();
};

/**
 * Delete spiel by id.
 * @param {Request} req Initial request.
 * @param {Response} res Initial response.
 * @route DELETE /spiel/:id
 */
export const deleteSpiel = async (req: Request, res: Response) => {
  logger.error('not implemented');
  res.json({ message: 'not implemented' }).send();
};
