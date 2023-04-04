import { Injectable } from '@nestjs/common';

import { CreateUserDto } from './dto/createUser.dto';

@Injectable()
export class UserService {
  /* TODO: return type */
  public async create(userDto: CreateUserDto) {
    // const extractedUser: any = this.extractUser(userDto);
    // const extractedModule: any = this.extractModule(userDto);

    // const user = new ClientEntity(extractedUser);
    // const module = new ClientEntity(extractedModule);

    // this.userRepository.create(user);
    // this.moduleRepository.create(module);

    return 'This action adds a new user';
  }

  private extractUser(userDto: CreateUserDto) {
    return {
      id: userDto.userId,
      name: userDto.userName,
      avatar: userDto.userAvatar,
    };
  }

  private extractModule(userDto: CreateUserDto) {
    return {
      id: userDto.moduleId,
      name: userDto.moduleName,
      lessons: JSON.parse(userDto.lessons),
    };
  }
}
