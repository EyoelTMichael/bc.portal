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
  Stack,
} from "@mui/joy";
import {
  SearchRounded,
  GridViewRounded,
  Menu as MenuIcon,
  MailRounded,
} from "@mui/icons-material";
import { Outlet, useNavigate } from "react-router-dom";
import { BASE_URL, api } from "../../store/app_api";
import { useGetSiteByUserQuery } from "../../feature/site/api/site_endpoints";
import { SiteModel } from "../../feature/site/model/site";
import { useDispatch, useSelector } from "react-redux";
import { setSite } from "./state/site_action";

function Shell() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedSite, setSelectedSite] = useState<SiteModel | undefined>();
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
  const dispatch = useDispatch();

  const handleSiteChange = (site: SiteModel) => {
    dispatch(setSite(site));
    dispatch(api.util.resetApiState());
    setSelectedSite(site)
  }
  const site = useSelector((state: any) => state.site);
  useEffect(() => {
    if (sites && sites.length > 0) {
      dispatch(setSite(sites?.[0]));
      setSelectedSite(site);
    }
  }, [site])
  useEffect(() => {
    if (sites && sites.length > 0 && !selectedSite) {
      dispatch(setSite(sites?.[0]));
    }
  })
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
              <MailRounded />
            </IconButton>
            <Stack>
              <Typography component="h1" fontWeight="xl">
                BUILD CONNECT
              </Typography>
              <Typography level="body-xs">{site?.name}</Typography>
            </Stack>
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
            <ColorSchemeToggle />
            <Dropdown>
              <MenuButton variant="soft" color="neutral" aria-label="Apps" size="sm">
                <GridViewRounded />
              </MenuButton>

              <JoyMenu>
                {sites?.map((site, index) => (
                  <MenuItem selected={selectedSite?.id == site.id} key={`${site.name}-${index}`} onClick={() => handleSiteChange(site)}>{site.name}</MenuItem>
                ))}
              </JoyMenu>
            </Dropdown>
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
          <Box display="flex" flex={1} width="100%">
            <Outlet />
          </Box>
        </Layout.Main>
      </Layout.Root>
    </Box>
  );
}

export default Shell;
