import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { AuthModule } from "./server/auth/auth.module";
import { ShiftsModule } from "./server/shifts/shifts.module";
import { UsersModule } from "./server/users/users.module";
import { AssignmentsModule } from "./server/assignments/assignments.module";
import { DbModule } from "./server/DB/db.module";


// import { SequelizeModule } from '@nestjs/sequelize';
// import { User } from "./server/users/users.userDB";

@Module({
  imports: [DbModule,AuthModule, ShiftsModule, UsersModule, AssignmentsModule, ConfigModule.forRoot({ isGlobal: true }),

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
