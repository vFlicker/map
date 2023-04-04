import { IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  userId: string;

  @IsString()
  userName: string;

  @IsString()
  userAvatar: string;

  @IsString()
  moduleId: string;

  @IsString()
  moduleName: string;

  @IsString()
  lessons: string;
}
