import React, { useState } from "react";
import CreateIcon from "@material-ui/icons/Create";
import {
    Box, Button, Snackbar, Table,
    TableBody, TableCell, TableHead, TableRow
} from "@material-ui/core";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import AddBoxIcon from "@material-ui/icons/AddBox";
import DoneIcon from "@material-ui/icons/Done";
import ClearIcon from "@material-ui/icons/Clear";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import SimpleDialogDemo from './SimpleDialogDemo';

// Creating styles
const useStyles = makeStyles({
    root: {
        "& > *": {
            borderBottom: "unset",
        },
    },
    table: {
        minWidth: 650,
        border: '1px solid #D5D8EB',
        borderRadius: '4px', // **TODO: Fix this so the table box has rounded corners**
        // margin: '4px', (not necessary, but borrow this code if anything else needs space around it)
    },
    snackbar: {
        bottom: "104px",
    },
});

function TableDemo() {
    // Creating style object
    const classes = useStyles();
  
    // Defining a state named rows
    // which we can update by calling on setRows function
    const [rows, setRows] = useState([
        { id: 1, itemNumber: "",
        itemName: "", cost: "",
        currentValue: "", user: "",
        location: "", status: ""
      },
    ]);
  
    // Initial states
    const [open, setOpen] = React.useState(false);
    const [isEdit, setEdit] = React.useState(false);
    const [disable, setDisable] = React.useState(true);
    const [showConfirm, setShowConfirm] = React.useState(false);

    const [isPopUp, setIsPopUp] = React.useState(false); // Handles whether the item info popup appears (when adding/editing an item)
    // - Richard wrote this ask me if you need help

    // Function For closing the alert snackbar
    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setOpen(false);
    };
  
    // Function For adding new row object
    const handleAdd = () => {
        setRows([
            ...rows,
            {
                id: rows.length + 1, itemNumber: "",
                itemName: "", cost: "",
                currentValue: "", user: "",
                location: "", status: ""
            },
        ]);
        setEdit(true);
    };
  
    // Function to handle edit
    const handleEdit = (i) => {
        // If edit mode is true setEdit will 
        // set it to false and vice versa
        setEdit(!isEdit);
    };
  
    // Function to handle save
    const handleSave = () => {
        setEdit(!isEdit);
        setRows(rows);
        console.log("saved : ", rows);
        setDisable(true);
        setOpen(true);
    };
  
    // The handleInputChange handler can be set up to handle
    // many different inputs in the form, listen for changes 
    // to input elements and record their values in state
    const handleInputChange = (e, index) => {
        setDisable(false);
        const { name, value } = e.target;
        const list = [...rows];
        list[index][name] = value;
        setRows(list);
    };
  
    // Showing delete confirmation to users
    const handleConfirm = () => {
        setShowConfirm(true);
    };
  
    // Handle the case of delete confirmation where 
    // user click yes delete a specific row of id:i
    const handleRemoveClick = (i) => {
        const list = [...rows];
        list.splice(i, 1);
        setRows(list);
        setShowConfirm(false); // Richard: I added this so deletions also show a confirmation snackbar
        setOpen(true);
    };
  
    // Handle the case of delete confirmation 
    // where user click no 
    const handleNo = () => {
        setShowConfirm(false);
    };


    // When a user clicks the eye icon next to
    // an item, this function will run and show
    // a pop-up with the item's details.
    const showDetails = (i) => {

    }
    // - Richard wrote this ask me if you need help

  
  return ( // Return for the entire table
    <TableBody class="table-styling">
      <p class="catalog">CATALOG</p>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        className={classes.snackbar}
      >
        <Alert onClose={handleClose} severity="success">
          Catalog updated successfully!
        </Alert>
      </Snackbar>
      
      <Box>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
                <Button style={{
                  borderRadius: 4,
                  backgroundColor: "#1787E0",
                }}
                variant="contained" onClick={handleAdd}>
                  <p class="body-text">Add Item</p>
                </Button>
                {/* <Button align="right" onClick={handleEdit}>
                  <CreateIcon />
                  EDIT
                </Button> */}
          </div>
        </div>
        <TableRow align="center"> </TableRow>
  
        {/* Beginning of item table */}
        <Table
          className={classes.table}
          size="small"
          aria-label="asset table"
        >
          <TableHead>
            <TableRow>
              <TableCell>Item Number</TableCell>
              <TableCell>Item Name</TableCell>
              <TableCell>Cost ($)</TableCell>
              <TableCell>Current Value ($)</TableCell>
              <TableCell>User</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Status</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, i) => {
              return (
                <TableRow>
                  <TableCell component="th" scope="row" align="center">
                    {row.itemNumber}
                  </TableCell>
                  <TableCell component="th" scope="row" align="center">
                    {row.itemName}
                  </TableCell>
                  <TableCell component="th" scope="row" align="center">
                    {row.cost}
                  </TableCell>
                  <TableCell component="th" scope="row" align="center">
                    {row.currentValue}
                  </TableCell>
                  <TableCell component="th" scope="row" align="center">
                    {row.user}
                  </TableCell>
                  <TableCell component="th" scope="row" align="center">
                    {row.location}
                  </TableCell>
                  <TableCell component="th" scope="row" align="center">
                    {row.status}
                  </TableCell>
                  <TableCell> {/* Delete button */}
                    <Button className="mr10" onClick={handleConfirm}>
                    <DeleteOutlineIcon />
                    </Button>
                  </TableCell>
                  <TableCell> {/* View item details button */}
                    <Button className="mr10"> {/* TODO: onClick, pop up the dialog from SimpleDialogDemo.js */}
                    <VisibilityIcon />
                    </Button>
                  </TableCell>
                </TableRow>
              ); /* End table row return */
            })} {/* End rows.map() */}
          </TableBody>
        </Table>
      </Box>
    </TableBody>
  ); /* End of overall return */
}
  
export default TableDemo;