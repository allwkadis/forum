import { useCallback, useEffect, useRef, useState } from "react";
import { classNames, useTheme } from "../../../lib";
import { Portal } from "../../Portal";
import cls from "./Modal.module.css";

interface ModalProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose?: () => void;
}

const ANIMATION_DELAY = 300;

export const Modal = ({ children, className, isOpen, onClose }: ModalProps) => {
  const [isClosed, setIsClosed] = useState(false);

  const timeRef = useRef<ReturnType<typeof setTimeout>>();

  const contetClickHandler = (e: React.MouseEvent) => e.stopPropagation();

  const closeHandler = () => {
    if (onClose) {
      setIsClosed(true);
      timeRef.current = setTimeout(() => {
        onClose();
        setIsClosed(false);
      }, ANIMATION_DELAY);
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
      window.addEventListener("keydown", onKeyDown);
    }

    return () => {
      clearTimeout(timeRef.current);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onKeyDown]);


  const {theme } = useTheme()

  return (
    <Portal>
      <div
        className={classNames(
          cls.Modal,
          { [cls.opened]: isOpen, [cls.isClosing]: isClosed },
          [className as string, theme as string]
        )}
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
