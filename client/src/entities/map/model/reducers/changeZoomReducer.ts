import { PayloadAction } from '@reduxjs/toolkit';

import { MapState, Zoom } from '../../types';

export const changeZoomReducer = (
  state: MapState,
  { payload }: PayloadAction<Zoom>,
) => {
  state.zoom = payload;
};
