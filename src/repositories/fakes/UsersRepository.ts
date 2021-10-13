import ICreateUserDTO from '../../dtos/ICreateUserDTO';
import User from '../../entities/User';
import IUsersRespository from '../IUsersRepository';

export default class UsersRepository implements IUsersRespository {
  private users: User[] = [];

  public async create({
    name,
    email,
    password,
  }: ICreateUserDTO): Promise<User> {
    const user = new User();
    Object.assign(user, { name, email, password });

    this.users.push(user);

    return user;
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    return this.users.find(user => user.email === email);
  }

  public async findByID(id: string): Promise<User | undefined> {
    return this.users.find(user => user.id === id);
  }
}
