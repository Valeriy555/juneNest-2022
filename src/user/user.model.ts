import { Column, DataType, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";

@Table({tableName: 'users'}) // создали табличку
export class User extends Model<User> {

  // @Column({ //столбец
  //   type: DataType.STRING,
  //   autoIncrement: true,
  //   unique: true,
  //   primaryKey: true
  // })
  // id: string;

  @ApiProperty({ example:'Valera', required: false})
  @Column({type: DataType.STRING, allowNull: true}) //столбец
  firstName: string;

  @ApiProperty({ example:'Holenko', required: false})
  @Column({type: DataType.STRING, allowNull: false})
  surName: string;

  @ApiProperty({ example:'male', required: false})
  @Column({type: DataType.STRING, allowNull: false})
  gender: string;

  @ApiProperty({ example:'valeraH@gmail.com', required: false})
  @Column({type: DataType.STRING, unique: true, allowNull: false})
  email: string;

  @ApiProperty({ example:20, required: false})
  @Column({type: DataType.INTEGER, allowNull: false})
  age: number;

  @ApiProperty({ example:'Odesa', required: false})
  @Column({type: DataType.STRING, allowNull: true})
  city: string;

  @ApiProperty({ example: true, required: false})
  @Column({type: DataType.BOOLEAN, allowNull: true})
  isConfirm: boolean;

}