import {
  Controller,
  Get,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateCustomerDto } from 'src/customers/dto/CreateCustomer.dto';
import { CustomersService } from 'src/customers/services/customers/customers.service';

@Controller('customers')
export class CustomersController {
  constructor(private customersService: CustomersService) {}

  @Get()
  getCustomer() {
    return this.customersService.findCustomer();
  }

  @Post()
  createCustomer(@Body() dto: CreateCustomerDto) {
    console.log(dto);
    return { msg: 'created' };
  }
}
