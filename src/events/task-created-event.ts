import { Subjects } from "..";

export interface TaskCreated {
  subject: Subjects.TaskCreated;
  data: {
    id: string;
        title: string;
        description: string;
        category: string;
        image: string;
        createdBy: string;
        assignedTo: string | undefined;
        status: string;
  };
}
