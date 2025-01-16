import { useTranslation } from "react-i18next";
import { classNames } from "../../../shared/lib";

import cls from "./ProfilePage.module.css";
import { useEffect } from "react";
import { useAppDispatch } from "../../../app/providers/StoreProvider";
import { ProfileCard, fetchProfileData } from "../../../entities/Profile";

interface ProfilePageProps {
  additionalClass?: string;
}

const ProfilePage = ({ additionalClass }: ProfilePageProps) => {
  const { t } = useTranslation("ProfilePage");

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchProfileData())
  }, [])


  return (
    <div
      className={classNames(cls.ProfilePage, {}, [additionalClass])}
    >
      <ProfileCard />
    </div>
  );
};

export default ProfilePage;
