import { classNames } from "../../../shared/lib";
import { Spinner } from "../../../shared/ui/Spinner";
import cls from "./PageLoader.module.css";

export const PageLoader = () => {
  return (
    <div className={classNames(cls.PageLoader, {}, [])}>
      <Spinner />
    </div>
  );
};
