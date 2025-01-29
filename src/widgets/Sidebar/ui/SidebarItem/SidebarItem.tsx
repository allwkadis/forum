import { useTranslation } from "react-i18next";
import { memo } from "react";

import { AppLink } from "../../../../shared/ui/AppLink";
import { SidebarItemType } from "../../model/SidebarItems";
import { classNames } from "../../../../shared/lib";

import cls from "./SidebarItem.module.css";
import { useAppSelector } from "../../../../app/providers/StoreProvider";
import { userSelectors } from "../../../../entities/User";

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
  const { t } = useTranslation("sidebar");
  const auth = useAppSelector(userSelectors.selectAuthData);

  if (item.authOnly && !auth) {
    return null;
  }

  return (
    <AppLink to={item.url} variant="primary" key={item.url}>
      <div
        className={classNames(cls["link-wrapper"], {
          [cls.collapsed]: collapsed,
        })}
      >
        <div className={classNames(cls["link-info"])}>
          {item.icon}
          {!collapsed && (
            <span className={cls["link-href"]}>{t(item.title)}</span>
          )}
        </div>
      </div>
    </AppLink>
  );
});
