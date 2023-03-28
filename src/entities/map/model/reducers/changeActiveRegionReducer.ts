import { PayloadAction } from '@reduxjs/toolkit';

import { MapState } from '../../types';

export const changeActiveRegionReducer = (
  state: MapState,
  { payload }: PayloadAction<string>,
) => {
  state.activeRegion = payload;
};
