import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { RateLimitedBiscointService } from './check/rate-limited/biscoint.service';
import { CheckService } from './check/check.service';
import { TelegramService } from './check/telegram.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(0);

  const telegram = app.get(TelegramService);
  await telegram.init();

  const biscoint = app.get(RateLimitedBiscointService);
  await biscoint.init();

  const check = app.get(CheckService);
  await check.check();
}

bootstrap();
