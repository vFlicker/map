import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { ModuleModule } from './modules/module/module.module';

@Module({
  imports: [UserModule, ModuleModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
