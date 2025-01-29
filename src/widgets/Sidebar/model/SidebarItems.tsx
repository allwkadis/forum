import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import NewspaperIcon from "@mui/icons-material/Newspaper";
export interface SidebarItemType {
  icon: JSX.Element;
  title: string;
  url: string;
  authOnly?: boolean;
}

export const SidebarItemsList: SidebarItemType[] = [
  { title: "главная", url: "/main", icon: <HomeIcon />, authOnly: false },
  { title: "о нас", url: "/about", icon: <InfoIcon />, authOnly: false },
  {
    title: "профиль",
    url: "/profile",
    icon: <AccountBoxIcon />,
    authOnly: true,
  },
  {
    title: "статьи",
    url: "/articles",
    icon: <NewspaperIcon />,
    authOnly: true,
  },
  // {
  //   title: "детали",
  //   url: "/article_details",
  //   icon: <AccountBoxIcon />,
  //   authOnly: true,
  // },
];
