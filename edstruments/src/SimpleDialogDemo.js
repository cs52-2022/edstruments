import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
// import PersonIcon from '@mui/icons-material/Person';
// import AddIcon from '@mui/icons-material/Add';
import DoneIcon from '@mui/icons-material/Done';
import Typography from '@mui/material/Typography';
import AddBoxIcon from "@material-ui/icons/AddBox";
import { blue } from '@mui/material/colors';

const labels = ['ID:', 'Name:', 'Cost:', 'Current Value:', 'User:', 'Location:', 'Status:'];

function SimpleDialog(props) {
  const { onClose, selectedValue, dialogOpen } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={dialogOpen}>
      <DialogTitle>Item Details</DialogTitle>
      <List sx={{ pt: 0 }}>
        {labels.map((label) => (
          <ListItemText primary={label}/>
        ))}

        <ListItem autoFocus button onClick={() => handleListItemClick('addAccount')}>
          <ListItemAvatar>
            <Avatar sx={{ bgcolor: "#1787E0", color: "white" }}>
              <DoneIcon />
            </Avatar>
          </ListItemAvatar>
        </ListItem>
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  dialogOpen: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo( props ) {
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(labels[1]);

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleClose = (value) => {
    setDialogOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleDialogOpen}>
        <p class="body-text">Add Item with Dialog</p>
      </Button>
      <SimpleDialog
        selectedValue={selectedValue}
        dialogOpen={dialogOpen}
        onClose={handleClose}
      />
    </div>
  );
}
