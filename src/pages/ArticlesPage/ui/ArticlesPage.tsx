import { useTranslation } from "react-i18next";
import cls from "./ArticlesPage.module.css";
import { classNames } from "../../../shared/lib";
import { memo } from "react";

interface ArticlePageProps {
  additionalClass: string;
}

const ArticlesPage = ({ additionalClass }: ArticlePageProps) => {
  const { t } = useTranslation("articlesPage");

  return (
    <div className={classNames(cls.ArticlesPage, {}, [additionalClass])}>
      ArticlesPage
    </div>
  );
};

export default memo(ArticlesPage);
