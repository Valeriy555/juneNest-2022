import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CreateUserDto } from "./dto/create.user.dto";
import { UserService } from "./user.service";
import { ApiQuery, ApiResponse, ApiTags } from "@nestjs/swagger";
import { User } from "./user.model";
import { UpdateUserDto } from "./dto/update.user.dto";

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
  getOneUserById(@Param("id") id: number) {
    return this.userService.getOneUser(id);
  }

  // @Put("/:id")
  // updateUserById(@Body() updateUserDto:UpdateUserDto, @Param("id") id: string ) {
  //   return this.userService.updateUser(updateUserDto, id);
  // }

  @Delete("/:id")
  deleteUser(){}


}
