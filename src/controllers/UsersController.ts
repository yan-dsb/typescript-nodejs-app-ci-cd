import { Request, Response } from 'express';
import UsersRepository from '../repositories/UsersRepository';
import CreateUserService from '../services/CreateUserService';
import ShowUserService from '../services/ShowUserService';

const usersRepository = new UsersRepository();

export default class UsersController {
  async create(request: Request, response: Response): Promise<Response> {
    const { name, email } = request.body;
    try {
      const createUser = new CreateUserService(usersRepository);

      const user = await createUser.execute({ name, email });

      return response.json(user);
    } catch (error) {
      const err = error as Error;

      return response.status(400).json({ message: err.message });
    }
  }

  async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    try {
      const showUser = new ShowUserService(usersRepository);

      const user = await showUser.execute(id);

      return response.json(user);
    } catch (error) {
      const err = error as Error;
      return response.status(404).json({ message: err.message });
    }
  }
}
