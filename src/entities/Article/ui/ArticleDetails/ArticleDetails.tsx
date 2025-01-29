import { memo, useEffect } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../app/providers/StoreProvider";
import { fetchArticleById } from "../../model/services/FetchArticleById";
import { ArticleDetailsSelectors } from "../../model/slice/ArticleDetailsSlice";

import cls from "./ArticleDetails.module.css";
import { classNames } from "../../../../shared/lib";
import { Typography } from "../../../../shared/ui/Typography";
import { useTranslation } from "react-i18next";
interface ArticleDetailsProps {
  id: string;
  additionalClass?: string;
}

export const ArticleDetails = memo(
  ({ id, additionalClass }: ArticleDetailsProps) => {
    const { t } = useTranslation("articleDetails");
    const dispatch = useAppDispatch();
    const loading = useAppSelector(
      ArticleDetailsSelectors.selectArticaleDetailsLoading
    );
    const error = useAppSelector(
      ArticleDetailsSelectors.selectArticaleDetailError
    );
    const data = useAppSelector(
      ArticleDetailsSelectors.selectArticaleDetailsData
    );

    useEffect(() => {
      dispatch(fetchArticleById(id));
    }, [id]);

    if (loading)
      return (
        <div>
          <Typography align="center" variant="h2">
            loading...
          </Typography>
        </div>
      );

    if (error)
      return (
        <div>
          <Typography variant="h2" color="red" align="center">
            {t("Произошла ошибка при загрузке статьи")}
          </Typography>
        </div>
      );

    return (
      <div className={classNames(cls.ArticleDetails, {}, [additionalClass])}>
        ArticleDetails
      </div>
    );
  }
);
