import { PayloadAction } from '@reduxjs/toolkit';

import { MapState } from '../../types';

export const changeImageReducer = (
  state: MapState,
  { payload }: PayloadAction<SrcString>,
) => {
  state.image = payload;
};
