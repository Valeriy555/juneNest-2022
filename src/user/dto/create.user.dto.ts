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
import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {

  @ApiProperty({ example:'Valera', required: false})
  @IsString()
  @IsOptional() // Проверяет, отсутствует ли значение, и если да, то игнорирует все валидаторы.
  firstName: string;

  @ApiProperty({ example:'Holenko', required: false})
  @IsString()
  @IsNotEmpty() // означает, что это обязательное поле (это не обязательно писать)
  @Length(2, 30) // кол-во символов в поле
  surName: string;

  @ApiProperty({ example:'male', required: false})
  @IsString()
  @IsOptional()
  gender: string;

  @ApiProperty({ example:'valeraH@gmail.com', required: false})
  @IsString()
  @IsEmail()
  email: string;

  @ApiProperty({ example:20, required: false})
  @IsNumber()
  @Min(18)
  age: number;

  @ApiProperty({ example:'Odesa', required: false})
  @IsString()
  city: string;

  @ApiProperty({ example: true, required: false})
  @IsBoolean()
  isConfirm: boolean;
}