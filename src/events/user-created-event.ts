import { Subjects } from "./Subjects";

export interface UserCreatedEvent {
    subject: Subjects.UserCreated,
    data: {
        id: string;
        username: string;
        email: string;
        company: string;
        category: string;
        roles: string[]
    }
}