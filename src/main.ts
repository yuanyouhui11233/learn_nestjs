import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { NextFunction, Request, Response } from 'express';
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets('public', { prefix: '/static' });

  // 使用中间件
  app.use(function (req: Request, rep: Response, next: NextFunction) {
    console.log('before', req.url);
    next();
    console.log('after');
  });

  await app.listen(3000);
}
bootstrap();
