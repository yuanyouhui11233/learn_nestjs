import { Test, TestingModule } from '@nestjs/testing';
import { LearnDecoratorService } from './learn_decorator.service';

describe('LearnDecoratorService', () => {
  let service: LearnDecoratorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LearnDecoratorService],
    }).compile();

    service = module.get<LearnDecoratorService>(LearnDecoratorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
