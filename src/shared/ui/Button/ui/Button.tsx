import { ButtonHTMLAttributes } from "react";
import { classNames } from "../../../lib";

import cls from "./Button.module.css";

type ButtonVariant = "outlined" | "text";
type ButtonSize = "large" | "medium" | "small";

interface IButtonsProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  additionalClass?: string;
  square?: boolean;
}

export const Button = ({
  children,
  additionalClass,
  variant = "outlined",
  size = "medium",
  square = false,
  ...addProps
}: IButtonsProps) => {
  return (
    <button
      type="button"
      className={classNames(
        cls.Button,
        {
          [cls.square]: square,
        },
        [additionalClass, cls[variant], cls[size]]
      )}
      {...addProps}
    >
      {children}
    </button>
  );
};
