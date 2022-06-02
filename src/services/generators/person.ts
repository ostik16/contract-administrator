import { Person } from "../../types/Person";

import { uniqueNamesGenerator, names } from 'unique-names-generator';

/**
 * The **generatePerson** function returns a new person object with given parameters.
 * @param contractId id of the contract this person is should be associated with
 * @param isOwner is this person the owner of the contract
 * @param isAdmin is this person the admin of the contract
 * @returns random person
 */
export const generatePerson = (contractId: number, isOwner = false, isAdmin = false): Person => {
    const id = Math.floor(Math.random() * 10000000000);
    const firstName = uniqueNamesGenerator({ dictionaries: [names], style: 'capital', separator: ' ', length: 1, seed: id });
    const lastName = uniqueNamesGenerator({ dictionaries: [names], style: 'capital', separator: ' ', length: 1, seed: id * 1000000 });
    const person: Person = {
        id,
        contractId,
        firstName,
        lastName,
        email: `${firstName.toLocaleLowerCase()}.${lastName.toLocaleLowerCase()}@email.com`,
        phone: `+${Math.floor(Math.random() * 1000000000000).toString()}`,
        PID: id,
        age: Math.floor(Math.random() * 60) + 26,
        admin: isAdmin,
        owner: isOwner,
    }
    return person;
}