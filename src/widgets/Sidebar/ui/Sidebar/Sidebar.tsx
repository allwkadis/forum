import { useState } from "react";

import { Button } from "../../../../shared/ui/Button";
import { ThemeSwitcher } from "../../../ThemeSwitcher";
import { classNames } from "../../../../shared/lib";

import cls from "./Sidebar.module.css";
import { LangSwitcher } from "../../../LangSwitcher";
import { useTranslation } from "react-i18next";

interface ISidebarProps {
  className?: string;
}

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
      <Button onClick={toogleCollapsed} size="small">
        {t("коллапс")}
      </Button>
      <div className={cls["switchers"]}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </aside>
  );
};
