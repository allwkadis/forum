import { useCallback, useEffect } from "react";

import {
  useAppDispatch,
  useAppSelector,
} from "../../../app/providers/StoreProvider";
import {
  ProfileCard,
  fetchProfileData,
  profileActions,
  profileSelectors,
} from "../../../entities/Profile";
import { classNames } from "../../../shared/lib";
import { ProfilePageHeader } from "./ProfilePageHeader/ProfilePageHeader";

import cls from "./ProfilePage.module.css";
import { Currency } from "../../../entities/Currency";
import { Country } from "../../../entities/Country";

interface ProfilePageProps {
  additionalClass?: string;
}

const ProfilePage = ({ additionalClass }: ProfilePageProps) => {
  const dispatch = useAppDispatch();
  const profileData = useAppSelector(profileSelectors.selectFormData);
  const profileIsLoading = useAppSelector(
    profileSelectors.selectProfileLoading
  );
  const profileError = useAppSelector(profileSelectors.selectProfileError);
  const readonly = useAppSelector(profileSelectors.selectProfileReadonly);

  const onChangeUserName = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ username: value ?? "" }));
  }, []);

  const onChangeFirstName = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ firstName: value ?? "" }));
  }, []);

  const onChangeLastName = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ lastName: value ?? "" }));
  }, []);

  const onChangeCity = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ city: value ?? "" }));
  }, []);

  const onChangeAvatar = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ avatar: value ?? "" }));
  }, []);

  const onChangeAge = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ age: Number(value) ?? 0 }));
  }, []);

  const onChangeCurrency = useCallback((currency?: Currency) => {
    dispatch(profileActions.updateProfile({ currency: currency }));
  }, []);

  const onChangeCountry = useCallback((currency?: Country) => {
    dispatch(profileActions.updateProfile({ country: currency }));
  }, []);

  useEffect(() => {
    dispatch(fetchProfileData());
  }, []);

  return (
    <div className={classNames(cls.ProfilePage, {}, [additionalClass])}>
      <ProfilePageHeader readonly={readonly} />
      <ProfileCard
        data={profileData}
        isLoading={profileIsLoading}
        error={profileError}
        readonly={readonly}
        onChangeFirstName={onChangeFirstName}
        onChangeLasstName={onChangeLastName}
        onChangeAge={onChangeAge}
        onChangeAvatar={onChangeAvatar}
        onChangeCity={onChangeCity}
        onChangeUserName={onChangeUserName}
        onChangeCurrency={onChangeCurrency}
        onChangeCountry={onChangeCountry}
      />
    </div>
  );
};

export default ProfilePage;
