import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CreateUserDto } from "./dto/create.user.dto";
import { UserService } from "./user.service";
import { ApiBadRequestResponse, ApiQuery, ApiResponse, ApiTags } from "@nestjs/swagger";
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

  @ApiBadRequestResponse({status: 400, type: 'Bad query param', })
  @ApiResponse({status: 201, type: User })
  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  @ApiQuery({name:'id', example:'kjzn-25fj12345'})
  @Get("/:id")
  getOneUserById(@Param("id") id: string) {
    return `get user id ${id}`;
  }

  @Put("/:id")
  updateUserById( ) {}

  @Delete("/:id")
  deleteUser(){}


}
