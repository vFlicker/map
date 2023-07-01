import { PropsWithChildren, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import { ReactPortal } from '../ReactPortal';
import classes from './Modal.module.css';

type ModalProps = PropsWithChildren<{
  isOpen: boolean;
  onClose: () => void;
}>;

export function Modal({ isOpen, children, onClose }: ModalProps): JSX.Element {
  const modalRef = useRef<HTMLDivElement | null>(null);

  // Close modal if isOpen changed
  useEffect(() => {
    if (isOpen === false) onClose();
  }, [onClose, isOpen]);

  // Close modal on outside click
  useEffect(() => {
    const onOutsideClick = (evt: globalThis.MouseEvent) => {
      if (evt.target) {
        const element = evt.target as Element;
        const parentElement = element.closest('[data-modal-content]');

        if (!parentElement) onClose();
      }
    };

    if (modalRef.current) {
      modalRef.current.addEventListener('click', onOutsideClick);
    }
  }, [onClose]);

  // Close modal on Escape pass
  useEffect(() => {
    const onEscKeydown = (evt: KeyboardEvent) => {
      if (evt.code === 'Escape') onClose();
    };

    document.body.addEventListener('keydown', onEscKeydown);

    return () => document.body.removeEventListener('keydown', onEscKeydown);
  }, [onClose]);

  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <CSSTransition
        in={isOpen}
        timeout={{ exit: 300 }}
        unmountOnExit
        classNames={{ enterDone: classes.enterDone, exit: classes.exit }}
        nodeRef={modalRef}
      >
        <section className={classes.modal} ref={modalRef}>
          <div className={classes.inner}>
            <div className={classes.content}>
              <button className={classes.closeButton} onClick={onClose}>
                <span className="visually-hidden">Close</span>
              </button>
              {children}
            </div>
          </div>
        </section>
      </CSSTransition>
    </ReactPortal>
  );
}
