import {
  IsEmail,
  IsNotEmpty,
  IsString,
  ValidateNested,
  IsNotEmptyObject,
} from 'class-validator';
import { CreateAddressDto } from './CreateAddress.dto';
import { Type } from 'class-transformer';

export class CreateCustomerDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsNotEmptyObject()
  @Type(() => CreateAddressDto)
  @ValidateNested()
  address: CreateAddressDto;
}
