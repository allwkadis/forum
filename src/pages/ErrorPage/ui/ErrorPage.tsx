import { useTranslation } from "react-i18next";

import { classNames } from "../../../shared/lib";
import { Button } from "../../../shared/ui/Button";

import cls from "./ErrorPage.module.css";

export const ErrorPage = () => {
  const { t } = useTranslation("error-page");

  const reloadPageHandler = () => location.reload();

  return (
    <div className={classNames(cls.ErrorPage, {}, [])}>
      <div className={classNames(cls["ErrorPage__content"])}>
        <h1>{t("произошла ошибка")} </h1>
        <Button variant="outlined" onClick={reloadPageHandler}>
          {t("обновить страницу")}
        </Button>
      </div>
    </div>
  );
};
