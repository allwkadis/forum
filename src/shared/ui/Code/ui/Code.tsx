import { classNames } from "../../../lib";
import { Button } from "../../Button";
import cls from "./Code.module.css";

interface CodeProps {
  additionalClass?: string;
  children: React.ReactNode;
}

export const Code = ({ children, additionalClass }: CodeProps) => {
  return (
    <pre className={classNames(cls.Code, {}, [additionalClass])}>
      <Button additionalClass={cls.copy_btn}>копировать</Button>
      <code>{children}</code>
    </pre>
  );
};
