import { useEffect, useState } from 'react'
import { Button, TextField, List, ListItem, Toolbar, Typography, InputAdornment, Stack, Paper, Divider, CircularProgress, Box } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { Add, Search } from '@mui/icons-material';
import AddUser from '../component/add_user';
import { useGetAccountChildrenByIdQuery } from '../api/user.api';

const UsersPage = () => {
    const [addUser, setAddUser] = useState<boolean>(false);
    const navigate = useNavigate();
    const { data, isLoading } = useGetAccountChildrenByIdQuery({
    });
  return (
    <Paper sx={{margin: 4}}>
        <Toolbar sx={{display: 'flex', justifyContent: 'space-between', padding: 2}}>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Users
          </Typography>
            <Stack direction="row" spacing={2}>
          <TextField  
            id="search" 
            label="Search User" 
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
          
          <Button startIcon={<Add />} variant="contained" onClick={() => setAddUser(true)}>Add User</Button>
            </Stack>
        </Toolbar>
        <Divider />
        {isLoading ? <Box display="flex" alignItems="center" justifyContent="center">
<CircularProgress />
            </Box> : 
      <List>
        {/* Replace this with your list of sites */}
        {data?.map((user: any) => (
        <ListItem onClick={() => navigate(`./${user.id}`)}>
          {user.fullName}
        </ListItem>)
        )}
      </List>}
      {addUser && <AddUser open={addUser} onClose={() => setAddUser(false)}/>}
    </Paper>
  )
}

export default UsersPage