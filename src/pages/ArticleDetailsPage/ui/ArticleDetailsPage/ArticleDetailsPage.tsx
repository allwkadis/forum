import { useTranslation } from "react-i18next";
import { classNames } from "../../../../shared/lib";
import cls from "./ArticleDetailsPage.module.css";
import { memo } from "react";

interface ArticleDetailsPageProps {
  additionalClass: string;
}

const ArticleDetailsPage = ({
  additionalClass,
}: ArticleDetailsPageProps) => {
  const { t } = useTranslation("articleDetails");

  return (
    <div className={classNames(cls.ArticleDetailsPage, {}, [additionalClass])}>
      ArticleDetailsPage
    </div>
  );
};


export default memo(ArticleDetailsPage)