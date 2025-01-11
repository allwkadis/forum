import { useTranslation } from "react-i18next";
import { classNames } from "../../../shared/lib";

import cls from "./ProfilePage.module.css";

interface ProfilePageProps {
  additionalClass?: string;
}

const ProfilePage = ({ additionalClass }: ProfilePageProps) => {
  const { t } = useTranslation("ProfilePage");

  return (
    <div
      className={classNames(cls.ProfilePage, {}, [additionalClass as string])}
    >
      ProfilePage
    </div>
  );
};

export default ProfilePage;
