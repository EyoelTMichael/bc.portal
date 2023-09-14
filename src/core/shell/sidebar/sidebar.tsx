// import {
//   ExpandLess,
//   ExpandMore,
//   FileOpen,
//   FileOpenOutlined,
//   FormatUnderlined,
//   Home,
//   PausePresentationOutlined,
//   Person,
//   Settings,
//   StarBorder,
// } from "@mui/icons-material";
// import {
//   Drawer,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   Toolbar,
//   IconButton,
//   Collapse,
//   ListItemButton,
// } from "@mui/material";
// import styled from "@emotion/styled/macro";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";

// const drawerWidth = 240;

// // const DrawerHeader = styled('div')(({ theme }) => ({
// //   display: 'flex',
// //   alignItems: 'center',
// //   padding: theme.spacing(0, 1),
// //   // necessary for content to be below app bar
// //   ...theme.mixins.toolbar,
// //   justifyContent: 'flex-end',
// // }));

// // const DrawerHeaderStyle = styled('div') => css`
// //   display: flex;
// //   align-items: center;
// //   padding: ${theme.spacing(0, 1)};
// //   /* necessary for content to be below app bar */
// //   ${theme.mixins.toolbar};
// //   justify-content: flex-end;
// // `;

// interface SidebarProps {
//   open: boolean;
//   setOpen: () => void;
// }

// function Sidebar(props: SidebarProps) {
//   const [open, setOpen] = useState<boolean>(false);
//   const navigate = useNavigate();
//   return (
//     <Drawer
//       variant={props.open ? "permanent" : "temporary"}
//       open={props.open}
//       onClose={props.setOpen}
//       sx={{
//         width: drawerWidth,
//         flexShrink: 0,
//         "& .MuiDrawer-paper": {
//           width: drawerWidth,
//           boxSizing: "border-box",
//         },
//       }}
//     >
//       {/* <DrawerHeader/> */}
//       <Toolbar />
//       <List>
//         <ListItem
//           button
//           onClick={() => {
//             navigate("/users");
//           }}
//         >
//           <ListItemIcon>
//             <Person />
//           </ListItemIcon>
//           <ListItemText primary="Users" />
//         </ListItem>
//         <ListItem
//           button
//           onClick={() => {
//             navigate("/sites");
//           }}
//         >
//           <ListItemIcon>
//             <Home />
//           </ListItemIcon>
//           <ListItemText primary="Sites" />
//         </ListItem>
//         <ListItem
//           button
//           onClick={() => {
//             navigate("/bill-of-quantity");
//           }}
//         >
//           <ListItemIcon>
//             <PausePresentationOutlined />
//           </ListItemIcon>
//           <ListItemText primary="Bill of Quanity" />
//         </ListItem>
//         <ListItem
//           button
//           onClick={() => {
//             navigate("/work-item");
//           }}
//         >
//           <ListItemIcon>
//             <PausePresentationOutlined />
//           </ListItemIcon>
//           <ListItemText primary="work-item" />
//         </ListItem>
//         <ListItem
//           button
//           onClick={() => {
//             setOpen(!open);
//           }}
//         >
//           <ListItemIcon>
//             <Settings />
//           </ListItemIcon>
//           <ListItemText primary="Configurations" />
//           {open ? <ExpandLess /> : <ExpandMore />}
//         </ListItem>
//         <Collapse in={open} timeout="auto" unmountOnExit>
//           <List component="div" disablePadding>
//             <ListItemButton
//               sx={{ pl: 4 }}
//               onClick={() => {
//                 navigate("/configuration/lookup");
//               }}
//             >
//               <ListItemIcon>
//                 <StarBorder />
//               </ListItemIcon>
//               <ListItemText primary="Lookups" />
//             </ListItemButton>
//           </List>
//           <List component="div" disablePadding>
//             <ListItemButton
//               sx={{ pl: 4 }}
//               onClick={() => {
//                 navigate("/configuration/permissions");
//               }}
//             >
//               <ListItemIcon>
//                 <StarBorder />
//               </ListItemIcon>
//               <ListItemText primary="Permissions" />
//             </ListItemButton>
//           </List>
//           <List component="div" disablePadding>
//             <ListItemButton
//               sx={{ pl: 4 }}
//               onClick={() => {
//                 navigate("/configuration/files");
//               }}
//             >
//               <ListItemIcon>
//                 <FileOpenOutlined />
//               </ListItemIcon>
//               <ListItemText primary="Files" />
//             </ListItemButton>
//           </List>
//           <List component="div" disablePadding>
//             <ListItemButton
//               sx={{ pl: 4 }}
//               onClick={() => {
//                 navigate("/configuration/formula");
//               }}
//             >
//               <ListItemIcon>
//                 <FileOpen />
//               </ListItemIcon>
//               <ListItemText primary="Tasks" />
//             </ListItemButton>
//           </List>
//           <List component="div" disablePadding>
//             <ListItemButton
//               sx={{ pl: 4 }}
//               onClick={() => {
//                 navigate("/configuration/work-item");
//               }}
//             >
//               <ListItemIcon>
//                 <FileOpen />
//               </ListItemIcon>
//               <ListItemText primary="Work Items" />
//             </ListItemButton>
//           </List>
//           <Collapse in={open} timeout="auto" unmountOnExit>
//             <List component="div" disablePadding>
//               <ListItemButton
//                 sx={{ pl: 4 }}
//                 onClick={() => {
//                   navigate("/configuration/work-item");
//                 }}
//               >
//                 <ListItemIcon>
//                   <FileOpen />
//                 </ListItemIcon>
//                 <ListItemText primary="Work Items" />
//               </ListItemButton>
//             </List>
//           </Collapse>
//         </Collapse>
//       </List>
//     </Drawer>
//   );
// }

