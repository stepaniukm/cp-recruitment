import { TimeStamps } from 'src/utils/TimeStamps';
import { Field, Int, ObjectType, OmitType } from '@nestjs/graphql';
import { StarshipWithoutCrew } from 'src/starships/models/starship.model';
@ObjectType()
export class Person extends TimeStamps {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field(() => Int)
  mass: number;

  @Field(() => Int, { nullable: true })
  starshipId?: number;

  @Field(() => StarshipWithoutCrew, { nullable: true })
  starship?: StarshipWithoutCrew;
}

@ObjectType()
export class PersonWithoutStarship extends OmitType(Person, ['starship']) {}
