import { Subjects } from "..";

export interface TaskCreated {
    subject: Subjects.TaskCreated,
    data: {
        id: string;
        category: string;
        createdBy: string;
        assignedTo: string | undefined;
        status: string;
    }
}