import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CreateUserDto } from "./dto/create.user.dto";
import { UserService } from "./user.service";

@Controller("users")
export class UserController {

  constructor(private readonly userService: UserService) {
  }

  @Get()
  getAllUsers() {
    return this.userService.getAll();
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  @Get("/:id")
  getOneUserById(@Param("id") id: string) {
    return `get user by id: ${id}`;
  }

  @Put("/:id")
  updateUser() {
    return "update users";
  }

  @Delete("/:id")
  deleteUser(){}


}
