import {Injectable} from '@nestjs/common';
import {User} from '../common/model/user.model'

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'lauparr',
      password: '123',
      first_name: 'Parrot',
      last_name: 'Laurent',
      email: 'kestounet@gmail.com',
      phone: '0648091132',
      address: '11, Caserne des Gardes 78120 Rambouillet'
    },
    {
      userId: 2,
      username: 'annparr',
      password: '123',
      first_name: 'Parrot',
      last_name: 'Anne',
      email: 'patesdegeek@gmail.com',
      phone: '0123456789',
      address: '11, Caserne des Gardes 78120 Rambouillet'
    },
    {
      userId: 3,
      username: 'edbauduin',
      password: '123',
      first_name: 'Bauduin',
      last_name: 'Edith',
      email: 'edith.bauduin@gmail.com',
      phone: '987654321',
      address: '11, Caserne des Gardes 78120 Rambouillet'
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }

  async findAll() {
    return this.users
  }
}
