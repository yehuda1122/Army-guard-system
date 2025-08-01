import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AssignmentsService } from './assignments.service';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from "../auth/auth.gruade"

@Controller('assignments')
export class AssignmentsController {
    constructor(private readonly AssignmentsService: AssignmentsService) { }

    @Post("add")
    @UseGuards(AuthGuard('jwt'), new RolesGuard(["admin", 'commander']))
    addUsers(@Body() Body: any) {
        console.log('bodyyy', Body.userID, Body.ShiftID);
        return this.AssignmentsService.addAssignments(Body.userID, Body.ShiftID)
    }
    @Get('my-assignments')
    @UseGuards(AuthGuard('jwt'))
    async getAssignments(@Req() req) {
        const userId = req.user.id; 
        console.log(userId);
        return this.AssignmentsService.getAssignmentsByUserId(userId);
    }

}
