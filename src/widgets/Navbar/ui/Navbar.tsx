import { Link } from "react-router";
import { classNames } from "../../../shared/lib/classNames";

import cls from "./Navbar.module.css";
import { AppLink } from "../../../shared/ui/AppLink";

interface INavbarProprs {
  className?: string;
}

export const Navbar = ({ className }: INavbarProprs) => {
  return (
    <div className={classNames(cls.navbar, {}, [className as string])}>
      <p>FORUM</p>
      <div className={cls.links}>
        <AppLink to={"/main"} theme="primary">
          main
        </AppLink>
        <AppLink to={"/about"} theme="primary">
          about
        </AppLink>
      </div>
    </div>
  );
};
