import { Field, InputType } from '@nestjs/graphql';
import { ConnectInput } from 'src/utils/connect.input';

@InputType()
export class CreateStarshipInput {
  @Field()
  name: string;

  @Field(() => [ConnectInput])
  crew: ConnectInput[];
}
