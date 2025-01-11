import { Suspense } from "react";
import { classNames } from "../../../../shared/lib";
import { Modal } from "../../../../shared/ui/Modal";

import { LoginFormAsync } from "../LoginForm/LoginForm.async";
import { Spinner } from "../../../../shared/ui/Spinner";

import cls from "./LoginModal.module.css";

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose?: () => void;
}

export const LoginModal = ({ isOpen, className, onClose }: LoginModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      className={classNames(cls.LoginModal, {}, [className as string])}
      onClose={onClose}
      lazy
    >
      <Suspense fallback={<Spinner />}>
        <LoginFormAsync />
      </Suspense>
    </Modal>
  );
};
