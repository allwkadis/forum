import { useTranslation } from "react-i18next";
import { classNames } from "../../../../shared/lib";
import cls from "./ArticleDetailsPage.module.css";
import { memo } from "react";
import { ArticleDetails } from "../../../../entities/Article";
import { useParams } from "react-router";

interface ArticleDetailsPageProps {
  additionalClass: string;
}

const ArticleDetailsPage = ({ additionalClass }: ArticleDetailsPageProps) => {
  const { t } = useTranslation("articleDetails");
  const { id: ArticleId } = useParams();

  if (!ArticleId) {
    return (
      <div
        className={classNames(cls.ArticleDetailsPage, {}, [additionalClass])}
      >
        {t("Статья не найдена!")}
      </div>
    );
  }

  return (
    <div className={classNames(cls.ArticleDetailsPage, {}, [additionalClass])}>
      <ArticleDetails id={ArticleId} />
    </div>
  );
};

export default memo(ArticleDetailsPage);
