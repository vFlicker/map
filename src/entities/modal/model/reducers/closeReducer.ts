import { ModalState } from '../../types';

export const closeReducer = (state: ModalState) => {
  state.isOpen = false;
};
