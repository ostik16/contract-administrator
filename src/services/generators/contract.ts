import { generatePerson } from "./person";

import { Contract } from "../../types/Contract";
import { Institution } from "../../enum/Institution";

/**
 * The **generateContract** function returns a new contract object with given parameters.
 * Also generates a random person for each role.
 * @returns random contract
 */
export const generateContract = (): Contract => {
    const id = Math.floor(Math.random() * 10000000000);
    const institutions = Object.values(Institution);
    const institution = institutions[Math.floor(Math.random() * institutions.length)];
    const advisors = Array(Math.floor(Math.random() * 5) + 1).fill(0).map(() => generatePerson(id));
    advisors[0].admin = true;
    const time =  new Date().getTime();
    const dateCreated = new Date(time).toISOString();
    const dateValidFrom = new Date(time + Math.floor(Math.random()*100000)).toUTCString();
    const dateValidTo = new Date(time + Math.floor(Math.random()*100000000000)).toUTCString();
    const contract: Contract = {
        id,
        institution,
        client: generatePerson(id, true),
        advisors,
        dateCreated,
        dateValidFrom,
        dateValidTo,
    }
    return contract;
}