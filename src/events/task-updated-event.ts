import { Subjects } from "..";

export interface TaskUpdated {
    subject: Subjects.TaskUpdated,
    data: {
        id: string;
        title: string;
        description: string;
        category: string;
        image: string;
        createdBy: string;
        assignedTo: string | undefined;
        status: string;
    }
}