import { memo, useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

import { Button } from "../../../../shared/ui/Button";
import { ThemeSwitcher } from "../../../ThemeSwitcher";
import { classNames } from "../../../../shared/lib";

import { LangSwitcher } from "../../../LangSwitcher";

import cls from "./Sidebar.module.css";
import { SidebarItem } from "../SidebarItem/SidebarItem";

interface ISidebarProps {
  className?: string;
}

const SidebarLinks = [
  { title: "главная", url: "/main", icon: <HomeIcon /> },
  { title: "о нас", url: "/about", icon: <InfoIcon /> },
  { title: "профиль", url: "/profile", icon: <AccountBoxIcon /> },
  { title: "статьи", url: "/articles", icon: <AccountBoxIcon /> },
  { title: "детали", url: "/article_details", icon: <AccountBoxIcon /> },
];

//сделать иконки в зависимости от авторизации

export const Sidebar = memo(({ className }: ISidebarProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const toogleCollapsed = () => setCollapsed((prev) => !prev);

  return (
    <aside
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className as string,
      ])}
    >
      <Button
        onClick={toogleCollapsed}
        size="small"
        additionalClass={cls.collapsedBtn}
        variant="outlined"
      >
        {collapsed ? ">" : "<"}
      </Button>
      <div>
        <ul className={cls.links}>
          {SidebarLinks.map((item) => {
            return (
              <li key={item.url}>
                <SidebarItem item={item} collapsed={collapsed} />
              </li>
            );
          })}
        </ul>
      </div>
      <div
        className={classNames(cls.switchers, {
          [cls["switchers-collapsed"]]: collapsed,
        })}
      >
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </aside>
  );
});
