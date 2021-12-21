import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CheckModule } from './check/check.module';
import config from './config/config-helper';
import { AppConfigModule } from './config/config.module';
import { AppLoggerModule } from './shared/logger/logger.module';

@Module({
  imports: [
    AppConfigModule,
    AppLoggerModule,
    CheckModule,
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      load: [() => config.createConfig()],
    }),
  ],
})
export class AppModule {}
