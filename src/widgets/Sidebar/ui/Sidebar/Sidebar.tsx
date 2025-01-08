import { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";

import { Button } from "../../../../shared/ui/Button";
import { ThemeSwitcher } from "../../../ThemeSwitcher";
import { classNames } from "../../../../shared/lib";

import { LangSwitcher } from "../../../LangSwitcher";
import { useTranslation } from "react-i18next";

import { AppLink } from "../../../../shared/ui/AppLink";

import cls from "./Sidebar.module.css";

interface ISidebarProps {
  className?: string;
}

// type SidebarLink = { title: string; url: "string" };

const SidebarLinks = [
  { title: "главная", url: "/main", icon: <HomeIcon /> },
  { title: "о нас", url: "/about", icon: <InfoIcon /> },
];

export const Sidebar = ({ className }: ISidebarProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const { t } = useTranslation("sidebar");
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
        {collapsed ? ">" : "< "}
      </Button>
      <div>
        <ul className={cls.links}>
          {SidebarLinks.map((link) => {
            return (
              <li>
                <AppLink to={link.url} variant="primary" key={link.url}>
                  <div className={cls["link-info"]}>
                    {link.icon}
                    <span className={cls["link-href"]}>{t(link.title)}</span>
                  </div>
                </AppLink>
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
};
