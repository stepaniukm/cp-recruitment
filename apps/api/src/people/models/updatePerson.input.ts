import { Field, InputType, Int, PartialType } from '@nestjs/graphql';
import { CreatePersonInput } from './createPerson.input';

@InputType()
export class UpdatePersonInput extends PartialType(CreatePersonInput) {
  @Field(() => Int)
  id: number;
}
