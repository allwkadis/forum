import { useTranslation } from "react-i18next";
import { classNames } from "../../../shared/lib/classNames";
import { AppLink } from "../../../shared/ui/AppLink";

import cls from "./Navbar.module.css";

interface INavbarProprs {
  className?: string;
}

export const Navbar = ({ className }: INavbarProprs) => {
  const { t } = useTranslation("navbar");

  return (
    <div className={classNames(cls.navbar, {}, [className as string])}>
      <p>FORUM</p>
      <div className={cls["navbar-nav"]}>
        <nav>
          <ul className={cls.links}>
            <li>
              <AppLink to={"/main"} variant="primary">
                {t("главная")}
              </AppLink>
            </li>
            <li>
              <AppLink to={"/about"} variant="primary">
                {t("о нас")}
              </AppLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
