import { useTranslation } from "react-i18next";
import { Profile } from "../..";

import { classNames } from "../../../../shared/lib";

import cls from "./ProfileCard.module.css";
import { Typography } from "../../../../shared/ui/Typography";
import { Button } from "../../../../shared/ui/Button";
import { Input } from "../../../../shared/ui/Input";
import { Spinner } from "../../../../shared/ui/Spinner";
import { PageLoader } from "../../../../widgets/PageLoader/ui/PageLoader";

interface ProfileCardProps {
  additionsClass?: string;
  data?: Profile;
  isLoading?: boolean;
  error?: string;
}

export const ProfileCard = ({
  data,
  isLoading,
  error,
  additionsClass,
}: ProfileCardProps) => {
  const { t } = useTranslation("ProfilePage");

  if (isLoading) {
    return (
      <div
        className={classNames(cls.ProfileCard, {}, [
          cls.loading,
          additionsClass,
        ])}
      >
        <Typography align="center">
          <Spinner />
        </Typography>
      </div>
    );
  }

  if (error) {
    return (
      <div
        className={classNames(cls.ProfileCard, {}, [cls.error, additionsClass])}
      >
        <Typography color="red" variant="h3" align="center">
          {error}
        </Typography>
      </div>
    );
  }

  return (
    <div className={classNames(cls.ProfileCard, {}, [additionsClass])}>
      <div className={cls.profile_data}>
        <Input placeholder={t("Никнейм")} value={data?.username} />
        <Input placeholder={t("Имя")} value={data?.firstName} />
        <Input placeholder={t("Фамилия")} value={data?.lastName} />
      </div>
    </div>
  );
};
