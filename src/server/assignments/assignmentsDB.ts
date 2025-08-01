import { Injectable } from '@nestjs/common';
import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Injectable()
@Table({ tableName: 'Assignment' })
export class assignments extends Model<assignments> {
  @Column({ type: DataType.INTEGER, allowNull: false })
  userID: string;

  @Column({ type: DataType.INTEGER, allowNull: false })
  ShiftID: string;
}