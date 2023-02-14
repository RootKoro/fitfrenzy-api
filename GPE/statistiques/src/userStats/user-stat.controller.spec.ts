import { Test, TestingModule } from '@nestjs/testing';
import { UserStatController } from './user-stat.controller';
import { UserStatService } from './user-stat.service';

describe('UserStatController', () => {
  let controller: UserStatController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserStatController],
      providers: [UserStatService],
    }).compile();

    controller = module.get<UserStatController>(UserStatController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
