import { useTranslation } from "react-i18next";

import { classNames } from "../../../../shared/lib";
import { Profile } from "../..";
import { Typography } from "../../../../shared/ui/Typography";
import { Input } from "../../../../shared/ui/Input";
import { Spinner } from "../../../../shared/ui/Spinner";

import { Avatar } from "../../../../shared/ui/Avatar";
import { Currency, CurrencySelect } from "../../../Currency";
import { Country, CountrySelect } from "../../../Country";

import cls from "./ProfileCard.module.css";

interface ProfileCardProps {
  additionsClass?: string;
  data?: Profile;
  isLoading?: boolean;
  error?: string;
  readonly: boolean;
  onChangeUserName: (value: string) => void;
  onChangeFirstName: (value?: string) => void;
  onChangeLasstName: (value?: string) => void;
  onChangeCity: (value?: string) => void;
  onChangeAvatar: (value?: string) => void;
  onChangeAge: (value?: string) => void;
  onChangeCurrency: (currency?: Currency) => void;
  onChangeCountry: (country?: Country) => void;
}

export const ProfileCard = ({
  data,
  isLoading,
  error,
  additionsClass,
  readonly,
  onChangeUserName,
  onChangeFirstName,
  onChangeLasstName,
  onChangeAge,
  onChangeCity,
  onChangeAvatar,
  onChangeCurrency,
  onChangeCountry,
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
        {data?.avatar && (
          <div className={cls.Avatar_wrapper}>
            <Avatar alt="avatar" src={data.avatar} size={200} />
          </div>
        )}
        <Input
          placeholder={t("Никнейм")}
          value={data?.username}
          onChange={onChangeUserName}
          disabled={readonly}
        />
        <Input
          placeholder={t("Имя")}
          value={data?.firstName}
          onChange={onChangeFirstName}
          disabled={readonly}
        />
        <Input
          placeholder={t("Фамилия")}
          value={data?.lastName}
          onChange={onChangeLasstName}
          disabled={readonly}
        />
        <Input
          placeholder={t("Возраст")}
          value={data?.age}
          onChange={onChangeAge}
          disabled={readonly}
          type="number"
        />
        <Input
          placeholder={t("Город")}
          value={data?.city}
          onChange={onChangeCity}
          disabled={readonly}
        />
        <Input
          placeholder={t("Аватар")}
          value={data?.avatar}
          onChange={onChangeAvatar}
          disabled={readonly}
        />
        <CurrencySelect
          value={data?.currency}
          onChange={onChangeCurrency}
          readonly={readonly}
        />
        <CountrySelect
          value={data?.country}
          onChange={onChangeCountry}
          readonly={readonly}
        />
      </div>
    </div>
  );
};
