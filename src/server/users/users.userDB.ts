import { Injectable } from '@nestjs/common';
import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Injectable()
@Table({ tableName: 'users' })
export class User extends Model<User> {
  @Column({ type: DataType.STRING, allowNull: false })
  username: string;

  @Column({ type: DataType.STRING, allowNull: false })
  email: string;

  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  @Column({ type: DataType.STRING, defaultValue: 'soldier' })
  role: string;
}
