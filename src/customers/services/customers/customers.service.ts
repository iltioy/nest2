import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
  findCustomer() {
    return {
      email: 'sadasd@mail.com',
    };
  }
}
