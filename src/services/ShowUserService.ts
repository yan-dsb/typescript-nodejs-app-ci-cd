import IUsersRespository from 'repositories/IUsersRepository';
import User from 'entities/User';
import AppError from '../errors/AppError';

export default class ShowUserService {
  private usersRepository: IUsersRespository;

  constructor(usersRepository: IUsersRespository) {
    this.usersRepository = usersRepository;
  }

  public async execute(id: string): Promise<User> {
    const user = await this.usersRepository.findByID(id);

    if (!user) {
      throw new AppError('User not found', 404);
    }

    return user;
  }
}
