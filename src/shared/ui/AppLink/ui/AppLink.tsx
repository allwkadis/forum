import { Link, LinkProps } from "react-router";

import { classNames } from "../../../lib/classNames";

import cls from "./AppLink.module.css";

type AppLinKVariant = "primary" | "secondary";

interface IAppLinkProps extends LinkProps {
  children: React.ReactNode;
  additionalClass?: string;
  variant?: AppLinKVariant;
}

export const AppLink = ({
  children,
  to,
  variant = 'primary',
  additionalClass,
  ...props
}: IAppLinkProps) => {
  return (
    <Link
      to={to}
      className={classNames(cls.AppLink, {}, [
        additionalClass,
        cls[variant],
      ])}
      {...props}
    >
      {children}
    </Link>
  );
};
