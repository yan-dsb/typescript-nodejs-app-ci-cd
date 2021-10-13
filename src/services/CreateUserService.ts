import User from 'entities/User';
import IUsersRespository from 'repositories/IUsersRepository';
import AppError from '../errors/AppError';

interface IRequest {
  name: string;
  email: string;
  password: string;
}

export default class CreateUserService {
  private usersRepository: IUsersRespository;

  constructor(usersRepository: IUsersRespository) {
    this.usersRepository = usersRepository;
  }

  public async execute({ name, email, password }: IRequest): Promise<User> {
    const userExists = await this.usersRepository.findByEmail(email);

    if (userExists) {
      throw new AppError('A user already exists with this e-mail');
    }

    const user = await this.usersRepository.create({ name, email, password });

    return user;
  }
}
