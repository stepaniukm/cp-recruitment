import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class DeleteStarshipInput {
  @Field(() => Int)
  id: number;
}
