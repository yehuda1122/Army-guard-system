import { Module } from '@nestjs/common';
import { AssignmentsController } from './assignments.controller';
import { AssignmentsService } from './assignments.service';
import { DbModule } from '../DB/db.module';

@Module({
  imports: [DbModule],
  controllers: [AssignmentsController],
  providers: [AssignmentsService]
})
export class AssignmentsModule { }
