import { InputType, Field } from '@nestjs/graphql';
import { PaginationBaseInput } from './PaginationBase';

@InputType()
export class BaseInput extends PaginationBaseInput {
  @Field({ nullable: true })
  search?: string;
}

@InputType()
export class BaseInputWithoutPagination {
  @Field({ nullable: true })
  search?: string;
}
