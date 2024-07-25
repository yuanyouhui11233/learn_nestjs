import { Test, TestingModule } from '@nestjs/testing';
import { LearnAopController } from './learn_aop.controller';
import { LearnAopService } from './learn_aop.service';

describe('LearnAopController', () => {
  let controller: LearnAopController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LearnAopController],
      providers: [LearnAopService],
    }).compile();

    controller = module.get<LearnAopController>(LearnAopController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
