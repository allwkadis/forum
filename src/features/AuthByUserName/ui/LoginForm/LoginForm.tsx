import { useTranslation } from "react-i18next";
import { classNames } from "../../../../shared/lib";
import cls from "./LoginForm.module.css";
import { Button } from "../../../../shared/ui/Button";
import { Input } from "../../../../shared/ui/Input";

export const LoginForm = () => {
  const { t } = useTranslation("LoginForm");

  return (
    <div className={classNames(cls.LoginForm)}>
      <div className={cls.inputs}>
        <Input type="text" />
        <Input type="text" />
      </div>
      <Button className={cls.loginBtn}>{t("Войти")}</Button>
    </div>
  );
};
