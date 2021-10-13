import { Request, Response } from 'express';
import UsersRepository from '../repositories/implementations/typeorm/UsersRepository';
import CreateUserService from '../services/CreateUserService';
import ShowUserService from '../services/ShowUserService';

export default class UsersController {
  async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;
    const usersRepository = new UsersRepository();

    const createUser = new CreateUserService(usersRepository);

    const user = await createUser.execute({ name, email, password });

    return response.json(user);
  }

  async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const usersRepository = new UsersRepository();

    const showUser = new ShowUserService(usersRepository);

    const user = await showUser.execute(id);

    return response.json(user);
  }
}
