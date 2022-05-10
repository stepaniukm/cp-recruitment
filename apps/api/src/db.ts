import { FactoryProvider } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';

export const DB_KEY = Symbol('DB');

export const dbProvider: FactoryProvider = {
  provide: DB_KEY,
  useFactory: async () => {
    const db = new PrismaClient();

    return db;
  },
  inject: [ConfigService],
};

export type DB = PrismaClient;
