import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateAddressDto {
  @IsString()
  @IsNotEmpty()
  line1: string;

  @IsString()
  line2?: string;
}
