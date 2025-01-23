import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";

import { Select } from "../../../../shared/ui/Select";
import { Country } from "../..";
import { classNames } from "../../../../shared/lib";

interface CountrySelectProps {
  additionalClass?: string;
  value?: Country;
  readonly?: boolean;
  onChange?: (value: Country) => void;
}

const currencyOptions = [
  { value: "RUSSIA", content: "Russia" },
  { value: "USA", content: "United States of America" },
  { value: "UNITED_KINGDOM", content: "United Kingdom" },
  { value: "KAZAHSTAN", content: "Kazahstan" },
  { value: "BELARUS", content: "Belarus" },
  { value: "FRANCE", content: "France" },
  { value: "SPAIN", content: "Spain" },
];

export const CountrySelect = memo(
  ({ additionalClass, value, readonly, onChange }: CountrySelectProps) => {
    const { t } = useTranslation("ProfilePage");

    const onChangeHandler = useCallback(
      (value: string) => {
        onChange?.(value as Country);
      },
      [onChange]
    );

    return (
      <Select
        readonly={readonly}
        value={value}
        label={t("Выберите страну")}
        options={currencyOptions}
        onChange={onChangeHandler}
        additionalClass={classNames("", {}, [additionalClass])}
      />
    );
  }
);
