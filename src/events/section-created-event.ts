import { Subjects } from "./Subjects";

export interface SectionCreatedEvent {
  subject: Subjects.SectionCreated;
  data: {
    id: string;
    title: string;
    createdBy: string;
  };
}
