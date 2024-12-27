import { useTranslation } from "react-i18next";

export const LangSwitcher = () => {
  const { i18n } = useTranslation();

  type lang = "en" | "ru";

  const toogleLang = (e: React.ChangeEvent<HTMLSelectElement>) =>
    i18n.changeLanguage(e.target.value as lang);

  return (
    <select onChange={toogleLang} defaultValue={i18n.language}>
      <option>ru</option>
      <option>en</option>
    </select>
  );
};
