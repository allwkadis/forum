import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

export interface SidebarItemType {
  icon: JSX.Element;
  title: string;
  url: string;
}

export const SidebarItemsList: SidebarItemType[] = [
  { title: "главная", url: "/main", icon: <HomeIcon /> },
  { title: "о нас", url: "/about", icon: <InfoIcon /> },
  { title: "профиль", url: "/profile", icon: <AccountBoxIcon /> },
];
