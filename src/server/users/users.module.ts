import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
// import { SequelizeModule } from '@nestjs/sequelize';
import { DbModule } from '../DB/db.module';


@Module({
  imports: [DbModule],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule { }
