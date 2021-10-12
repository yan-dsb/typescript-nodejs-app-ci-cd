import User from 'entities/User';
import IUsersRespository from 'repositories/IUsersRepository';

interface IRequest {
  name: string;
  email: string;
}

export default class CreateUserService {
  private usersRepository: IUsersRespository;

  constructor(usersRepository: IUsersRespository) {
    this.usersRepository = usersRepository;
  }

  public async execute({ name, email }: IRequest): Promise<User> {
    const userExists = await this.usersRepository.findByEmail(email);

    if (userExists) {
      throw new Error('A user already exists with this e-mail');
    }

    const user = await this.usersRepository.create({ name, email });

    return user;
  }
}
