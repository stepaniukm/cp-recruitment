import { Field, InputType } from '@nestjs/graphql';
import { BaseInput } from 'src/utils/BaseInput';

@InputType()
export class AllPeopleInput extends BaseInput {
  @Field({ nullable: true })
  mass?: number;
}
