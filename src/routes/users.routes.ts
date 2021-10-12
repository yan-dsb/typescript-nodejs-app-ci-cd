import { Router } from 'express';
import UsersController from '../controllers/UsersController';

const usersRouter = Router();

const usersController = new UsersController();

usersRouter.post('/users', usersController.create);

usersRouter.get('/users/:id', usersController.show);

export default usersRouter;
