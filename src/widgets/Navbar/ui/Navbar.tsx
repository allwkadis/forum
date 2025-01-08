import { useTranslation } from "react-i18next";
import { classNames } from "../../../shared/lib/classNames";
import { AppLink } from "../../../shared/ui/AppLink";

import cls from "./Navbar.module.css";

type navBarlinksType = { title: string; url: string };

interface INavbarProprs {
  className?: string;
}

const navbarLinks: navBarlinksType[] = [
  { title: "главная", url: "/main" },
  { title: "о нас", url: "/about" },
];

export const Navbar = ({ className }: INavbarProprs) => {
  const { t } = useTranslation("navbar");

  return (
    <div className={classNames(cls.navbar, {}, [className as string])}>
      <p>FORUM</p>
      <div className={cls["navbar-nav"]}>
        <nav>
          <ul className={cls.links}>
            {navbarLinks.map((link) => {
              return (
                <li>
                  <AppLink to={link.url} variant="primary" key={link.url}>
                    {t(link.title)}
                  </AppLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};
