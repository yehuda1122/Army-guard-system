import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { User } from '../users/users.userDB';
import { shifts } from '../shifts/shiftsDB';
import {assignments} from "../assignments/assignmentsDB"


@Injectable()
export class DbService implements OnModuleInit, OnModuleDestroy {
    private sequelize: Sequelize;
    
    constructor() {
    this.sequelize = new Sequelize(process.env.POSTGRES_CONNECTION || '', {
      dialect: 'postgres',
      logging: false,
      dialectOptions: {
        ssl: { require: true, rejectUnauthorized: false },
      },
      pool: {
        max: 20,
        min: 0,
        acquire: 30000,
        idle: 10000,
      },
    });

    this.sequelize.addModels([User,shifts,assignments]);
  }

  async onModuleInit() {
    try {
      await this.sequelize.authenticate();
      console.log('Database connected successfully');
    } catch (error) {
      console.error('Database connection failed:', error);
      throw error;
    }
  }

  async onModuleDestroy() {
    await this.sequelize.close();
  }

  getSequelize(): Sequelize {
    return this.sequelize;
  }
}
