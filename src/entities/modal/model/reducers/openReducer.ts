import { ModalState } from '../../types';

export const openReducer = (state: ModalState) => {
  state.isOpen = true;
};
