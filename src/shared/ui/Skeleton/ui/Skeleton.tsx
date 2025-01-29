import { CSSProperties } from "react";
import { classNames } from "../../../lib";
import cls from "./Skeleton.module.css";

interface SkeletonProps {
  additionalClass?: string;
  height?: string | number;
  width?: string | number;
  border?: string;
}

export const Skeleton = ({
  height,
  width,
  border,
  additionalClass,
}: SkeletonProps) => {
  const styles: CSSProperties = {
    width,
    height,
    borderRadius: border,
  };

  return (
    <div
      className={classNames(cls.Skeleton, {}, [additionalClass])}
      style={styles}
    >
      Skeleton
    </div>
  );
};
