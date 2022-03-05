import { Subjects } from "./Subjects";

export interface UserUpdatedEvent {
    subject: Subjects.UserUpdated,
    data: {
        id: string;
        email: string;
        category: string;
    }
}