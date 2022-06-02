import { BottomNavigation, BottomNavigationAction, Container } from '@mui/material';
import { useEffect, useState } from 'react';

import { generateContract } from './services/generators/contract';
import { Contract } from './types/Contract';
import { Person } from './types/Person';
import ListView from './view/ListView';
import DetailView from './view/DetailView';
import './style/App.css';
import { getAllPersonsFromContract } from './services/person/util';

const App = () => {
  const [contracts, setContracts] = useState<Contract[]>([]);
  const [persons, setPersons] = useState<Person[]>([]);
  const [clients, setClients] = useState<Person[]>([]);
  const [advisors, setAdvisors] = useState<Person[]>([]);
  const [value, setValue] = useState(0);
  const [selectedContract, setSelectedContract] = useState<Contract>();
  const [selectedPerson, setSelectedPerson] = useState<Person>();

  useEffect(() => {
    // Generate contracts with random data
    setContracts(Array(23).fill(0).map(() => generateContract()));
  }, []);

  useEffect(() => {
    // Get all persons from contracts
    if (!contracts.length) return;
    const _persons: Person[] = [];
    contracts.forEach((contract) => {
      _persons.push(...getAllPersonsFromContract(contract));
    });
    setPersons(_persons);
  }, [contracts]);

  useEffect(() => {
    // Get clients and advisors
    if (!persons.length) return;
    const _clients: Person[] = persons.filter((person) => person.owner);
    const _advisors: Person[] = persons.filter((person) => !person.owner);
    setClients(_clients);
    setAdvisors(_advisors);
  }, [persons]);

  return (
    <Container>
      <ListView contracts={value === 0 ? contracts : []} persons={value === 1 ? clients : value === 2 ? advisors : []} setSelectedContract={setSelectedContract} setSelectedPerson={setSelectedPerson} />
      <DetailView contracts={contracts} selectedContract={selectedContract} selectedPerson={selectedPerson} setSelectedContract={setSelectedContract} setSelectedPerson={setSelectedPerson} />
      <BottomNavigation
        showLabels
        value={value}
        onChange={(_, newValue) => {
          setValue(newValue);
        }}
        sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 1 }}
      >
        <BottomNavigationAction label="Contracts" />
        <BottomNavigationAction label="Clients" />
        <BottomNavigationAction label="Advisors" />
      </BottomNavigation>
    </Container>
  );
}

export default App;
