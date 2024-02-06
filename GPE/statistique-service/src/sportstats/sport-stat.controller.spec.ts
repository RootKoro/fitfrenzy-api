import { Test, TestingModule } from '@nestjs/testing';
import { SportStatController } from './sport-stat.controller';
import { SportStatService } from './sport-stat.service';

describe('SportStatController', () => {
  let controller: SportStatController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SportStatController],
      providers: [SportStatService],
    }).compile();

    controller = module.get<SportStatController>(SportStatController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
