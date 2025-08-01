import { Injectable } from '@nestjs/common';
import { DbService } from '../DB/DBservice';
import { assignments } from "../assignments/assignmentsDB"

@Injectable()
export class AssignmentsService {
    private AssignmentModel;

    constructor(private dbService: DbService) {
        this.AssignmentModel = dbService.getSequelize().models.assignments as typeof assignments;
    }

    async addAssignments(userID: number, ShiftID: number) {
        this.AssignmentModel.create({ userID, ShiftID });
        return "Assignments craetd"
    }

    async getAssignmentsByUserId(userId: number) {
        return this.AssignmentModel.findAll({ where: { userID: userId } });
    }
}
