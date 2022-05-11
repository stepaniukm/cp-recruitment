import { Inject } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { DB, DB_KEY } from 'src/db';
import { AllPeopleInput } from '../people/models/allPeople.input';
import { CreatePersonInput } from '../people/models/createPerson.input';
import { DeletePersonInput } from '../people/models/deletePerson.input';
import { PersonInput } from '../people/models/person.input';
import { Person } from '../people/models/person.model';
import { UpdatePersonInput } from '../people/models/updatePerson.input';

@Resolver(() => Person)
export class PeopleResolver {
  constructor(@Inject(DB_KEY) private db: DB) {}

  @Query(() => [Person])
  async allPeople(
    @Args('allPeopleInput', { nullable: true })
    { page, perPage, search, mass }: AllPeopleInput = { page: 1, perPage: 10 },
  ) {
    return this.db.person.findMany({
      skip: (page - 1) * perPage,
      take: perPage,
      where: { name: { search }, mass },
      include: { starship: true },
    });
  }

  @Query(() => Person)
  async person(@Args('personInput') { id, search }: PersonInput) {
    return this.db.person.findFirst({
      where: { id, name: { search } },
      include: { starship: true },
    });
  }

  @Mutation(() => Person)
  async createPerson(
    @Args('createPersonInput') { name, mass, starshipId }: CreatePersonInput,
  ) {
    return this.db.person.create({
      data: { name, mass, starshipId },
      include: { starship: true },
    });
  }

  @Mutation(() => Person)
  async updatePerson(
    @Args('updatePersonInput')
    { name, mass, starshipId, id }: UpdatePersonInput,
  ) {
    return this.db.person.update({
      data: { name, mass, starshipId },
      where: { id },
      include: { starship: true },
    });
  }

  @Mutation(() => Person)
  async deletePerson(
    @Args('deletePersonInput')
    { id }: DeletePersonInput,
  ) {
    return this.db.person.delete({
      where: { id },
      include: { starship: true },
    });
  }
}
