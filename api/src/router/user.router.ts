import { Router, Request, Response } from 'express';
import {
  createUser,
  deleteUser,
  getUserById,
  updateUser
} from '../controller/user.controller';

// eslint-disable-next-line new-cap
const router: Router = Router();

router.post('/', (req: Request, res: Response) => {
  createUser(req, res);
});

router.get('/:id', (req: Request, res: Response) => {
  getUserById(req, res);
});

router.patch('/:id', (req: Request, res: Response) => {
  updateUser(req, res);
});

router.delete('/:id', (req: Request, res: Response) => {
  deleteUser(req, res);
});

export default router;
