import { Test, TestingModule } from '@nestjs/testing';
import { StarshipsResolver } from './starships.resolver';

describe('StarshipsResolver', () => {
  let resolver: StarshipsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StarshipsResolver],
    }).compile();

    resolver = module.get<StarshipsResolver>(StarshipsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
