import { useEffect, useState } from "react";
import Layout from "./layout/layout";
import Menu from "./layout/menu";
import Navigation from "./layout/navigation";
import ColorSchemeToggle from "./sidebar/color_scheme_toggle";
import {
  IconButton,
  Input,
  Typography,
  Box,
  Avatar,
  Dropdown,
  MenuItem,
  Menu as JoyMenu,
  MenuButton,
} from "@mui/joy";
import {
  SearchRounded,
  GridViewRounded,
  Menu as MenuIcon,
  MailRounded,
} from "@mui/icons-material";
import { Outlet, useNavigate } from "react-router-dom";
import { BASE_URL } from "../../store/app_api";
import { useGetSiteByUserQuery } from "../../feature/site/api/site_endpoints";

function Shell() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const user = JSON.parse(localStorage.getItem("userData") ?? "");

  useEffect(() => {
    console.log(user.user.profileImage);
  }, []);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("userData");
    navigate("/login");
  };
  const { data: sites } = useGetSiteByUserQuery({
    params: {
      userId: user.user.id,
    },
  });
  return (
    <Box>
      {drawerOpen && (
        <Layout.SideDrawer onClose={() => setDrawerOpen(false)}>
          <Navigation />
        </Layout.SideDrawer>
      )}
      <Layout.Root
        sx={{
          ...(drawerOpen && {
            height: "100vh",
            overflow: "hidden",
          }),
        }}
      >
        <Layout.Header>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 1.5,
            }}
          >
            <IconButton
              variant="outlined"
              size="sm"
              onClick={() => setDrawerOpen(true)}
              sx={{ display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <IconButton
              size="sm"
              variant="soft"
              sx={{ display: { xs: "none", sm: "inline-flex" } }}
            >
              <MailRounded color="primary" />
            </IconButton>
            <Typography component="h1" fontWeight="xl" color="primary">
              BUILD CONNECT
            </Typography>
            {/* <BuildConnectLogo /> */}
          </Box>
          <Input
            size="sm"
            variant="outlined"
            placeholder="Search anything…"
            startDecorator={<SearchRounded color="primary" />}
            endDecorator={
              <IconButton variant="outlined" color="neutral">
                <Typography fontWeight="lg" fontSize="sm" textColor="text.icon">
                  ⌘ + k
                </Typography>
              </IconButton>
            }
            sx={{
              flexBasis: "500px",
              display: {
                xs: "none",
                sm: "flex",
              },
              boxShadow: "sm",
            }}
          />
          <Box sx={{ display: "flex", flexDirection: "row", gap: 1.5 }}>
            {/* <IconButton
              size="sm"
              variant="soft"
              color="neutral"
              // sx={{ display: { xs: "inline-flex", sm: "none" } }}
            >
              <SearchRounded />
            </IconButton> */}

            <ColorSchemeToggle />
            <Menu
              id="app-selector"
              control={
                <IconButton variant="soft" color="neutral" aria-label="Apps">
                  <GridViewRounded />
                </IconButton>
              }
              menus={
                sites?.map((site) => ({
                  label: site.name,
                  active: true,
                  href: "./",
                  "aria-current": "page",
                })) ?? []
              }
            />
            {/* <IconButton
              size="sm"
              variant="soft"
              color="neutral"
              component="a"
              href="/blog/first-look-at-joy/"
            >
              <BookRounded />
            </IconButton> */}
            <Dropdown>
              <MenuButton variant="plain" size="sm">
                <Avatar src={`${BASE_URL}${user.user.profileImage}`} />
              </MenuButton>
              <JoyMenu>
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem onClick={handleLogout} color="danger">
                  Logout
                </MenuItem>
              </JoyMenu>
            </Dropdown>
          </Box>
        </Layout.Header>
        <Layout.SideNav>
          <Navigation />
        </Layout.SideNav>
        <Layout.Main>
          <Box display="flex" flex={1} width="100%" height="100%">
            <Outlet />
          </Box>
        </Layout.Main>
      </Layout.Root>
    </Box>
  );
}

export default Shell;
