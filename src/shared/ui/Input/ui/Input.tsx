import { InputHTMLAttributes, memo } from "react";
import { classNames } from "../../../lib";

import cls from "./Input.module.css";

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange"
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export const Input = memo(
  ({
    className,
    type = "text",
    value,
    onChange,
    placeholder,
    ...otherProps
  }: InputProps) => {
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
      onChange?.(e.target.value);

    return (
      <div className={classNames(cls.InputWrapper, {}, [className as string])}>
        <input
          type={type}
          value={value}
          onChange={onChangeHandler}
          className={cls.Input}
          {...otherProps}
        />
      </div>
    );
  }
);
