import DashboardPage from "views/Dashboard/Dashboard.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import TableList from "views/TableList/TableList.jsx";
import Typography from "views/Typography/Typography.jsx";
import Icons from "views/Icons/Icons.jsx";
import ComplaintForm from "views/ComplaintForm/ComplaintForm.jsx";
import NotificationsPage from "views/Notifications/Notifications.jsx";

import {
  Dashboard,
  Person,
  Gavel,
  LibraryBooks,
  BubbleChart,
  People,
  PermContactCalendar,
  InsertChart
} from "@material-ui/icons";

const dashboardRoutes = [
  {
    path: "/dashboard",
    sidebarName: "Dashboard",
    navbarName: "Dashboard",
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: "/user",
    sidebarName: "User Profile",
    navbarName: "Profile",
    icon: Person,
    component: UserProfile
  },
  {
    path: "/table",
    sidebarName: "Community Members",
    navbarName: "Community Members",
    icon: People,
    component: TableList
  },
  {
    path: "/typography",
    sidebarName: "Resource Center",
    navbarName: "Resource Center",
    icon: LibraryBooks,
    component: Typography
  },
  {
    path: "/icons",
    sidebarName: "Submit a Request",
    navbarName: "Submit a Request",
    icon: BubbleChart,
    component: Icons
  },
  {
    path: "/complaint",
    sidebarName: "File a Complaint",
    navbarName: "File a Complaint",
    icon: Gavel,
    component: ComplaintForm
  },
  {
    path: "/calendar",
    sidebarName: "Event Calendar",
    navbarName: "Event Calendar",
    icon: PermContactCalendar,
    component: NotificationsPage
  },
  {
    path: "/create-poll",
    sidebarName: "Create a Poll",
    navbarName: "Create a Poll",
    icon: InsertChart,
    component: NotificationsPage
  },
  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default dashboardRoutes;
