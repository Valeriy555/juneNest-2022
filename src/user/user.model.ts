import { BelongsToMany, Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { Car } from "../car/car.model";
import { Role } from "../role/role.model";
import { UserRoles } from "../role/user-role.model";

@Table({tableName: 'users'}) // создали табличку
export class User extends Model<User> {

  @Column({ //столбец
    type: DataType.INTEGER,
    autoIncrement: true,
    unique: true,
    primaryKey: true
  })
  id: number;

  @ApiProperty({ example:'Valera', required: false})
  @Column({type: DataType.STRING, allowNull: true}) //столбец
  firstName: string;

  @ApiProperty({ example:'Holenko', required: false})
  @Column({type: DataType.STRING, allowNull: false})
  surName: string;

  @ApiProperty({ example:'male', required: false})
  @Column({type: DataType.STRING, allowNull: false})
  gender: string;

  @ApiProperty({ example:20, required: false})
  @Column({type: DataType.INTEGER, allowNull: false})
  age: number;

  @ApiProperty({ example:'Odesa', required: false})
  @Column({type: DataType.STRING, allowNull: true})
  city: string;

  @ApiProperty({ example: true, required: false})
  @Column({type: DataType.BOOLEAN, allowNull: true})
  isConfirm: boolean;

  @ApiProperty({ example:'valeraH@gmail.com', required: false})
  @Column({type: DataType.STRING, unique: true, allowNull: false})
  email: string;

  @ApiProperty({ example:'valeraH@gmail.com', required: false})
  @Column({type: DataType.STRING, allowNull: false})
  password: string;

  @HasMany(() => Car)
  cars: Car[];

  @BelongsToMany(() => Role, () => UserRoles)
  roles: Role[];

}