import { ButtonHTMLAttributes } from "react";
import { classNames } from "../../../lib";

import cls from "./Button.module.css";

type ButtonVariant = "outlined" | "text";
type ButtonSize = "large" | "medium" | "small";
interface IButtonsProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  additionalClass?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export const Button = ({
  children,
  additionalClass,
  variant = "outlined",
  size = "medium",
  ...addProps
}: IButtonsProps) => {
  return (
    <button
      type="button"
      {...addProps}
      className={classNames(cls.Button, {}, [
        additionalClass as string,
        cls[variant as string],
        cls[size as string],
      ])}
    >
      {children}
    </button>
  );
};
