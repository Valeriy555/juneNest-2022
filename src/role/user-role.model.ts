import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { User } from "../user/user.model";
import { Role } from "./role.model";

@Table({tableName: 'user_roles'})
export class UserRoles extends Model<UserRoles>{

  @Column({ //столбец
    type: DataType.INTEGER,
    autoIncrement: true,
    unique: true,
    primaryKey: true
  })
  id: number;

  @ApiProperty()
  @ForeignKey(()=>User)
  @Column({type: DataType.INTEGER, allowNull: false})
  userId: number;

  @ApiProperty()
  @ForeignKey(()=>Role)
  @Column({type: DataType.INTEGER, allowNull: false})
  roleId: string;

}
