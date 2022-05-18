import { Person, PrismaClient } from '@prisma/client';
import faker from '@faker-js/faker';

const GENERATED_PEOPLE = 100;
const STARSHIP_GROUPS = 10;

(async () => {
  try {
    const client = new PrismaClient({
      datasources: {
        db: {
          url: process.env.DATABASE_URL,
        },
      },
    });

    const randomCreatePeopleEntries = Array.from(
      { length: GENERATED_PEOPLE },
      () => ({
        name: faker.name.firstName(),
        mass: faker.datatype.number({ min: 50, max: 250, precision: 1 }),
      }),
    );

    const people = await client.$transaction(
      randomCreatePeopleEntries.map((data) => client.person.create({ data })),
    );

    const randomCreateStarshipsEntries = Array.from(
      { length: 10 },
      (_, starshipIndex) => {
        const randomCapacity = faker.datatype.number({
          min: 1,
          max: 10,
          precision: 1,
        });

        const crew = Array.from(
          { length: randomCapacity },
          (_, personIndex) => {
            const computedIndex = 10 * starshipIndex + personIndex;
            return people[computedIndex] as Person;
          },
        );

        return {
          name: `${faker.animal.horse}-${faker.vehicle.model()}`,
          crew: {
            connect: crew.map(({ id }) => ({ id })),
          },
        };
      },
    );

    const starships = await client.$transaction(
      randomCreateStarshipsEntries.map((data) =>
        client.starship.create({ data, include: { crew: true } }),
      ),
    );
  } catch (e) {
    console.log('There was an error during seed');
  }
})();
