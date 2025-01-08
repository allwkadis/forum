import { useTranslation } from "react-i18next";
import { classNames } from "../../../shared/lib";

import cls from './LangSwitcher.module.css'

export const LangSwitcher = () => {
  const { i18n } = useTranslation();

  type lang = "en" | "ru";

  const toogleLang = (e: React.ChangeEvent<HTMLSelectElement>) =>
    i18n.changeLanguage(e.target.value as lang);

  return (
    <select onChange={toogleLang} defaultValue={i18n.language} className={classNames(cls.LangSwither, {})}>
      <option>ru</option>
      <option>en</option>
    </select>
  );
};
