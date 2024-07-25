import { Test, TestingModule } from '@nestjs/testing';
import { LearnAopService } from './learn_aop.service';

describe('LearnAopService', () => {
  let service: LearnAopService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LearnAopService],
    }).compile();

    service = module.get<LearnAopService>(LearnAopService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
