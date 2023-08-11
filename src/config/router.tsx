import { createBrowserRouter } from "react-router-dom";
import Shell from "../core/shell/shell";
import SitePage from "../feature/site/page/site_page";
import SiteDetail from "../feature/site/page/site_detail";
import UsersPage from "../feature/user/page/users_page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Shell />,
    children: [
      {
        path: 'sites',
        element: <SitePage />
      },
      {
        path: 'sites/:id',
        element: <SiteDetail />
      },
      {
        path: 'users',
        element: <UsersPage />
      },
      {
        path: 'users/:id',
        element: <SiteDetail />
      }
    ]
  },
]);

