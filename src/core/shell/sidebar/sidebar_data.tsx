import {
  EditAttributesOutlined,
  GestureOutlined,
  HomeMaxOutlined,
  Person2Outlined,
  SettingsOutlined,
} from "@mui/icons-material";

export const SIDEBAR_DATA = [
  {
    name: "Sites",
    icon: <HomeMaxOutlined color="primary" />,
    children: [
      {
        name: "Site",
        icon: <EditAttributesOutlined color="primary" />,
        path: "/site",
      },
      {
        name: "Site Activity",
        icon: <EditAttributesOutlined color="primary" />,
        path: "/site-activity",
      },
      {
        name: "Site Reports",
        icon: <EditAttributesOutlined color="primary" />,
        path: "/site-report",
      },
      {
        name: "Schedule",
        icon: <EditAttributesOutlined color="primary" />,
        path: "/schedule",
      },
      {
        name: "Inspection",
        icon: <EditAttributesOutlined color="primary" />,
        path: "/inspection",
      },
    ],
  },
  {
    name: "User",
    icon: <Person2Outlined color="primary" />,
    path: "/users",
  },
  {
    name: "Configuration",
    icon: <SettingsOutlined color="primary" />,
    children: [
      {
        name: "Lookup",
        icon: <GestureOutlined color="primary" />,
        path: "configuration/lookup",
      },
      {
        name: "Folders",
        icon: <GestureOutlined color="primary" />,
        path: "configuration/files",
      },
    ],
  },
];

export interface SidebarType {
  name: string;
  icon: React.ReactElement;
  path?: string;
  children?: SidebarType[];
}
