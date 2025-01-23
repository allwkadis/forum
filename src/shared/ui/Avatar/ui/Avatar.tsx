import { classNames } from "../../../lib";
import cls from "./Avatar.module.css";

interface AvatarProps {
  src?: string;
  size?: number;
  alt?: string;
  additionalClass?: string;
}

export const Avatar = ({
  additionalClass,
  src,
  size = 100 ,
  alt,
}: AvatarProps) => {
  return (
    <img
      className={classNames(cls.Avatar, {}, [additionalClass])}
      src={src}
      alt={alt}
      width={size}
      height={size}
    />
  );
};
