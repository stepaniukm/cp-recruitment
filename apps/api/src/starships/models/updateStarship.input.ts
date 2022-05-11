import { Field, InputType, Int, PartialType } from '@nestjs/graphql';
import { CreateStarshipInput } from './createStarship.input';

@InputType()
export class UpdateStarshipInput extends PartialType(CreateStarshipInput) {
  @Field(() => Int)
  id: number;
}
