import { Body, Controller, Post, Req } from '@nestjs/common';
import { AuthService } from "./auth.service"



@Controller('auth')
export class AuthController {
    constructor(private readonly AuthService: AuthService) { }
    @Post("login")
    login(@Body() Body: any) {
        // console.log('body', Body);
        return this.AuthService.login(Body.username, Body.password)
    }
}
