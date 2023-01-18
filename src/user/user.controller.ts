import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CreateUserDto } from "./dto/create.user.dto";
import { UserService } from "./user.service";
import { ApiQuery, ApiResponse, ApiTags } from "@nestjs/swagger";
import { User } from "./user.model";

@ApiTags('Users')
@Controller("users")
export class UserController {

  constructor(private readonly userService: UserService) {
  }

  @Get()
  getAllUsers() {
    return this.userService.getAll();
  }

  @ApiResponse({status: 201, type: User })
  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  @Get("/:id")
  @ApiQuery({name:'id', example:'kjzn-25fj12345'})
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
