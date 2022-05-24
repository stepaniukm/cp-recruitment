import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class TimeStamps {
  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
