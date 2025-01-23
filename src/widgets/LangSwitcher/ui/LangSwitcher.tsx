import { useTranslation } from "react-i18next";
import { memo } from "react";

import { classNames } from "../../../shared/lib";

import cls from "./LangSwitcher.module.css";

type lang = "en" | "ru";
interface langOption {
  lang: lang;
  id: number;
}

const lagns: langOption[] = [
  { lang: "ru", id: 1 },
  { lang: "en", id: 2 },
];

export const LangSwitcher = memo(() => {
  const { i18n } = useTranslation();

  const toogleLang = (e: React.ChangeEvent<HTMLSelectElement>) =>
    i18n.changeLanguage(e.target.value as lang);

  return (
    <select
      onChange={toogleLang}
      defaultValue={i18n.language}
      className={classNames(cls.LangSwither, {})}
    >
      {lagns.map((lang) => {
        return <option key={lang.id}>{lang.lang}</option>;
      })}
    </select>
  );
});
