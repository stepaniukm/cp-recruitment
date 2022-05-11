import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class PaginationBaseInput {
  @Field(() => Int, { nullable: true })
  page = 1;

  @Field(() => Int, { nullable: true })
  perPage = 10;
}