// export default Sidebar;

import {
  Box,
  Card,
  Divider,
  GlobalStyles,
  IconButton,
  LinearProgress,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemContent,
  ListItemDecorator,
  Sheet,
  Typography,
} from "@mui/joy";
import { closeSidebar } from "./utils";
import ColorSchemeToggle from "./color_scheme_toggle";
import { Home } from "@mui/icons-material";

const Sidebar = () => {
  return (
    <Sheet
      className="Sidebar"

      sx={{
        position: {
          xs: "fixed",
          lg: "sticky",
        },
        transform: {
          xs: "translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1)))",
          lg: "none",
        },
        transition: "transform 0.4s, width 0.4s",
        zIndex: 10000,
        height: "100dvh",
        width: "var(--Sidebar-width)",
        top: 0,
        px: 1.5,
        py: 2,
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        borderRight: "1px solid",
        borderColor: "divider",
      }}
    >
      <GlobalStyles
        styles={(theme) => ({
          ":root": {
            "--Sidebar-width": "350px",
            [theme.breakpoints.up("lg")]: {
              "--Sidebar-width": "256px",
            },
          },
        })}
      />
      <Box
        className="Sidebar-overlay"
        sx={{
          position: "fixed",
          zIndex: 9998,
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",

          opacity: "calc(var(--SideNavigation-slideIn, 0) - 0.2)",
          transition: "opacity 0.4s",
          transform: {
            xs: "translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1) + var(--SideNavigation-slideIn, 0) * var(--Sidebar-width, 0px)))",
            lg: "translateX(-100%)",
          },
        }}
        onClick={() => closeSidebar()}
      />
      <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
        {/* <MuiLogo /> */}
        <Typography fontWeight="xl">MUI</Typography>
        <ColorSchemeToggle />
      </Box>
      <Box
        sx={{
          minHeight: 0,
          overflow: "hidden auto",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <List
          sx={{
            "--ListItem-radius": "8px",
            "--List-gap": "4px",
            "--List-nestedInsetStart": "40px",
          }}
        >
          <ListItem>
            <ListItemButton>
              <ListItemDecorator>
                {/* <i data-feather="home" /> */}
                <Home />
              </ListItemDecorator>
              <ListItemContent>Home</ListItemContent>
              <i data-feather="chevron-down" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemDecorator>
                <i data-feather="bar-chart-2" />
              </ListItemDecorator>
              <ListItemContent>Dashboard</ListItemContent>
              <i data-feather="chevron-down" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemDecorator>
                <i data-feather="layers" />
              </ListItemDecorator>
              <ListItemContent>Projects</ListItemContent>
              <i data-feather="chevron-down" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemDecorator>
                <i data-feather="check-square" />
              </ListItemDecorator>
              <ListItemContent>Tasks</ListItemContent>
              <i data-feather="chevron-down" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemDecorator>
                <i data-feather="flag" />
              </ListItemDecorator>
              <ListItemContent>Reporting</ListItemContent>
              <i data-feather="chevron-down" />
            </ListItemButton>
          </ListItem>
          <ListItem nested>
            <ListItemButton>
              <ListItemDecorator>
                <i data-feather="message-square" />
              </ListItemDecorator>
              <ListItemContent>Messages</ListItemContent>
              <i data-feather="chevron-up" />
            </ListItemButton>
            <List>
              <ListItem>
                <ListItemButton selected color="primary">
                  View all
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Your team</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Archived</ListItemButton>
              </ListItem>
            </List>
          </ListItem>
        </List>
        <List
          sx={{
            mt: "auto",
            flexGrow: 0,
            "--ListItem-radius": "8px",
            "--List-gap": "8px",
          }}
        >
          <ListItem>
            <ListItemButton>
              <ListItemDecorator>
                <i data-feather="life-buoy" />
              </ListItemDecorator>
              <ListItemContent>Supports</ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemDecorator>
                <i data-feather="settings" />
              </ListItemDecorator>
              <ListItemContent>Settings</ListItemContent>
            </ListItemButton>
          </ListItem>
        </List>
        <Card
          variant="soft"
          color="primary"
          invertedColors
          sx={{ boxShadow: "none" }}
        >
          <Typography fontSize="sm" fontWeight="lg" mb={0.5}>
            Used space
          </Typography>
          <Typography level="body-xs">
            Your team has used 80% of your available space. Need more?
          </Typography>
          <LinearProgress value={80} determinate sx={{ my: 1.5 }} />
          <Box sx={{ display: "flex", gap: 2 }}>
            <Link fontSize="sm" component="button" fontWeight="lg">
              Upgrade plan
            </Link>
            <Link fontSize="sm" component="button">
              Dismiss
            </Link>
          </Box>
        </Card>
      </Box>
      <Divider />
      <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
        <Box sx={{ minWidth: 0, flex: 1 }}>
          <Typography fontSize="sm" fontWeight="lg">
            Steve E.
          </Typography>
          <Typography level="body-xs">@steveEberger</Typography>
        </Box>
        <IconButton variant="plain" color="neutral">
          <i data-feather="log-out" />
        </IconButton>
      </Box>
    </Sheet>
  );
};

export default Sidebar;
