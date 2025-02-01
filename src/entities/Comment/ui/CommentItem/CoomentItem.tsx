import { memo } from "react";
import { classNames } from "../../../../shared/lib";
import cls from "./CoomentItem.module.css";
import { Comment } from "../..";
import { Avatar } from "../../../../shared/ui/Avatar";
import { Typography } from "../../../../shared/ui/Typography";

interface CoomentItemProps {
  additionalClass?: string;
  comment?: Comment;
  isLoading?: boolean;
}

export const CoomentItem = memo(
  ({ comment, isLoading, additionalClass }: CoomentItemProps) => {
    //сделать скелетоны 
    if (isLoading) {
      return (
        <div className={classNames(cls.CommentItem, {}, [additionalClass])}>
          loading...
        </div>
      );
    }

    return (
      <div className={classNames(cls.CommentItem, {}, [additionalClass])}>
        <div className={cls.userInfo}>
          {comment?.user.avatar ? (
            <Avatar size={30} src={comment?.user.avatar} />
          ) : null}
          <Typography variant="subtitle1">{comment?.user.username}</Typography>
        </div>
        <div className={cls.comment_content}>
          <Typography variant="body2">{comment?.text}</Typography>
        </div>
      </div>
    );
  }
);
