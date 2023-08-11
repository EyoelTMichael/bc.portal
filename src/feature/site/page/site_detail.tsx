import { Add } from '@mui/icons-material';
import { Button, Divider, List, ListItem, Paper, Stack, Toolbar, Typography } from '@mui/material';
import { useState } from 'react';
import {  useNavigate, useParams } from 'react-router-dom';
import AssignSiteForm from '../components/assign_site';

const SiteDetail = () => {
  const { id } = useParams();
    const [assignSite, setAssignSite] = useState<boolean>(false);
    const navigate = useNavigate();

  return (
    <Paper sx={{margin: 4}}>
        <Toolbar sx={{display: 'flex', justifyContent: 'space-between', padding: 2}}>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Sites {id}
          </Typography>
            <Stack direction="row" spacing={2}>
          <Button startIcon={<Add />} variant="contained" onClick={() => setAssignSite(true)}>Assign Site</Button>
            </Stack>
        </Toolbar>
        <Divider />
      <List>
        {/* Replace this with your list of sites */}
        <ListItem onClick={() => {}}>
          user 1
        </ListItem>
        <ListItem>
          user 2
        </ListItem>
      </List>
      {assignSite && <AssignSiteForm open={assignSite} onClose={() => setAssignSite(false)}/>}
    </Paper>
  )
}

export default SiteDetail;