import { Contract } from "../../types/Contract";
import { Person } from "../../types/Person";

/**
 * The **getAsociatedContract** function returns the contract associated with the person.
 * @param contracts contracts to look in
 * @param person person to find
 * @returns The given person's contract or undefined if not found
 */
export const getAsociatedContract = (contracts: Contract[], person: Person): Contract | undefined => {
    return (contracts.find((contract) => contract.advisors.some(advisor => advisor.id === person.id)) ?? contracts.find((contract) => contract.client.id === person.id))
}

/**
 * The **getAllPersonsFromContract** function returns all persons associated with the contract.
 * @param contract contract to get people from
 * @returns Array of persons associated with the given contract
 */
export const getAllPersonsFromContract = (contract: Contract): Person[] => {
    return [contract.client, ...contract.advisors];
}