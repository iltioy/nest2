import {
  Injectable,
  HttpException,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';

@Injectable()
export class CustomersService {
  users = [
    {
      id: 1,
      email: 'asdasd@mail.ru',
    },
  ];

  findCustomer() {
    throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    return {
      email: 'sadasd@mail.com',
    };
  }
}
