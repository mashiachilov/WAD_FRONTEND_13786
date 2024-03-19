import { Recept } from "./recept.interface";


export interface Visitor extends VisitorCreate {
    id: number;
    recept: Recept | null;
}


export interface VisitorCreate {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    arrivalDate: Date | string;
    notes: string | null;
    receptId: number | null;
}