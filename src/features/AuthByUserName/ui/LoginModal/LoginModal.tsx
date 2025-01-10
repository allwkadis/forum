import { classNames } from "../../../../shared/lib";
import { Modal } from "../../../../shared/ui/Modal";
import { LoginForm } from "../LoginForm/LoginForm";

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
      <LoginForm />
    </Modal>
  );
};
