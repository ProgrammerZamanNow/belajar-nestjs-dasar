import { Test, TestingModule } from '@nestjs/testing';
import { Connection } from './connection';

describe('Connection', () => {
  let provider: Connection;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Connection],
    }).compile();

    provider = module.get<Connection>(Connection);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
