import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { PeopleResolver } from './people.resolver';

@Module({
  imports: [ConfigModule],
  providers: [PeopleResolver],
})
export class PeopleModule {}
