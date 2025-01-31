import { memo } from "react";
import cls from "./ArticleTextBlockComponent.module.css";
import { ArticleTextBlock } from "../../model/types/article";
import { Typography } from "../../../../shared/ui/Typography";
import { classNames } from "../../../../shared/lib";

interface ArticleTextBlockComponentProps {
  additionalClass?: string;
  block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo(
  ({ block, additionalClass }: ArticleTextBlockComponentProps) => {
    return (
      <div className={classNames(cls.ArticleTextBlock, {}, [additionalClass])}>
        {block.title && (
          <Typography
            additionalClass={cls.ArticleTextBlockTitle}
            align="center"
            variant="subtitle1"
          >
            {block.title}
          </Typography>
        )}
        <div className={cls.paragraph_wrapper}>
          {block.paragraphs.map((paragraph, index) => (
            <Typography key={index} additionalClass={cls.paragraph}>
              {paragraph}
            </Typography>
          ))}
        </div>
      </div>
    );
  }
);
