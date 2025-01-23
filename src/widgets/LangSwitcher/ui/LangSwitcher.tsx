import { useTranslation } from "react-i18next";
import { memo } from "react";

import { Select } from "../../../shared/ui/Select";

type lang = "en" | "ru";

const langs = [
  { value: "RU", content: "ru" },
  { value: "en", content: "en" },
];

export const LangSwitcher = memo(() => {
  const { i18n } = useTranslation();

  const toogleLang = (value: string) => i18n.changeLanguage(value as lang);

  return <Select options={langs} onChange={toogleLang} />;
});
