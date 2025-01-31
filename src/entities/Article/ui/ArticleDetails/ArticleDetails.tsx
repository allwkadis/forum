import { memo, useCallback, useEffect } from "react";
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
import { Avatar } from "../../../../shared/ui/Avatar";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { ArticleBlock, ArticleBlockType } from "../../model/types/article";
import { ArticleCodeBlockComponent } from "../ArticleCodeBlockComponent/ArticleCodeBlockComponent";
import { ArticleImageBlockComponent } from "../ArticleImageBlockComponent/ArticleImageBlockComponent";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";

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

    const renderBlocks = useCallback((block: ArticleBlock) => {
      switch (block.type) {
        case ArticleBlockType.CODE:
          return <ArticleCodeBlockComponent block={block} key={block.id} />;
        case ArticleBlockType.IMAGE:
          return <ArticleImageBlockComponent block={block} key={block.id} />;
        case ArticleBlockType.TEXT:
          return <ArticleTextBlockComponent block={block} key={block.id} />;
        default:
          return null;
      }
    }, []);

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
        <div className={cls.Avatar_wrapper}>
          <Avatar
            size={200}
            src={data?.img}
            additionalClass={cls.ArticleAvatar}
            alt="article-avatar"
          />
        </div>
        <Typography variant="h1" align="center">
          {data?.title}
        </Typography>
        <Typography variant="h3" align="center">
          {data?.subtitle}
        </Typography>
        <div className={cls.Article_information}>
          <div className={cls.Article_information__item}>
            <RemoveRedEyeIcon />
            <Typography>{data?.views}</Typography>
          </div>
          <div className={cls.Article_information__item}>
            <CalendarMonthIcon />
            <Typography>{data?.createdAt}</Typography>
          </div>
        </div>
        <div className={cls.Article_blocks}>
          {data?.blocks.map(renderBlocks)}
        </div>
      </div>
    );
  }
);
