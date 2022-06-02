import { Institution } from "../enum/Institution";
import { Person } from "./Person";

export interface Contract {
    id: number;
    institution: Institution;
    client: Person;
    advisors: Person[];
    dateCreated: string;
    dateValidFrom: string;
    dateValidTo: string;
}
