import { Module } from '@nestjs/common';
import { StarshipsResolver } from './starships.resolver';

@Module({
  imports: [],
  providers: [StarshipsResolver],
})
export class StarshipsModule {}
