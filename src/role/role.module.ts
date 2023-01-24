import { Module } from '@nestjs/common';
import { RoleController } from './role.controller';
import { RoleService } from './role.service';
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "../user/user.model";
import { Role } from "./role.model";
import { UserRoles } from "./user-role.model";

@Module({
  imports:[SequelizeModule.forFeature([User, Role, UserRoles])],
  controllers: [RoleController],
  providers: [RoleService],
  exports: [RoleService],
})
export class RoleModule {}
