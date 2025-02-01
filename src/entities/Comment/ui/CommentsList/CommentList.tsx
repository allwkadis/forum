import { useTranslation } from "react-i18next";
import { Comment } from "../..";
import { classNames } from "../../../../shared/lib";
import cls from "./CommentList.module.css";
import { CoomentItem } from "../CommentItem/CoomentItem";
import { Typography } from "../../../../shared/ui/Typography";

interface CommentListProps {
  additionalClass?: string;
  comments?: Comment[];
  isLoading?: boolean;
}

export const CommentList = ({
  comments,
  isLoading,
  additionalClass,
}: CommentListProps) => {
  const { t } = useTranslation("articleDetails");

  return (
    <div className={classNames(cls.CommentList, {}, [additionalClass])}>
      {comments?.length ? (
        comments.map((comment) => <CoomentItem comment={comment} />)
      ) : (
        <Typography>{t("Комментарии отсутсвуют")}</Typography>
      )}
    </div>
  );
};
