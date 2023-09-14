import { Toolbar } from "@mui/material";
import DefaultPage from "../../../core/shell/default_page/default_page";
import { Box, Button, Grid, Stack } from "@mui/joy";
import LookupTable from "../components/lookup_table";
import { useEffect, useState } from "react";
import AddLookup from "../components/add_lookup";
import LookupTypeList from "../components/lookup_types_list";
import { useGetLookupTypesQuery } from "../api/lookup_endpoint";

export const LookupPage = () => {
  const [createLookup, setCreateLookup] = useState<boolean>(false);
  const [selectedLookupType, setSelectedLookupType] = useState<number>(0);
  const handleCreateLookup = () => {
    setCreateLookup((lookup) => !lookup);
  };

  let lookupTypes: string[] = [];

  const { data } = useGetLookupTypesQuery({
    params: {},
  });

  useEffect(() => {
    if (data) {
      lookupTypes = Object.keys(data).filter((key) => isNaN(Number(key)));
    }
  }, [data]);
  return (
    <DefaultPage title="Lookups">
      <Toolbar sx={{ display: "flex", justifyContent: "end" }}>
        <Button sx={{ alignSelf: "end" }} onClick={handleCreateLookup}>
          Create Lookup
        </Button>
      </Toolbar>
      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
        <Grid xs={2}>
          <Stack spacing={2}>
            <LookupTypeList
              setLookupType={setSelectedLookupType}
              lookupType={selectedLookupType}
            />
          </Stack>
        </Grid>
        <Grid xs={10}>
          <Box padding={2}>
            <LookupTable selectedLookupType={selectedLookupType} />
          </Box>
        </Grid>
      </Grid>
      {createLookup && (
        <AddLookup
          open={createLookup}
          onClose={handleCreateLookup}
          lookupType={selectedLookupType}
        />
      )}
    </DefaultPage>
  );
};
