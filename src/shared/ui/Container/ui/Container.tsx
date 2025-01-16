import { classNames } from "../../../lib";

import cls from "./Container.module.css";

interface IContainerProps {
  className?: string;
  children: React.ReactNode;
}

export const Container = ({ className, children }: IContainerProps) => {
  return (
    <div className={classNames(cls.Container, {}, [className])}>
      {children}
    </div>
  );
};
