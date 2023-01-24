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

  @ApiProperty({ example: "Liza", required: false })
  @IsString()
  @IsOptional() // Проверяет, отсутствует ли значение, и если да, то игнорирует все валидаторы.
  firstName: string;

  @ApiProperty({ example: "Holenko", required: false })
  @IsString()
  @IsNotEmpty() // означает, что это обязательное поле (это не обязательно писать)
  @Length(2, 30) // кол-во символов в поле
  surName: string;

  @ApiProperty({ example: "female", required: false })
  @IsString()
  @IsOptional()
  gender: string;

  @ApiProperty({ example: "lizaH@gmail.com", required: false })
  @IsString()
  @IsEmail()
  email: string;

  @ApiProperty({ example: 26, required: false })
  @IsNumber()
  @Min(18)
  age: number;

  @ApiProperty({ example: "Odesa", required: false })
  @IsString()
  city: string;

  @ApiProperty({ example: true, required: false })
  @IsBoolean()
  isConfirm: boolean;

  @ApiProperty({ example: "qwerty12345", required: true }) //обязательное поле
  @IsString()
  password: string;
}