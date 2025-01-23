import { ChangeEvent, memo, useMemo } from "react";
import { classNames } from "../../../lib";
import cls from "./Select.module.css";

interface selectOptions {
  content: string;
  value: string;
}

interface SelectProps {
  additionalClass?: string;
  label?: string;
  options?: selectOptions[];
  value?: string;
  readonly?: boolean;
  onChange?: (value: string) => void;
}

export const Select = memo(
  ({
    label,
    options,
    value,
    readonly,
    onChange,
    additionalClass,
  }: SelectProps) => {
    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
      onChange?.(e.target.value);
    };

    const optionsList = useMemo(
      () =>
        options?.map((option) => (
          <option value={option.value} key={option.value}>
            {option.content}
          </option>
        )),
      [options]
    );

    return (
      <div className={classNames(cls.Select_wrapper, {}, [additionalClass])}>
        {label && <span className={cls.label}>{label + ":"}</span>}
        <select
          value={value}
          className={cls.Select}
          onChange={onChangeHandler}
          disabled={readonly}
        >
          {optionsList}
        </select>
      </div>
    );
  }
);
