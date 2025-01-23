import { Typography } from "../../../../shared/ui/Typography";
import { Button } from "../../../../shared/ui/Button";
import { useTranslation } from "react-i18next";
import { classNames } from "../../../../shared/lib";

import cls from "./ProfilePageHeader.module.css";
import { useAppDispatch } from "../../../../app/providers/StoreProvider";
import {
  profileActions,
  updateProfileData,
} from "../../../../entities/Profile";
import { useCallback } from "react";

interface ProfilePageHeaderProps {
  addintionalClass?: string;
  readonly: boolean;
}

export const ProfilePageHeader = ({
  addintionalClass,
  readonly,
}: ProfilePageHeaderProps) => {
  const { t } = useTranslation("ProfilePage");
  const dispatch = useAppDispatch();

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <div className={classNames(cls.Profile_header, {}, [addintionalClass])}>
      <Typography variant="h1">{t("Профиль")}</Typography>
      {readonly ? (
        <Button onClick={onEdit}>{t("Редактировать")}</Button>
      ) : (
        <div className={cls.edit_btn}>
          <Button onClick={onSave}>{t("Cохранить")}</Button>
          <Button onClick={onCancelEdit} variant="outlined-red">
            {t("Отменить")}
          </Button>
        </div>
      )}
    </div>
  );
};
