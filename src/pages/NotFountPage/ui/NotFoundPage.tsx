import { useTranslation } from "react-i18next";

import { classNames } from "../../../shared/lib/classNames";
import cls from "./NotFoundPage.module.css";
import { useEffect } from "react";

export const NotFoundPage = () => {
  const { t } = useTranslation("not-found");

  useEffect(() => {
    throw new Error("test");
  }, []);

  return (
    <div className={classNames(cls.NotFoundPage, {}, [])}>
      {t("страница не найдена")}
    </div>
  );
};
