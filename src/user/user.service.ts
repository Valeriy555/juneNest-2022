import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create.user.dto";
import { InjectModel } from "@nestjs/sequelize";
import { User } from "./user.model";
import { UpdateUserDto } from "./dto/update.user.dto";

@Injectable()
export class UserService {
  constructor(@InjectModel(User) private userRepository: typeof User) {
  }

  async getAll() {
    return this.userRepository.findAll();
  };

  async createUser(user: CreateUserDto) {
    return this.userRepository.create(user);
  };

  async getOneUser(id: number) {
    return this.userRepository.findOne({ where: { id } });
  };

  // async updateUser(id: number, user: UpdateUserDto) {
  //   return this.userRepository.update();
  // };


}
