import { Module } from '@nestjs/common';
import { ShiftsController } from './shifts.controller';
import { ShiftsService } from './shifts.service';
import { DbModule } from '../DB/db.module';


@Module({
  imports: [DbModule],
  controllers: [ShiftsController],
  providers: [ShiftsService]
})
export class ShiftsModule {}
