import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { Select } from "../../../../shared/ui/Select";
import { Currency } from "../..";
import { classNames } from "../../../../shared/lib";

interface CurrencySelectProps {
  additionalClass?: string;
  value?: Currency;
  readonly?: boolean;
  onChange?: (value: Currency) => void;
}

const currencyOptions = [
  { value: "RUB", content: "RUB" },
  { value: "EUR", content: "EUR" },
  { value: "USD", content: "USD" },
];

export const CurrencySelect = memo(
  ({ additionalClass, value, readonly, onChange }: CurrencySelectProps) => {
    const { t } = useTranslation("ProfilePage");

    const onChangeHandler = useCallback(
      (value: string) => {
        onChange?.(value as Currency);
      },
      [onChange]
    );

    return (
      <Select
        readonly={readonly}
        value={value}
        label={t("Укажите Валюту")}
        options={currencyOptions}
        onChange={onChangeHandler}
        additionalClass={classNames("", {}, [additionalClass])}
      />
    );
  }
);
