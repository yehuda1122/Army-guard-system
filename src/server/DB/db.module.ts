import { Module } from '@nestjs/common';
import { DbService } from './DBservice';

@Module({
  providers: [DbService],
  exports: [DbService]
})
export class DbModule {}
