import { FactoryProvider } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';

export const DB_KEY = Symbol('DB');

export const dbProvider: FactoryProvider = {
  provide: DB_KEY,
  useFactory: async (configService: ConfigService) => {
    const dbUrl = configService.get<string>('DATABASE_URL');
    const db = new PrismaClient({
      datasources: {
        db: {
          url: dbUrl,
        },
      },
    });

    return db;
  },
  inject: [ConfigService],
};

export type DB = PrismaClient;
