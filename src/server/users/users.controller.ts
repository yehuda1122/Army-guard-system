import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { UsersService } from "./users.service";
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from "../auth/auth.gruade"

@Controller('users')
export class UsersController {
    constructor(private readonly UsersService: UsersService) { }

    @Post("add")
        @UseGuards(AuthGuard('jwt'), new RolesGuard(["admin",'commander']))
    addUsers(@Body() Body: any) {
        // console.log('bodyyy',Body);
        return this.UsersService.addUser(Body.username, Body.email, Body.password, Body.role)
    }
}
 