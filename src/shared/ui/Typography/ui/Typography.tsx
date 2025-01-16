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

type TypographyAlign = "left" | "right" | "center";

interface TypographyProps {
  children: React.ReactNode;
  variant?: TypographyVariant;
  additionalClass?: string;
  color?: TypographyColor;
  align?: TypographyAlign;
}

export const Typography = ({
  children,
  variant = "body1",
  color = "primary",
  align = "left",
  additionalClass,
}: TypographyProps) => {
  return (
    <p
      className={classNames(cls.Typography, {}, [
        cls[variant],
        cls[color],
        cls[align],
        additionalClass,
      ])}
    >
      {children}
    </p>
  );
};
