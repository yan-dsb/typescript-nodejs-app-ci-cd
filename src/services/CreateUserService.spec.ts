import UsersRepository from '../repositories/UsersRepository';
import CreateUserService from './CreateUserService';

describe('CreateUserService', () => {
  it('should be able to create a new user', async () => {
    const usersRepository = new UsersRepository();

    const createUser = new CreateUserService(usersRepository);

    const user = await createUser.execute({
      name: 'user',
      email: 'user@mail.com',
    });
    expect(user).toHaveProperty('id');
  });

  it('should not be able to create a new user with a e-mail that already exists', async () => {
    const usersRepository = new UsersRepository();

    const createUser = new CreateUserService(usersRepository);

    await createUser.execute({ name: 'user', email: 'user@mail.com' });

    await expect(
      createUser.execute({ name: 'user', email: 'user@mail.com' })
    ).rejects.toBeInstanceOf(Error);
  });
});
