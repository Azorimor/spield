import { Router, Request, Response } from 'express';
import { saveUser } from '../controller/user.controller';

// eslint-disable-next-line new-cap
const router: Router = Router();

router.post('/', (req: Request, res: Response) => {
  saveUser(req, res);
});

router.get('/', (req: Request, res: Response) => {
  res.json({ message: 'OK, userRouter get working' });
});

export default router;
