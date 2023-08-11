import { Add, ArrowRight, Edit, Search } from "@mui/icons-material";
import { Button, TextField, List, ListItem, Toolbar, Typography, InputAdornment, Stack, Paper, Divider, Box, CircularProgress, Table, TableHead, TableRow, TableCell, TableBody, TableContainer } from "@mui/material";
import AddSite from "../components/add_site";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetSitesQuery } from "../api/site_endpoints";


function SitePage() {
    const [addSite, setAddSite] = useState<boolean>(false);
    const navigate = useNavigate();
  const { data, isLoading } = useGetSitesQuery({
    params: {}
  })
  return (
    <Paper sx={{margin: 4}}>
        <Toolbar sx={{display: 'flex', justifyContent: 'space-between', padding: 2}}>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Sites
          </Typography>
            <Stack direction="row" spacing={2}>
          <TextField  
            id="search" 
            label="Search Site" 
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
          
          <Button startIcon={<Add />} variant="contained" onClick={() => setAddSite(true)}>Add Site</Button>
            </Stack>
        </Toolbar>
        <Divider />
      {isLoading ? <Box display="flex" alignItems="center" justifyContent="center">
            <CircularProgress />
      </Box> : 
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell >Owner</TableCell>
            <TableCell align="right" >Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((row: any) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>
              {row.owner}
              </TableCell>
              <TableCell align="right">
                    <Box display="flex" alignItems="center" justifyContent="end" gap={2}>
                    <Button startIcon={<Edit />}>Edit</Button>
                    <Button endIcon={<ArrowRight />} onClick={() => {
                        navigate(`./${row.id}`);
                    }}>Detail</Button>
                    </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>}
      {addSite && <AddSite open={addSite} onClose={() => setAddSite(false)}/>}
    </Paper>
  );
}

export default SitePage;
