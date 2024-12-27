import { useState } from "react";

import { classNames } from "../../../../shared/lib";

import cls from "./Sidebar.module.css";
import { Button } from "../../../../shared/ui/Button";
import { ThemeSwitcher } from "../../../ThemeSwitcher";

interface ISidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: ISidebarProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const toogleCollapsed = () => setCollapsed((prev) => !prev);

  return (
    <aside
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className as string,
      ])}
    >
      <Button onClick={toogleCollapsed} size="small">
        collapse
      </Button>
      <div className={cls["switchers"]}>
        <ThemeSwitcher />
      </div>
    </aside>
  );
};
