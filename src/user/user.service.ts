import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create.user.dto";

@Injectable()
export class UserService {
  private users = [];

  getAll() {
    return this.users;
  }

  createUser(user: CreateUserDto) {
    this.users.push({
      ...user,
      id: new Date().valueOf()
      // id: this.users[this.users.length -1].id +1
    });
    return this.users;

    // return this.users.filter(this.users === this.users ) // ? Сделать динамичное изменение юзера
  }
}
