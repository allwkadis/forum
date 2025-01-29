import { memo, useState } from "react";
import { SidebarItem } from "../SidebarItem/SidebarItem";
import { Button } from "../../../../shared/ui/Button";
import { ThemeSwitcher } from "../../../ThemeSwitcher";
import { classNames } from "../../../../shared/lib";
import { SidebarItemsList } from "../../model/SidebarItems";
import { LangSwitcher } from "../../../LangSwitcher";

import cls from "./Sidebar.module.css";

interface ISidebarProps {
  className?: string;
}



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
          {SidebarItemsList.map((item) => {
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
