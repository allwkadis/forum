import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";

import { classNames } from "../../../../shared/lib";
import { Button } from "../../../../shared/ui/Button";
import { Input } from "../../../../shared/ui/Input";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../app/providers/StoreProvider";
import { LoginActions, LoginSelectors } from "../..";
import { loginByUserName } from "../../model/services/loginByUserName/loginByUserName";

import cls from "./LoginForm.module.css";
import { Typography } from "../../../../shared/ui/Typography";

export const LoginForm = memo(() => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation("LoginForm");
  const { selectUserName, selectPassword, selectIsLoading, selectError } =
    LoginSelectors;

  const loginNameValue = useAppSelector(selectUserName);
  const loginPassword = useAppSelector(selectPassword);
  const loginIsLoadingValue = useAppSelector(selectIsLoading);
  const loginError = useAppSelector(selectError);
  const onChangeUserName = useCallback(
    (value: string) => {
      dispatch(LoginActions.setUserName(value));
    },
    [dispatch]
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(LoginActions.setPassword(value));
    },
    [dispatch]
  );

  const onLoginSubmit = useCallback(() => {
    dispatch(
      loginByUserName({ username: loginNameValue, password: loginPassword })
    );
  }, [dispatch, loginNameValue, loginPassword]);

  return (
    <div className={classNames(cls.LoginForm)}>
      <Typography variant="subtitle1" additionalClass={cls["login-title"]}>
        {t("Форма авторизации")}
      </Typography>
      {loginError && (
        <Typography
          color="red"
          variant="subtitle1"
        >{`Error: ${loginError}`}</Typography>
      )}
      <div className={cls.inputs}>
        <label>
          {t("Логин")}
          <Input
            type="text"
            onChange={onChangeUserName}
            value={loginNameValue}
          />
        </label>
        <label>
          {t("Пароль")}
          <Input
            type="text"
            onChange={onChangePassword}
            value={loginPassword}
          />
        </label>
      </div>

      <Button
        additionalClass={cls.loginBtn}
        onClick={onLoginSubmit}
        disabled={loginIsLoadingValue}
      >
        {t("Войти")}
      </Button>
    </div>
  );
});
