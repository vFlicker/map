import { Module } from '@nestjs/common';

import { TypeormModule } from './common/modules';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [TypeormModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
