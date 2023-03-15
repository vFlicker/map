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

  useEffect(() => {
    const onOutsideClick = (evt: globalThis.MouseEvent) => {
      if (evt.target) {
        const element = evt.target as Element;
        const parentElement = element.closest('#modal-content');

        if (!parentElement) onClose();
      }
    };

    const onEscKeydown = (evt: KeyboardEvent) => {
      if (evt.code === 'Escape') onClose();
    };

    if (modalRef.current) {
      modalRef.current.addEventListener('click', onOutsideClick);
    }

    document.body.addEventListener('keydown', onEscKeydown);

    return () => {
      document.body.removeEventListener('keydown', onEscKeydown);
    };
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
        <section id="modal-module" className={classes.modal} ref={modalRef}>
          <div className={classes.inner}>
            <div>{children}</div>
          </div>
        </section>
      </CSSTransition>
    </ReactPortal>
  );
}
