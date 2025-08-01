import { Injectable } from '@nestjs/common';
import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Injectable()
@Table({ tableName: 'Shift' })
export class shifts extends Model<shifts> {
  @Column({ type: DataType.DATE, allowNull: false })
  startTime: string;

  @Column({ type: DataType.DATE, allowNull: false })
  endTime: string;

  @Column({ type: DataType.STRING, allowNull: false })
  location: string;

}
