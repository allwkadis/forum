import { EntityState } from "@reduxjs/toolkit";
import { Comment } from "../../../../entities/Comment";

export interface ArticleDetailsCommentShema
  extends EntityState<Comment, string> {
  isLoading?: boolean;
  error?: string;
}
