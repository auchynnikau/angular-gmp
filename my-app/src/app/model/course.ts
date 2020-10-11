export interface ICourse {
    id: string;
    title: string;
    creationDate: Date;
    duration: string;
    description: string;
}

export class Course implements ICourse {
    id: string;
    title: string;
    creationDate: Date;
    duration: string;
    description: string;
}
