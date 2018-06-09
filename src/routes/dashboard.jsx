import DashboardPage from "views/Dashboard/Dashboard.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import TableList from "views/TableList/TableList.jsx";
import Icons from "views/Icons/Icons.jsx";
import ComplaintForm from "views/ComplaintForm/ComplaintForm.jsx";
import NotificationsPage from "views/Notifications/Notifications.jsx";
import ResourceCenter from "views/Resources/ResourceCenter.jsx";
import ResourceDetails from "views/Resources/ResourceDetails.jsx";
import CalendarPage from "views/CalendarPage/CalendarPage.jsx";

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
    navbarName: "Profile",
    icon: Person,
    component: UserProfile,
    hide: true
  },
  {
    path: "/table",
    sidebarName: "Community Members",
    navbarName: "Community Members",
    icon: People,
    component: TableList
  },
  {
    path: "/resources/:id",
    navbarName: "Resource Center",
    component: ResourceDetails,
    hide: true
  },
  {
    path: "/resources",
    sidebarName: "Resource Center",
    navbarName: "Resource Center",
    icon: LibraryBooks,
    component: ResourceCenter
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
    component: CalendarPage
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
