import { useState } from "react";

import { Button } from "../../../../shared/ui/Button";
import { ThemeSwitcher } from "../../../ThemeSwitcher";
import { classNames } from "../../../../shared/lib";

import { LangSwitcher } from "../../../LangSwitcher";
import { useTranslation } from "react-i18next";

import cls from "./Sidebar.module.css";

interface ISidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: ISidebarProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  // const { t } = useTranslation("sidebar");
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
      <div
        className={classNames(
          cls.switchers,
          { [cls["switchers-collapsed"]]: collapsed },
          []
        )}
      >
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </aside>
  );
};
