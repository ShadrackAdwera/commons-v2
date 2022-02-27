import { Subjects } from "./Subjects";

export interface SectionCreatedEvent {
    subject: Subjects.SectionCreated,
    data: {
        id: number; 
        title: string;
    }
}