import { Test, TestingModule } from '@nestjs/testing';
import { SportsController } from './advices.controller';
import { SportsService } from './advices.service';

describe('SportsController', () => {
  let controller: SportsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SportsController],
      providers: [SportsService],
    }).compile();

    controller = module.get<SportsController>(SportsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
