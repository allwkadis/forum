import { useCallback, useState } from "react";
import { classNames } from "../../../shared/lib/classNames";

import cls from "./Navbar.module.css";
import { useTranslation } from "react-i18next";
import { Modal } from "../../../shared/ui/Modal";

interface INavbarProprs {
  className?: string;
}

export const Navbar = ({ className }: INavbarProprs) => {
  const [authModal, setAuthModal] = useState(false);
  const onToogleModal = useCallback(() => {
    setAuthModal((prev) => !prev);
  }, []);
  const { t } = useTranslation("navbar");

  return (
    <div className={classNames(cls.navbar, {}, [className as string])}>
      <p>FORUM</p>
      <div className={cls["navbar-nav"]}>
        <nav>
          <ul>
            <li onClick={onToogleModal}>{t("Войти")}</li>
          </ul>
        </nav>
      </div>
      <Modal isOpen={authModal} onClose={onToogleModal}>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore quas
          debitis eos, ut ea accusantium facere! Laudantium, obcaecati voluptas
          magnam temporibus similique voluptate neque eligendi quis, molestiae
          deleniti reprehenderit corporis.
        </p>
      </Modal>
    </div>
  );
};
