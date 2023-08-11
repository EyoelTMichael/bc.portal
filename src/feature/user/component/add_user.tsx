import { Avatar, Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Stack, TextField } from '@mui/material';
import { useState } from 'react'

interface AddUserDialogProps {
  open: boolean;
  onClose: () => void;
}
const AddUser = (props: AddUserDialogProps) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [roleId, setRoleId] = useState('');
  const handleRoleChange = (event: SelectChangeEvent) => {
    setRoleId(event.target.value as string);
  };
  return (
  <Dialog open={props.open} onClose={props.onClose}>
      <DialogTitle>Add User </DialogTitle>
      <DialogContent>
        <Box display="flex" alignItems="center" justifyContent="center" marginY={2}>
            <Avatar sx={{width: 100, height: 100}} />
        </Box>
        <Stack spacing={2}>
        <Stack direction='row'  flex={1} spacing={2}>
        <TextField
          autoFocus
          margin="dense"
          label="Full Name"
          fullWidth
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <TextField
          margin="dense"
          label="User Name"
          fullWidth
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        </Stack>
        <Stack direction='row'  flex={1}  spacing={2}>
        <TextField
          margin="dense"
          label="Phone Number"
          fullWidth
          type="number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Email"
          fullWidth
          value={email}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        </Stack>
        <Stack direction='row'  flex={1} spacing={2}>
        <TextField
          margin="dense"
          label="Password"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Repeat Password"
          fullWidth
          value={rePassword}
          onChange={(e) => setRePassword(e.target.value)}
        />
        </Stack>
        <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Assign Role</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={roleId}
    label="Assign Role"
    onChange={handleRoleChange}
  >
    <MenuItem value={10}>Administrator</MenuItem>
    <MenuItem value={20}>Site Engineer</MenuItem>
    <MenuItem value={30}>Site Manager</MenuItem>
  </Select>
</FormControl>
        </Stack>

      </DialogContent>
      <DialogActions>
        <Button onClick={props.onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={() => {}} color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default AddUser