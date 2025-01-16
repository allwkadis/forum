import { useTranslation } from "react-i18next";
import { profileSelectors } from "../..";
import { useAppSelector } from "../../../../app/providers/StoreProvider";
import { classNames } from "../../../../shared/lib";

import cls from "./ProfileCard.module.css";
import { Typography } from "../../../../shared/ui/Typography";
import { Button } from "../../../../shared/ui/Button";
import { Input } from "../../../../shared/ui/Input";
import { Spinner } from "../../../../shared/ui/Spinner";
interface ProfileCardProps {
  additionsClass?: string;
}

export const ProfileCard = ({ additionsClass }: ProfileCardProps) => {
  const { t } = useTranslation("ProfilePage");

  const profileData = useAppSelector(profileSelectors.selectProfileData);
  const profileIsLoading = useAppSelector(
    profileSelectors.selectProfileLoading
  );
  const profileError = useAppSelector(profileSelectors.selectProfileError);

  // if (profileIsLoading) return <Spinner />;

  return (
    <div className={classNames(cls.ProfileCard, {}, [additionsClass])}>
      <div className={cls.profile_header}>
        <Typography variant="h1">{t("Профиль")}</Typography>
        <Button>{t("Редактировать")}</Button>
      </div>
      <div className={cls.profile_data}>
        <Input placeholder={t("Никнейм")} value={profileData?.username} />
        <Input placeholder={t("Имя")} value={profileData?.firstName} />
        <Input placeholder={t("Фамилия")} value={profileData?.lastName} />
      </div>
    </div>
  );
};
