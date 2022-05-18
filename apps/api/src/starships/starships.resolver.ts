import { CreateStarshipInput } from './models/createStarship.input';
import { StarshipInput } from './models/starship.input';
import { Inject, Logger, LoggerService } from '@nestjs/common';
import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { DB_KEY, DB } from 'src/db';
import { AllStarshipsInput } from './models/allStarships.input';
import { Starship } from './models/starship.model';
import { UpdateStarshipInput } from './models/updateStarship.input';
import { DeleteStarshipInput } from './models/deleteStarship.input';

@Resolver(() => Starship)
export class StarshipsResolver {
  constructor(@Inject(DB_KEY) private db: DB) {}

  @Query(() => [Starship])
  async allStarships(
    @Args('allStarshipsInput', { nullable: true })
    { page, perPage, search }: AllStarshipsInput = { page: 1, perPage: 10 },
  ) {
    return await this.db.starship.findMany({
      skip: (page - 1) * perPage,
      take: perPage,
      where: { name: { search } },
      include: { crew: true },
    });
  }

  @Query(() => Starship)
  async starship(@Args('starshipInput') { id, search }: StarshipInput) {
    return await this.db.starship.findFirst({
      where: { id, name: { search } },
      include: { crew: true },
    });
  }

  @Query(() => Starship)
  async randomStarship(@Args('id') id: number) {
    const count = await this.db.starship.count();
    const random = Math.floor(Math.random() * count) + id - id;

    return await this.db.starship.findFirst({
      skip: random,
      take: 1,
      include: { crew: true },
    });
  }

  @Mutation(() => Starship)
  async createStarship(
    @Args('createStarshipInput') { name, crew }: CreateStarshipInput,
  ) {
    const connect = crew.map((person) => ({ id: person.id }));

    return await this.db.starship.create({
      data: { name, crew: { connect } },
      include: { crew: true },
    });
  }

  @Mutation(() => Starship)
  async updateStarship(
    @Args('updateStarshipInput')
    { name, crew, id }: UpdateStarshipInput,
  ) {
    const connect = crew.map((person) => ({ id: person.id }));

    return await this.db.starship.update({
      data: { name, crew: { connect } },
      where: { id },
      include: { crew: true },
    });
  }

  @Mutation(() => Starship)
  async deleteStarship(
    @Args('deleteStarshipInput')
    { id }: DeleteStarshipInput,
  ) {
    return await this.db.starship.delete({
      where: { id },
      include: { crew: true },
    });
  }
}
