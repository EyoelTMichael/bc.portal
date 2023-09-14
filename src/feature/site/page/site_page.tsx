import { Add, ArrowRight, Edit, Search } from "@mui/icons-material";
import {
  Button,
  TextField,
  InputAdornment,
  Paper,
  CircularProgress,
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableContainer,
  TableRow,
} from "@mui/material";
import AddSite from "../components/add_site";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetSitesQuery } from "../api/site_endpoints";
import { SiteModel } from "../model/site";
import { Box } from "@mui/joy";
import DefaultPage from "../../../core/shell/default_page/default_page";

function SitePage() {
  const [addSite, setAddSite] = useState<boolean>(false);
  const [editSite, setEditSite] = useState<boolean>(false);
  const [selectedSite, setSelectedSite] = useState<SiteModel | undefined>(
    undefined
  );
  const navigate = useNavigate();
  const { data, isLoading } = useGetSitesQuery({
    params: {},
  });
  return (
    <DefaultPage
      title="Site"
      primaryButton={
        <Button
          startIcon={<Add />}
          variant="contained"
          onClick={() => setAddSite(true)}
        >
          Add Site
        </Button>
      }
      otherElement={
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
      }
    >
      {isLoading ? (
        <Box display="flex" alignItems="center" justifyContent="center">
          <CircularProgress sx={{ width: 12, height: 12 }} />
        </Box>
      ) : (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Owner</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map((row: SiteModel) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell>{row.owner}</TableCell>
                  <TableCell align="right">
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="end"
                      gap={2}
                    >
                      <Button
                        startIcon={<Edit />}
                        onClick={() => {
                          setSelectedSite(row);
                          setEditSite(true);
                        }}
                      >
                        Edit
                      </Button>
                      <Button
                        endIcon={<ArrowRight />}
                        onClick={() => {
                          navigate(`./${row.id}`);
                        }}
                      >
                        Detail
                      </Button>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      {addSite && <AddSite open={addSite} onClose={() => setAddSite(false)} />}
      {editSite && (
        <AddSite
          open={editSite}
          onClose={() => setEditSite(false)}
          site={selectedSite}
        />
      )}
    </DefaultPage>
  );
}

export default SitePage;
