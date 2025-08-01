import { Injectable } from '@nestjs/common';
// import { Inject } from '@nestjs/common';
import { DbService } from '../DB/DBservice';
import { User } from './users.userDB';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  private userModel;

  constructor(private dbService: DbService) {
    this.userModel = dbService.getSequelize().models.User as typeof User;
  }

  async addUser(username: string, email: string, password: string, role: string) {
    const hash = await bcrypt.hash(password, 10);
    return this.userModel.create({ username, email, password: hash, role });
  }

  async findByUsername(username: string) {
    return this.userModel.findOne({ where: { username } });
  }
}
