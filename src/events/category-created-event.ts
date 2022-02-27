import { Subjects } from "./Subjects";

export interface CategoryCreatedEvent {
    subject: Subjects.CategoryCreated,
    data: {
        id: string; 
        title: string;
        description: string;
        priority: string;
        version: number
    }
}