import { createSlice } from '@reduxjs/toolkit';

import { ModalState } from '../types';
import { closeModalReducer, openModalReducer } from './reducers';

const initialState: ModalState = {
  isOpen: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    close: closeModalReducer,
    open: openModalReducer,
  },
});

// Actions
export const { close, open } = modalSlice.actions;

// Reducer
export default modalSlice.reducer;

// Selectors
export const selectIsOpen = (state: RootState) => state.MODAL.isOpen;
