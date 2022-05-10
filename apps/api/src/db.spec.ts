import { Test, TestingModule } from '@nestjs/testing';
import { dbProvider, DB_KEY } from './db';

describe('Db', () => {
  let provider: typeof dbProvider;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [dbProvider],
    }).compile();

    provider = module.get<typeof dbProvider>(DB_KEY);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
