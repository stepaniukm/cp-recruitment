import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class DeletePersonInput {
  @Field(() => Int)
  id: number;
}
