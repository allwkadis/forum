import { Typography } from "../../../../shared/ui/Typography";
import { Button } from "../../../../shared/ui/Button";
import cls from "./ProfilePageHeader.module.css";
import { useTranslation } from "react-i18next";
import { classNames } from "../../../../shared/lib";

interface ProfilePageHeaderProps {
  addintionalClass?: string;
}

export const ProfilePageHeader = ({
  addintionalClass,
}: ProfilePageHeaderProps) => {
  const { t } = useTranslation("ProfilePage");

  return (
    <div className={classNames(cls.Profile_header, {}, [addintionalClass])}>
      <Typography variant="h1">{t("Профиль")}</Typography>
      <Button>{t("Редактировать")}</Button>
    </div>
  );
};
