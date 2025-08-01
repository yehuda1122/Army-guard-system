import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from "../users/users.service";
import * as bcrypt from 'bcrypt';



@Injectable()
export class AuthService {
    constructor(

        private readonly UsersService: UsersService,
        private readonly JwtService: JwtService,

    ) {}
    async login(username: string, password: string) {
        // console.log('username',username);

        const user = await this.UsersService.findByUsername(username);
        // console.log('user', user.password);

        if (!user) {
            return "user not found"
        }
        const checkPass = await bcrypt.compare(password, user.password)
        if (!checkPass) {
            return "Not authorized"
        }
        const token = this.JwtService.sign({id: user.id, username: user.username, role: user.role, })
        console.log('token',token);
        return token 
    }
}

