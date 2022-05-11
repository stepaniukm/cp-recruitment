import { Field, Int, ObjectType, OmitType } from '@nestjs/graphql';
import { PersonWithoutStarship } from 'src/people/models/person.model';
import { TimeStamps } from 'src/utils/TimeStamps';

@ObjectType()
export class Starship extends TimeStamps {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field(() => [PersonWithoutStarship])
  crew: PersonWithoutStarship[];
}

@ObjectType()
export class StarshipWithoutCrew extends OmitType(Starship, ['crew']) {}
