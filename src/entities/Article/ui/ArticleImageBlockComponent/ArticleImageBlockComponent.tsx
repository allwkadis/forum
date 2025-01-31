import { memo } from "react";
import cls from "./ArticleImageBlockComponent.module.css";
import { ArticleImageBlock } from "../../model/types/article";
import { classNames } from "../../../../shared/lib";
import { Typography } from "../../../../shared/ui/Typography";

interface ArticleImageBlockComponentProps {
  additionalClass?: string;
  block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo(
  ({ block, additionalClass }: ArticleImageBlockComponentProps) => {
    return (
      <div
        className={classNames(cls.ArticleImageBlockComponent, {}, [
          additionalClass,
        ])}
      >
        <img src={block.src} className={cls.img} alt={block.title} />
        {block.title && <Typography>{block.title}</Typography>}
      </div>
    );
  }
);
