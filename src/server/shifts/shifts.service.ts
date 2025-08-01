import { Injectable } from '@nestjs/common';
import { shifts } from '../shifts/shiftsDB';
import { DbService } from '../DB/DBservice';


@Injectable()
export class ShiftsService {
    private userModel;

    constructor(private dbService: DbService) {
        this.userModel = dbService.getSequelize().models.shifts as typeof shifts;
    }

    async addUser(startTime: Date, endTime: Date, location: string) {
        this.userModel.create({ startTime, endTime, location });
        return "sfifts craetd"
    }

    async getUser(){
        return this.userModel.findAll()
    }
}


