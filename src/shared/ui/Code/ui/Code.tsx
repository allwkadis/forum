import { classNames } from "../../../lib";
import { Button } from "../../Button";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import cls from "./Code.module.css";
import { useCallback } from "react";

interface CodeProps {
  additionalClass?: string;
  text: string;
}

export const Code = ({ text, additionalClass }: CodeProps) => {
  const onCopyHandler = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre className={classNames(cls.Code, {}, [additionalClass])}>
      <Button
        additionalClass={cls.copy_btn}
        variant="text"
        onClick={onCopyHandler}
      >
        {<FileCopyIcon />}
      </Button>
      <code>{text}</code>
    </pre>
  );
};
