import { classNames } from "../../../shared/lib/classNames";

import cls from "./Navbar.module.css";

type navBarlinksType = { title: string; url: string };

interface INavbarProprs {
  className?: string;
}

export const Navbar = ({ className }: INavbarProprs) => {
  return (
    <div className={classNames(cls.navbar, {}, [className as string])}>
      <p>FORUM</p>
      <div className={cls["navbar-nav"]}>
        <nav></nav>
      </div>
    </div>
  );
};
