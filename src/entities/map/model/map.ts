import { createSlice } from '@reduxjs/toolkit';

import { mapBackgroundX1ImageSrc } from '~/shared/assets';

import { MapState } from '../types';
import {
  changeActiveRegionReducer,
  changeImageReducer,
  changeZoomReducer,
} from './reducers';

const initialState: MapState = {
  activeRegion: -1,
  image: mapBackgroundX1ImageSrc,
  zoom: '1',
};

const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    changeActiveRegion: changeActiveRegionReducer,
    changeImage: changeImageReducer,
    changeZoom: changeZoomReducer,
  },
});

// Actions
export const { changeActiveRegion, changeImage, changeZoom } = mapSlice.actions;

// Reducer
export default mapSlice.reducer;

// Selectors
export const selectActiveRegion = (state: RootState) => state.MAP.activeRegion;
export const selectImage = (state: RootState) => state.MAP.image;
export const selectZoom = (state: RootState) => state.MAP.zoom;
