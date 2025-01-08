import { useTranslation } from "react-i18next";

import { classNames } from "../../../shared/lib/classNames";
import cls from "./NotFoundPage.module.css";

export const NotFoundPage = () => {
  const { t } = useTranslation("not-found");

  return (
    <div className={classNames(cls.NotFoundPage, {}, [])}>
      {t("страница не найдена")}
    </div>
  );
};
