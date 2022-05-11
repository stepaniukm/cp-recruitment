import { Module } from '@nestjs/common';
import { PeopleResolver } from './people.resolver';

@Module({
  imports: [],
  providers: [PeopleResolver],
})
export class PeopleModule {}
