import { PeopleModule } from './people/people.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Global, Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'node:path';
import { dbProvider, DB_KEY } from './db';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { StarshipsModule } from './starships/starships.module';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        DATABASE_URL: Joi.string().required(),
        NODE_ENV: Joi.string()
          .valid('development', 'production', 'test', 'provision')
          .default('development'),
        PORT: Joi.number().default(8080),
      }),
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    PeopleModule,
    StarshipsModule,
  ],
  controllers: [],
  providers: [dbProvider],
  exports: [DB_KEY],
})
export class AppModule {}
