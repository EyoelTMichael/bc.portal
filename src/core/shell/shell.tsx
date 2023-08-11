import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar/sidebar";
import Appbar from "./appbar/appbar";
import { useState } from "react";

function Shell() {
  const [open, setOpen] = useState<boolean>(true);
  const handleDrawerOpen = () => {
    setOpen(open => !open);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Appbar handleDrawerOpen={handleDrawerOpen} />
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <Sidebar open={open} setOpen={handleDrawerOpen}/>
          <Box width="100%" flexGrow={1} minHeight={0}>
            <Outlet />
          </Box>
      </Box>
    </Box>
  );
}

export default Shell;