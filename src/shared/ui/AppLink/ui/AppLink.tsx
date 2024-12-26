import { Link, LinkProps } from "react-router";

import { classNames } from "../../../lib/classNames";
import cls from "./AppLink.module.css";



type AppLinKTheme = 'primary' | 'secondary'

interface IAppLinkProps extends LinkProps {
  children: React.ReactNode;
  theme?: AppLinKTheme;
}

export const AppLink = ({ children, to, theme, ...props }: IAppLinkProps) => {
  return (
    <Link
      to={to}
      className={classNames(cls.AppLink, {}, [cls[theme!]])}
      {...props}
    >
      {children}
    </Link>
  );
};
