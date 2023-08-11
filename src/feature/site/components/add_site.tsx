import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import React, { useState } from 'react'
import { useCreateSiteMutation } from '../api/site_endpoints';

interface AddSiteDialogProps {
  open: boolean;
  onClose: () => void;
}

const AddSite = (props: AddSiteDialogProps) => {
  const [name, setName] = useState('');
  const [owner, setOwner] = useState('');
  const [longitude, setLongitude] = useState('');
  const [latitude, setLatitude] = useState('');
  const [createSite] = useCreateSiteMutation();
  const handleAddSite = async () => {
    try {
        await createSite({
            body: {
                name,
                owner,
                longitude,
                latitude,
            }
        });
        props.onClose();
    } catch(err) {
        console.log(err)
    }
  }
  return (
  <Dialog open={props.open} onClose={props.onClose}>
      <DialogTitle>Add Site </DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Name"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Owner"
          fullWidth
          value={owner}
          onChange={(e) => setOwner(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Longitude"
          fullWidth
          value={longitude}
          onChange={(e) => setLongitude(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Latitude"
          fullWidth
          value={latitude}
          onChange={(e) => setLatitude(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleAddSite} color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default AddSite