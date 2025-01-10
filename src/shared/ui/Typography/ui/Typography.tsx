import { classNames } from "../../../lib";

import cls from "./Typography.module.css";

type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "subtitle1"
  | "subtitle2"
  | "body1"
  | "body2";

type TypographyColor = "red" | "primary" | "secondary";

interface TypographyProps {
  children: React.ReactNode;
  variant?: TypographyVariant;
  additionalClass?: string;
  color?: TypographyColor;
}

export const Typography = ({
  children,
  variant = "body1",
  color = "primary",
  additionalClass,
}: TypographyProps) => {
  return (
    <p
      className={classNames(cls.Typography, {}, [
        cls[variant],
        cls[color],
        additionalClass as string,
      ])}
    >
      {children}
    </p>
  );
};
