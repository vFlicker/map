import { Controller, Get, HttpCode, HttpStatus, Query } from '@nestjs/common';

import { CreateUserDto } from './dto/createUser.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  /* TODO: return type */
  @Get()
  @HttpCode(HttpStatus.CREATED)
  public async create(@Query() userDto: CreateUserDto) {
    return this.userService.create(userDto);
  }
}
