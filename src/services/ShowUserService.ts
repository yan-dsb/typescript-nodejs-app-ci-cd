import IUsersRespository from 'repositories/IUsersRepository';
import User from 'entities/User';

export default class ShowUserService {
  private usersRepository: IUsersRespository;

  constructor(usersRepository: IUsersRespository) {
    this.usersRepository = usersRepository;
  }

  async execute(id: string): Promise<User> {
    const user = await this.usersRepository.findByID(id);

    if (!user) {
      throw new Error('User not found');
    }

    return user;
  }
}
