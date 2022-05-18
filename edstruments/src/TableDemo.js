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
  
// Creating styles
const useStyles = makeStyles({
    root: {
        "& > *": {
            borderBottom: "unset",
        },
    },
    table: {
        minWidth: 650,
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
        setShowConfirm(false);
    };
  
    // Handle the case of delete confirmation 
    // where user click no 
    const handleNo = () => {
        setShowConfirm(false);
    };
  
  return (
    <TableBody>
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
      <Box margin={1}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            {isEdit ? (
              <div>
                <Button onClick={handleAdd}>
                  <AddBoxIcon onClick={handleAdd} />
                  ADD
                </Button>
                {rows.length !== 0 && (
                  <div>
                    {disable ? (
                      <Button disabled align="right" onClick={handleSave}>
                        <DoneIcon />
                        SAVE
                      </Button>
                    ) : (
                      <Button align="right" onClick={handleSave}>
                        <DoneIcon />
                        SAVE
                      </Button>
                    )}
                  </div>
                )}
              </div>
            ) : (
              <div>
                <Button onClick={handleAdd}>
                  <AddBoxIcon onClick={handleAdd} />
                  ADD
                </Button>
                <Button align="right" onClick={handleEdit}>
                  <CreateIcon />
                  EDIT
                </Button>
              </div>
            )}
          </div>
        </div>
        <TableRow align="center"> </TableRow>
  
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
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
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, i) => {
              return (
                <div>
                  <TableRow>
                    {isEdit ? (
                      <div>
                        {/*Information for items that are being edited or added*/}
                        <TableCell padding="none">
                          <input
                            value={row.itemNumber}
                            name="itemNumber"
                            onChange={(e) => handleInputChange(e, i)}
                          />
                        </TableCell>

                        <TableCell padding="none">
                          <input
                            value={row.itemName}
                            name="itemName"
                            onChange={(e) => handleInputChange(e, i)}
                          />
                        </TableCell>

                        <TableCell padding="none">
                          <input
                            value={row.cost}
                            name="cost"
                            onChange={(e) => handleInputChange(e, i)}
                          />
                        </TableCell>

                        <TableCell padding="none">
                          <input
                            value={row.currentValue}
                            name="currentValue"
                            onChange={(e) => handleInputChange(e, i)}
                          />
                        </TableCell>

                        <TableCell padding="none">
                          <input
                            value={row.user}
                            name="user"
                            onChange={(e) => handleInputChange(e, i)}
                          />
                        </TableCell>

                        <TableCell padding="none">
                          <select
                            style={{ width: "100px" }}
                            name="location"
                            value={row.location}
                            onChange={(e) => handleInputChange(e, i)}
                          >
                            <option value=""></option>
                            <option value="Green Library">Green Library</option>
                            <option value="Branner Hall">Branner Hall</option>
                          </select>
                        </TableCell>

                        <TableCell padding="none">
                          <select
                            style={{ width: "100px" }}
                            name="status"
                            value={row.status}
                            onChange={(e) => handleInputChange(e, i)}
                          >
                            <option value=""></option>
                            <option value="Green Library">In Use</option>
                            <option value="Branner Hall">Available</option>
                          </select>
                        </TableCell>

                        <TableCell>
                          <Button className="mr10" onClick={handleConfirm}>
                          <ClearIcon />
                          </Button>
                        </TableCell>
                        
                      </div>

                    ) : (
                      // Displays items in rows that are already in the table
                      <div>
                        <TableCell component="th" scope="row" style={{ width: 100 }}>
                          {row.itemNumber}
                        </TableCell>
                        <TableCell component="th" scope="row" style={{ width: 100 }}>
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
                        <TableCell>
                          <Button className="mr10" onClick={handleConfirm}>
                          <DeleteOutlineIcon />
                          </Button>
                        </TableCell>
                      </div>
                    )}
                    {/* {isEdit ? (
                      <Button className="mr10" onClick={handleConfirm}>
                        <ClearIcon />
                      </Button>
                    ) : (
                      <Button className="mr10" onClick={handleConfirm}>
                        <DeleteOutlineIcon />
                      </Button>
                    )} */}
                    {showConfirm && (
                      <div>
                        <Dialog
                          open={showConfirm}
                          onClose={handleNo}
                          aria-labelledby="alert-dialog-title"
                          aria-describedby="alert-dialog-description"
                        >
                          <DialogTitle id="alert-dialog-title">
                            {"Confirm Delete"}
                          </DialogTitle>
                          <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                              Are you sure to delete
                            </DialogContentText>
                          </DialogContent>
                          <DialogActions>
                            <Button
                              onClick={() => handleRemoveClick(i)}
                              color="primary"
                              autoFocus
                            >
                              Yes
                            </Button>
                            <Button
                              onClick={handleNo}
                              color="primary"
                              autoFocus
                            >
                              No
                            </Button>
                          </DialogActions>
                        </Dialog>
                      </div>
                    )}
                  </TableRow>
                </div>
              );
            })}
          </TableBody>
        </Table>
      </Box>
    </TableBody>
  );
}
  
export default TableDemo;