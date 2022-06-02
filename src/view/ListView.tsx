import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Button, Drawer, Card, Modal, Stack, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { generateContract } from "../services/generators/contract";
import { getAsociatedContract } from "../services/person/util";

import { Contract } from "../types/Contract";
import { Person } from "../types/Person";

interface ListViewProps {
  setSelectedContract: (contract: Contract | undefined) => void;
  setSelectedPerson: (person: Person | undefined) => void;
  contracts: Contract[];
  persons: Person[];
}

const ListView = (props: ListViewProps) => {
  const { setSelectedContract, setSelectedPerson, contracts, persons } = props;

  return (
    <TableContainer component={Paper} sx={{ maxHeight: 550, marginTop: '3rem' }}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 'bolder' }}>{contracts.length ? 'Institution' : 'Full Name'}</TableCell>
            <TableCell sx={{ fontWeight: 'bolder' }} align="right">{contracts.length ? 'Client' : 'Email'}</TableCell>
            <TableCell sx={{ fontWeight: 'bolder' }} align="right">{contracts.length ? 'Administrator' : 'Phone'}</TableCell>
            <TableCell sx={{ fontWeight: 'bolder' }}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {[...contracts, ...persons].map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              hover
            >
              {'institution' in row && (
                <>
                  <TableCell component="th" scope="row">{row.institution}</TableCell>
                  <TableCell align="right" onClick={() => setSelectedPerson(row.client)}>{row.client.firstName} {row.client.lastName}</TableCell>
                  <TableCell align="right" onClick={() => setSelectedPerson(row.advisors[0])}>{row.advisors[0].firstName} {row.advisors[0].lastName}</TableCell>
                  <TableCell align="right" ><Button size="small" variant="text" onClick={() => setSelectedContract(row)}>detail</Button></TableCell>
                </>
              )}
              {'firstName' in row && (
                <>
                  <TableCell component="th" scope="row">{row.firstName} {row.lastName}</TableCell>
                  <TableCell align="right" onClick={() => setSelectedContract(getAsociatedContract(contracts, row))}>{row.email}</TableCell>
                  <TableCell align="right" onClick={() => setSelectedContract(getAsociatedContract(contracts, row))}>{row.phone}</TableCell>
                  <TableCell align="right" ><Button size="small" variant="text" onClick={() => setSelectedPerson(row)}>detail</Button></TableCell>
                </>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ListView;