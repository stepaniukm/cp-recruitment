import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { logger: ['log'] });
  const config = app.get(ConfigService);

  const port = config.get<string>('PORT');
  await app.listen(port);
}
bootstrap();
