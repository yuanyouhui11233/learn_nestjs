import { Module } from '@nestjs/common';
import { LearnDecoratorService } from './learn_decorator.service';
import { LearnDecoratorController } from './learn_decorator.controller';

@Module({
  controllers: [LearnDecoratorController],
  providers: [LearnDecoratorService],
})
export class LearnDecoratorModule {}
