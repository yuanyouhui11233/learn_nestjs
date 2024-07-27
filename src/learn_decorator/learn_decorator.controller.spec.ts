import { Test, TestingModule } from '@nestjs/testing';
import { LearnDecoratorController } from './learn_decorator.controller';
import { LearnDecoratorService } from './learn_decorator.service';

describe('LearnDecoratorController', () => {
  let controller: LearnDecoratorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LearnDecoratorController],
      providers: [LearnDecoratorService],
    }).compile();

    controller = module.get<LearnDecoratorController>(LearnDecoratorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
