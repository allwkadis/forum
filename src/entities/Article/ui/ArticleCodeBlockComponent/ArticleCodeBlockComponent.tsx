import { memo } from "react";
import cls from "./ArticleCodeBlockComponent.module.css";
import { ArticleCodeBlock } from "../../model/types/article";
import { Code } from "../../../../shared/ui/Code";
import { classNames } from "../../../../shared/lib";

interface ArticleCodeBlockComponentProps {
  additionalClass?: string;
  block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = memo(
  ({ block, additionalClass }: ArticleCodeBlockComponentProps) => {
    return (
      <div
        className={classNames(cls.ArticleCodeBlockComponent, {}, [
          additionalClass,
        ])}
      >
        <Code text={block.code} />
      </div>
    );
  }
);
