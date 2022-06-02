import { Button, Card, Modal, Stack, Container, Typography, Link } from "@mui/material";
import { getAsociatedContract } from "../services/person/util";
import { Contract } from "../types/Contract";
import { Person } from "../types/Person";

interface DetailViewProps {
    selectedContract: Contract | undefined;
    selectedPerson: Person | undefined;
    setSelectedContract: (contract: Contract | undefined) => void;
    setSelectedPerson: (person: Person | undefined) => void;
    contracts: Contract[];
}

const DetailView = (props: DetailViewProps) => {
    const { selectedContract, selectedPerson, setSelectedContract, setSelectedPerson, contracts } = props;

    const onClose = () => {
        // triggered on Esc key press
        setSelectedContract(undefined);
        setSelectedPerson(undefined);
    }

    return (
        <Modal open={!!(selectedContract || selectedPerson)} onClose={onClose}>
            <Stack direction='row' alignItems='center' justifyContent='center' sx={{ height: '100%' }}>
                <Card sx={{ width: selectedContract ? '500px' : 0, margin: '1rem', transition: 'width .3s ease-in-out' }}>
                    {selectedContract && (
                        <Container sx={{ padding: '1rem', width: 500 }}>
                            <h1>Contract Detail</h1>
                            <p><Typography variant="body1" sx={{ fontWeight: 'bold' }}>Institution:</Typography> {selectedContract.institution}</p>
                            <p><Typography variant="body1" sx={{ fontWeight: 'bold' }}>Client:</Typography> <Button onClick={() => setSelectedPerson(selectedContract.client)}>{selectedContract.client.firstName} {selectedContract.client.lastName}</Button></p>
                            <p><Typography variant="body1" sx={{ fontWeight: 'bold' }}>Administrator:</Typography> <Button onClick={() => setSelectedPerson(selectedContract.advisors[0])}>{selectedContract.advisors[0].firstName} {selectedContract.advisors[0].lastName}</Button></p>
                            <p>
                                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Advisors:</Typography>
                                {selectedContract.advisors.map((advisor, excludeFirst) => (
                                    <>
                                        {excludeFirst ? (<Button onClick={() => setSelectedPerson(advisor)}>{advisor.firstName} {advisor.lastName}</Button>) : undefined}
                                    </>
                                ))}
                            </p>
                            <p><Typography variant="body1" sx={{ fontWeight: 'bold' }}>Date Created:</Typography> {selectedContract.dateCreated}</p>
                            <p><Typography variant="body1" sx={{ fontWeight: 'bold' }}>Valid From:</Typography> {selectedContract.dateValidFrom}</p>
                            <p><Typography variant="body1" sx={{ fontWeight: 'bold' }}>Valid To:</Typography> {selectedContract.dateValidTo}</p>
                            <Button onClick={() => setSelectedContract(undefined)} variant="contained">Close contract detail</Button>
                        </Container>
                    )}
                </Card>
                <Card sx={{ width: selectedPerson ? '500px' : 0, margin: '1rem', transition: 'width .3s ease-in-out' }}>
                    {selectedPerson && (
                        <Container sx={{ padding: '1rem', width: 500 }}>
                            <h1>Person Detail</h1>
                            <p><Typography variant="body1" sx={{ fontWeight: 'bold' }}>Full Name:</Typography> {selectedPerson.firstName} {selectedPerson.lastName}</p>
                            <p><Typography variant="body1" sx={{ fontWeight: 'bold' }}>Email:</Typography> <Link href={`mailto:${selectedPerson.email}`}>{selectedPerson.email}</Link></p>
                            <p><Typography variant="body1" sx={{ fontWeight: 'bold' }}>Phone:</Typography> <Link href={`tel:${selectedPerson.phone}`}>{selectedPerson.phone}</Link></p>
                            <p><Typography variant="body1" sx={{ fontWeight: 'bold' }}>Age:</Typography> {selectedPerson.age}</p>
                            <p>
                                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                                    Contract:
                                </Typography>
                                {selectedPerson.admin && 'Admin of '}
                                {selectedPerson.owner && 'Owner of '}

                                <Button onClick={() => setSelectedContract(getAsociatedContract(contracts, selectedPerson))}>{getAsociatedContract(contracts, selectedPerson)?.institution}</Button>
                            </p>
                            <Button onClick={() => setSelectedPerson(undefined)} variant="contained">Close person detail</Button>
                        </Container>
                    )}
                </Card>
            </Stack>
        </Modal>
    );
}

export default DetailView;