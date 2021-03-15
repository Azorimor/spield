import { Router, Request, Response } from 'express';
import { createUser, getUserById } from '../controller/user.controller';

// eslint-disable-next-line new-cap
const router: Router = Router();

router.post('/', (req: Request, res: Response) => {
  createUser(req, res);
});

router.get('/:id', (req: Request, res: Response) => {
  getUserById(req, res);
});

export default router;
