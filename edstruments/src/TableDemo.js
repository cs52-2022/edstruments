import React, { useState } from "react";
import CreateIcon from "@material-ui/icons/Create";
import {
    Box, Button, Snackbar, Table,
    TableBody, TableCell, TableHead, TableRow
} from "@material-ui/core";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import AddBoxIcon from "@material-ui/icons/AddBox";
import DoneIcon from "@material-ui/icons/Done";
import CloseIcon from '@mui/icons-material/Close';
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

import PropTypes from 'prop-types';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

import Avatar from '@mui/material/Avatar';

import TextField from '@mui/material/TextField';

/*
Map statement that I deleted earlier.

{rows.map((row, i) => {

})}
*/


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
        // margin: '4px', (this line is not necessary here, but borrow it if anything else in the file needs space around it)
    },
    snackbar: {
        bottom: "104px",
    },
});

function TableDemo() {  

  /* Begin DIALOG code */

  // Dialog initial states
  const [itemID, setItemID] = React.useState("");
  const [itemName, setItemName] = React.useState("");
  const [cost, setCost] = React.useState("");
  const [currentValue, setCurrentValue] = React.useState("");
  const [user, setUser] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [status, setStatus] = React.useState("");

  const labels = ['ID:', 'Name:', 'Cost:', 'Current Value:', 'User:', 'Location:', 'Status:'];
  const states = [itemID, itemName, cost, currentValue, user, location, status];
  const setters = [setItemID, setItemName, setCost, setCurrentValue, setUser, setLocation, setStatus];

  const handleIDChange = (e) => {
    setItemID(e.target.itemID);
    console.log(e.target.itemID);
  }
  const handleNameChange = (e) => {
    setItemName(e.target.itemName);
  }
  const handleCostChange = (e) => {
    setCost(e.target.cost);
  }
  const handleValueChange = (e) => {
    setCurrentValue(e.target.currentValue);
  }
  const handleUserChange = (e) => {
    setUser(e.target.value);
  }
  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  }
  const handleStatusChange = (e) => {
    setStatus(e.target.value);
    console.log(e);
  }

  const changers = [handleIDChange, handleNameChange, handleCostChange, handleValueChange, handleUserChange, handleLocationChange, handleStatusChange];


  function AddDialog(props) {
    const { handleDialogClose, dialogOpen } = props;

    const [val, setVal] = React.useState("");

    const handleValChange = e => {
      console.log(e.target.value);
      setVal(e.target.value);
      rows[rows.length - 1].itemID = val;
    }

    return (
      <Dialog onClose={handleDialogClose} open={dialogOpen}>
        <DialogTitle>Item Details</DialogTitle>
        <List sx={{ pt: 0 }}>
          {/* Deleted map statement */}
            <ListItem>
              <TextField
                value={val}
                onChange={handleValChange}
                id="outlined-password-input"
                label="type here"
              />
            </ListItem>
          
          <ListItem autoFocus button onClick={handleDialogSave}>
          <ListItemAvatar>
            <Avatar sx={{ bgcolor: "#1787E0", color: "white" }}>
              <DoneIcon />
            </Avatar>
          </ListItemAvatar>
        </ListItem>
        <ListItem autoFocus button onClick={handleDialogClose}>
          <ListItemAvatar>
            <Avatar sx={{ bgcolor: "#F50000", color: "white" }}>
              <CloseIcon />
            </Avatar>
          </ListItemAvatar>
        </ListItem>
        </List>
      </Dialog>
    );
  }

  AddDialog.propTypes = {
    handleDialogClose: PropTypes.func.isRequired,
    dialogOpen: PropTypes.bool.isRequired,
  };

  const [dialogOpen, setDialogOpen] = React.useState(false);

  const handleDialogOpen = () => {
    handleAdd();
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleDialogSave = () => {
    setRows(rows);
    setDialogOpen(false);
  }

  /* End DIALOG code */



    /* Begin TABLE code */

    // Creating style object
    const classes = useStyles();
  
    // Defining a state named rows
    // which we can update by calling on setRows function
    const [rows, setRows] = useState([
        { id: 1, itemID: "",
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
          id: rows.length + 1, itemID: "",
          itemName: "", cost: "",
          currentValue: "", user: "",
          location: "", status: ""
        },
      ]);
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
          {/* <div> Could probably delete this */}
                <Button style={{
                  borderRadius: 4,
                  backgroundColor: "#1787E0",
                }}
                variant="contained" onClick={handleDialogOpen}>
                  <p class="body-text">Add Item</p>
                </Button>
                <AddDialog
                  dialogOpen={dialogOpen}
                  handleDialogClose={handleDialogClose}
                />
                {/* <Button align="right" onClick={handleEdit}>
                  <CreateIcon />
                  EDIT
                </Button> */}
          {/* </div> */}
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
              <TableCell>Item ID</TableCell>
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
                    {row.itemID}
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
                    <Button className="mr10"> {/* TODO: onClick, pop up a dialog with pre-populated data */}
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