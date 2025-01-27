import { InputHTMLAttributes, memo, useEffect, useState } from "react";
import { classNames } from "../../../lib";

import cls from "./Input.module.css";

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange"
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  placeholder?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  autofocus?: boolean;
}

const CORET_POSTION_FACTOR = 8;

export const Input = memo(
  ({
    className,
    type = "text",
    value,
    onChange,
    placeholder,
    autofocus,
    ...otherProps
  }: InputProps) => {
    const [isFocused, setIsFocused] = useState(false);
    const [coretPosition, setCoretPosition] = useState(0);
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value);
      setCoretPosition(e.target.value.length);
    };

    const onFocusHandler = () => setIsFocused(true);
    const onBlurHandler = () => setIsFocused(false);
    const onSelectHandler = (e: any) =>
      setCoretPosition(e.target.selectionStart || 0);

    useEffect(() => {
      if (autofocus) setIsFocused(true);
    }, [autofocus]);

    return (
      <div className={classNames(cls.InputWrapper, {}, [className])}>
        <div className={cls.caretWrapper}>
          {placeholder && (
            <div className={cls.placeholder}>{placeholder + ":"}</div>
          )}
          <div className={cls.input}>
            <input
              type={type}
              value={value}
              onChange={onChangeHandler}
              className={cls.Input}
              onFocus={onFocusHandler}
              onBlur={onBlurHandler}
              onSelect={onSelectHandler}
              {...otherProps}
            />
            {isFocused && (
              <span
                className={cls.caret}
                style={{ left: `${coretPosition * CORET_POSTION_FACTOR}px` }}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
);
