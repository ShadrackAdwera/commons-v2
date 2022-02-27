import { Subjects } from "..";

export interface SectionUpdatedEvent {
    subject: Subjects.SectionUpdated,
    data: {
        id: string;
        name: string;
        createdBy: string;
    }
}