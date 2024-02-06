import { Test, TestingModule } from '@nestjs/testing';
import { SportStatService } from './sport-stat.service';

describe('SportStatService', () => {
  let service: SportStatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SportStatService],
    }).compile();

    service = module.get<SportStatService>(SportStatService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
