import { Add } from '@mui/icons-material';
import { Button, Divider, List, ListItem, Paper, Stack, Toolbar, Typography } from '@mui/material';
import { useState } from 'react';
import {  useNavigate, useParams } from 'react-router-dom';

const UserDetail = () => {
  const { id } = useParams();
  return (
    <Paper sx={{margin: 4}}>
      <List>
        <ListItem onClick={() => {}}>
          Username {id}
        </ListItem>
        <ListItem>
        email
        </ListItem>
        <ListItem>
        phone number
        </ListItem>
      </List>
    </Paper>
  )
}

export default UserDetail;