import { Router, Request, Response } from 'express';
import {
  createSpiel,
  deleteSpiel,
  getSpielById,
  updateSpiel
} from '../controller/spiel.controller';

// eslint-disable-next-line new-cap
const router: Router = Router();

router.post('/', (req: Request, res: Response) => {
  createSpiel(req, res);
});

router.get('/:id', (req: Request, res: Response) => {
  getSpielById(req, res);
});

router.patch('/:id', (req: Request, res: Response) => {
  updateSpiel(req, res);
});

router.delete('/:id', (req: Request, res: Response) => {
  deleteSpiel(req, res);
});

export default router;
