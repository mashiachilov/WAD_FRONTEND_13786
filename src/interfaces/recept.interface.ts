export interface Recept extends ReceptCreate {
    id: number;
}

export interface ReceptCreate {
    name: string;
    description: string;
    dateTime: Date | null,
    status: boolean
}