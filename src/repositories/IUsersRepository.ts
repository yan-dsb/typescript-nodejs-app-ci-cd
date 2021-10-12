import ICreateUserDTO from 'dtos/ICreateUserDTO';
import User from 'entities/User';

export default interface IUsersRespository {
  create(data: ICreateUserDTO): Promise<User>;
  findByEmail(email: string): Promise<User | undefined>;
  findByID(id: string): Promise<User | undefined>;
}
