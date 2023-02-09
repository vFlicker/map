export const setupModals = (render) => {
  const modalElement = document.querySelector('#modal-module');
  const openModalElements = document.querySelectorAll('[data-open-modal]');

  const closeModal = () => {
    modalElement.classList.remove('modal--active');

    document.removeEventListener('keydown', onModalEscKeydown);
    modalElement.removeEventListener('mousedown', onModalOutsideMousedown);
  };

  const onModalOutsideMousedown = (event) => {
    if (!event.target.closest('.modal__content')) {
      closeModal();
    }
  };

  const onModalEscKeydown = (event) => {
    if (event.keyCode === 27 || event.code === 'Escape') {
      closeModal();
    }
  };

  const onOpenModalElementClick = (event) => {
    event.preventDefault();

    const moduleId = event.target.dataset.openModal;
    render(moduleId);

    modalElement.classList.add('modal--active');

    document.addEventListener('keydown', onModalEscKeydown);
    modalElement.addEventListener('mousedown', onModalOutsideMousedown);
  };

  for (const openModalElement of openModalElements) {
    openModalElement.addEventListener('click', onOpenModalElementClick);
  }
};
