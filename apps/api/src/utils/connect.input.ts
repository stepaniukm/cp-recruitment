import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ConnectInput {
  @Field()
  id: number;
}
