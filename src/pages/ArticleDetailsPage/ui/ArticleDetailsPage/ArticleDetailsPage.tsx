import { useTranslation } from "react-i18next";
import { classNames } from "../../../../shared/lib";
import cls from "./ArticleDetailsPage.module.css";
import { memo, useEffect } from "react";
import { ArticleDetails } from "../../../../entities/Article";
import { useParams } from "react-router";
import { CommentList } from "../../../../entities/Comment";
import { Typography } from "../../../../shared/ui/Typography";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../app/providers/StoreProvider";
import {
  ArticleDetailsCommentsSelectors,
  ArticleDetailsCommentsSlice,
  getArticleComments,
} from "../../model/slice/ArticleDetailsCommentsSlice";
import { fetchCommentsbyArticleId } from "../../model/services/FetchCommentsByArticleId";

interface ArticleDetailsPageProps {
  additionalClass: string;
}

const ArticleDetailsPage = ({ additionalClass }: ArticleDetailsPageProps) => {
  const { t } = useTranslation("articleDetails");
  const { id: ArticleId } = useParams();
  const dispatch = useAppDispatch();
  const comments = useAppSelector(getArticleComments.selectAll);
  const error = useAppSelector(ArticleDetailsCommentsSelectors.selectIsLoading);
  const loading = useAppSelector(
    ArticleDetailsCommentsSelectors.selectIsLoading
  );

  if (!ArticleId) {
    return (
      <div
        className={classNames(cls.ArticleDetailsPage, {}, [additionalClass])}
      >
        {t("Статья не найдена!")}
      </div>
    );
  }

  useEffect(() => {
    dispatch(fetchCommentsbyArticleId(ArticleId));
  }, []);

  return (
    <div className={classNames(cls.ArticleDetailsPage, {}, [additionalClass])}>
      <ArticleDetails id={ArticleId} />
      <div className={cls.ArticleDetailsPage_comments}>
        <Typography variant="h2">{t("Комментарии")}</Typography>
        <CommentList comments={comments} />
      </div>
    </div>
  );
};

export default memo(ArticleDetailsPage);
