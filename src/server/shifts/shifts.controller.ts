import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ShiftsService } from './shifts.service';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from "../auth/auth.gruade"


@Controller('shifts')
export class ShiftsController {
    constructor(private readonly ShiftsService: ShiftsService) { }
    @Post("add")
    @UseGuards(AuthGuard('jwt'), new RolesGuard(["admin", 'commander']))
    addShifts(@Body() Body: any) {
        return this.ShiftsService.addUser(Body.startTime, Body.endTime, Body.location)
    }
}