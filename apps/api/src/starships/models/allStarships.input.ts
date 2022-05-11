import { InputType } from '@nestjs/graphql';
import { BaseInput } from 'src/utils/BaseInput';

@InputType()
export class AllStarshipsInput extends BaseInput {}
