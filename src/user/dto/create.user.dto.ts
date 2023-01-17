import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Length,
  Min
} from "class-validator";

export class CreateUserDto {

  @IsString()
  @IsOptional() // означает, что это не обязательное поле
  firstName: string;

  @IsString()
  @IsNotEmpty() // означает, что это обязательное поле (это не обязательно писать)
  @Length(2, 30) // кол-во символов в поле
  surName: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsNumber()
  @Min(18)
  age: number;

  @IsString()
  city: string;

  @IsBoolean()
  isConfirm: boolean;
}