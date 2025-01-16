import { useTranslation } from "react-i18next";
import { useEffect } from "react";

import {
  useAppDispatch,
  useAppSelector,
} from "../../../app/providers/StoreProvider";
import {
  ProfileCard,
  fetchProfileData,
  profileSelectors,
} from "../../../entities/Profile";
import { classNames } from "../../../shared/lib";

import cls from "./ProfilePage.module.css";
import { ProfilePageHeader } from "./ProfilePageHeader/ProfilePageHeader";

interface ProfilePageProps {
  additionalClass?: string;
}

const ProfilePage = ({ additionalClass }: ProfilePageProps) => {
  const { t } = useTranslation("ProfilePage");

  const dispatch = useAppDispatch();
  const profileData = useAppSelector(profileSelectors.selectProfileData);
  const profileIsLoading = useAppSelector(
    profileSelectors.selectProfileLoading
  );
  const profileError = useAppSelector(profileSelectors.selectProfileError);

  useEffect(() => {
    dispatch(fetchProfileData());
  }, []);

  return (
    <div className={classNames(cls.ProfilePage, {}, [additionalClass])}>
      <ProfilePageHeader />
      <ProfileCard
        data={profileData}
        isLoading={profileIsLoading}
        error={profileError}
      />
    </div>
  );
};

export default ProfilePage;
