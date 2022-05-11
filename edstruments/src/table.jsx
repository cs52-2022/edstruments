import React, { useState } from 'react';
import StudentForm from './form';
import jsonData from './data.json';
import './table.css';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

function createData(itemNumber, itemName, cost, currentValue, user, location, status) {
  return { itemNumber, itemName, cost, currentValue, user, location, status };
}

const rows = [
  createData('01234', 'Chromebook', 800, 740, 'R Yuan', '200-203', 'In Use'),
];

export default function ItemTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="item table">
        <TableHead>
          <TableRow>
            <TableCell>Item Number</TableCell>
            <TableCell align="right">Item Name</TableCell>
            <TableCell align="right">Cost ($)</TableCell>
            <TableCell align="right">Current Value ($)</TableCell>
            <TableCell align="right">User</TableCell>
            <TableCell align="right">Location</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.itemNumber}>
              <TableCell component="th" scope="row">
                {row.itemNumber}
              </TableCell>
              <TableCell align="right">{row.itemName}</TableCell>
              <TableCell align="right">{row.cost}</TableCell>
              <TableCell align="right">{row.currentValue}</TableCell>
              <TableCell align="right">{row.user}</TableCell>
              <TableCell align="right">{row.location}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}