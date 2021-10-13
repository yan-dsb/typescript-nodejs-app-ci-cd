import { getRepository, Repository } from 'typeorm';
import User from '../../../entities/User';
import ICreateUserDTO from '../../../dtos/ICreateUserDTO';
import IUsersRespository from '../../IUsersRepository';

export default class UsersRepository implements IUsersRespository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  public async create({
    name,
    email,
    password,
  }: ICreateUserDTO): Promise<User> {
    const user = this.ormRepository.create({ name, email, password });

    await this.ormRepository.save(user);

    return user;
  }

  public async findByID(user_id: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne(user_id);

    return user;
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne({
      email,
    });

    return user;
  }
}
