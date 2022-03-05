import { Subjects } from "./Subjects";

export interface UserCreatedEvent {
    subject: Subjects.UserCreated,
    data: {
        id: string;
        email: string;
        category: string;
    }
}