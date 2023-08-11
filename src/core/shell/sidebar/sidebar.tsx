import { Home, Person, Settings } from "@mui/icons-material";
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, IconButton } from "@mui/material";
import styled from "@emotion/styled/macro";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

// const DrawerHeader = styled('div')(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   padding: theme.spacing(0, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
//   justifyContent: 'flex-end',
// }));

// const DrawerHeaderStyle = styled('div') => css`
//   display: flex;
//   align-items: center;
//   padding: ${theme.spacing(0, 1)};
//   /* necessary for content to be below app bar */
//   ${theme.mixins.toolbar};
//   justify-content: flex-end;
// `;

interface SidebarProps {
  open: boolean,
  setOpen: () => void;
}

function Sidebar(props: SidebarProps) {
    const navigate = useNavigate();
      return (
    <Drawer
    
      variant={props.open ? "permanent" : "temporary"}
      open={props.open}
      onClose={props.setOpen}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
    >
      {/* <DrawerHeader/> */}
      <Toolbar />
      <List>
        <ListItem button onClick={() => {
            navigate('/users');
        }}>
          <ListItemIcon>
            <Person />
          </ListItemIcon>
          <ListItemText primary="Users" />
        </ListItem>
        <ListItem button onClick={() => {
            navigate('/sites');
        }}>
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="Sites" />
        </ListItem>
        {/* Add more list items here for other routes */}
        <ListItem button onClick={() => {
            navigate('/configurations');
        }}>
          <ListItemIcon>
            <Settings />
          </ListItemIcon>
          <ListItemText primary="Configurations" />
        </ListItem>
      </List>
    </Drawer>
  );
}

export default Sidebar;