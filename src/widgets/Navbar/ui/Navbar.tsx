import { memo, useCallback, useState } from "react";
import { classNames } from "../../../shared/lib/classNames";

import cls from "./Navbar.module.css";
import { useTranslation } from "react-i18next";

import { LoginModal } from "../../../features/AuthByUserName";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../app/providers/StoreProvider";
import { userActions, userSelectors } from "../../../entities/User";
import { Button } from "../../../shared/ui/Button";

interface INavbarProprs {
  className?: string;
}

export const Navbar = memo(({ className }: INavbarProprs) => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const dispatch = useAppDispatch();
  const authData = useAppSelector(userSelectors.selectAuthData);
  const { t } = useTranslation("navbar");

  const onCloseModal = useCallback(() => {
    setIsAuthModalOpen(false);
  }, [isAuthModalOpen]);

  const onShowModal = useCallback(() => {
    setIsAuthModalOpen(true);
  }, [isAuthModalOpen]);

  const onLogout = useCallback(() => {
    dispatch(userActions.logOut());
    setIsAuthModalOpen(false);
  }, []);

  if (authData) {
    return (
      <div className={classNames(cls.navbar, {}, [className as string])}>
        <p>FORUM</p>
        <div className={cls["navbar-nav"]}>
          <nav>
            <ul>
              <li onClick={onLogout}>
                <Button variant="text">{t("Выйти")}</Button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }

  return (
    <div className={classNames(cls.navbar, {}, [className as string])}>
      <p>FORUM</p>
      <div className={cls["navbar-nav"]}>
        <nav>
          <ul>
            <li onClick={onShowModal}>
              <Button variant="text">{t("Войти")}</Button>
            </li>
          </ul>
        </nav>
      </div>
      <LoginModal isOpen={isAuthModalOpen} onClose={onCloseModal} />
    </div>
  );
});
