import { BaseInputWithoutPagination } from './../../utils/BaseInput';
import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class PersonInput extends BaseInputWithoutPagination {
  @Field(() => Int, { nullable: true })
  id?: number;
}
