import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreatePersonInput {
  @Field()
  name: string;

  @Field(() => Int)
  mass: number;

  @Field(() => Int, { nullable: true })
  starshipId?: number;
}
