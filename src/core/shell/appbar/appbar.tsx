import { Menu } from "@mui/icons-material";
import { AppBar, IconButton, Stack, Toolbar, Typography } from "@mui/material";

interface AppbarProps {
    handleDrawerOpen : () => void;
}
function Appbar(props: AppbarProps) {
  return (
      <AppBar position="static" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
            <Stack direction="row" spacing={2}>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={props.handleDrawerOpen}
        sx={{ mr: 2 }}
      >
        <Menu />
      </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Build Connect
          </Typography>

            </Stack>
        </Toolbar>
      </AppBar>
  );
}
export default Appbar;