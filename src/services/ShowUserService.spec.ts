import AppError from '../errors/AppError';
import UsersRepository from '../repositories/fakes/UsersRepository';
import ShowUserService from './ShowUserService';

describe('ShowUserService', () => {
  it('should be able to show a user by id', async () => {
    const usersRepository = new UsersRepository();

    const userCreated = await usersRepository.create({
      name: 'user',
      email: 'email',
      password: 'password',
    });
    const showUser = new ShowUserService(usersRepository);

    const user = await showUser.execute(userCreated.id);
    expect(user).toHaveProperty('id');
  });

  it('should not be able to show a user by id', async () => {
    const usersRepository = new UsersRepository();

    const showUser = new ShowUserService(usersRepository);

    await expect(showUser.execute('user_id')).rejects.toBeInstanceOf(AppError);
  });
});
