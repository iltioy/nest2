import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { SerializedUser, User } from 'src/users/types';

@Injectable()
export class UsersService {
  private users: User[];

  constructor() {
    this.users = [
      {
        password: 'asdasd',
        username: 'mrcors',
      },
    ];
  }

  getUsers() {
    return this.users.map((user) => plainToClass(SerializedUser, user));
  }
}
