import { useCallback, useState } from "react";
import { classNames } from "../../../shared/lib/classNames";

import cls from "./Navbar.module.css";
import { useTranslation } from "react-i18next";

import { LoginModal } from "../../../features/AuthByUserName";

interface INavbarProprs {
  className?: string;
}

export const Navbar = ({ className }: INavbarProprs) => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const onCloseModal = useCallback(() => {
    setIsAuthModalOpen((prev) => !prev);
  }, []);

  const { t } = useTranslation("navbar");

  return (
    <div className={classNames(cls.navbar, {}, [className as string])}>
      <p>FORUM</p>
      <div className={cls["navbar-nav"]}>
        <nav>
          <ul>
            <li onClick={onCloseModal}>{t("Войти")}</li>
          </ul>
        </nav>
      </div>
      <LoginModal isOpen={isAuthModalOpen} onClose={onCloseModal} />
    </div>
  );
};
