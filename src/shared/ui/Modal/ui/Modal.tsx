import { useCallback, useEffect, useRef, useState } from "react";
import { classNames, useTheme } from "../../../lib";
import { Portal } from "../../Portal";
import cls from "./Modal.module.css";

interface ModalProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose?: () => void;
  lazy: boolean;
}

export const Modal = ({
  children,
  className,
  isOpen,
  onClose,
  lazy,
}: ModalProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const contetClickHandler = (e: React.MouseEvent) => e.stopPropagation();

  const closeHandler = () => {
    if (onClose) {
      onClose();
    }
  };

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeHandler();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", onKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  if(lazy && !isMounted) {
    return null
  }


  return (
    <Portal>
      <div
        className={classNames(cls.Modal, { [cls.opened]: isOpen }, [
          className,
        ])}
      >
        <div className={cls.overlay} onClick={closeHandler}>
          <div className={classNames(cls.content)} onClick={contetClickHandler}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
