import { Inject } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
import { DB, DB_KEY } from 'src/db';
import { Person } from './models/person.model';

@Resolver(() => Person)
export class PeopleResolver {
  constructor(@Inject(DB_KEY) private db: DB) {}

  @Query(() => [Person])
  async people() {
    return this.db.person.findMany();
  }
}
