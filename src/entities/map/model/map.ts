import { createSlice } from '@reduxjs/toolkit';

import { MapState } from '../types';
import { changeActiveRegionReducer } from './reducers';

const initialState: MapState = {
  activeRegion: -1,
};

const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    changeActiveRegion: changeActiveRegionReducer,
  },
});

// Actions
export const { changeActiveRegion } = mapSlice.actions;

// Reducer
export default mapSlice.reducer;

// Selectors
export const selectActiveRegion = (state: RootState) => state.MAP.activeRegion;
