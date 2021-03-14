import { Router } from 'express';
import userRouter from './user.router';

// eslint-disable-next-line new-cap
const router: Router = Router();

router.use('/user', userRouter);

export default router;
