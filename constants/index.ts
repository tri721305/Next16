import ROUTES from "./route";

export const sidebarLinks = [
  {
    imgURL: "/icons/home.svg",
    label: "Home",
    route: "/",
  },
  {
    imgURL: "/icons/users.svg",
    label: "Community",
    route: ROUTES.COMMUNITY,
  },
  {
    imgURL: "/icons/account.svg",
    label: "Dashboard",
    route: ROUTES.DASHBOARD,
  },
  {
    imgURL: "/icons/user.svg",
    label: "Profile",
    route: "/profile",
  },
];
