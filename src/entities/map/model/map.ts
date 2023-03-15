import { createSlice } from '@reduxjs/toolkit';

import { mapBackgroundX1ImageSrc } from '~/shared/assets';
import { MapState } from '../types';

import { changeImageReducer, changeZoomReducer } from './reducers';

const initialState: MapState = {
  image: mapBackgroundX1ImageSrc,
  zoom: '1',
};

const mapSlice = createSlice({
  name: 'hotels',
  initialState,
  reducers: {
    changeImage: changeImageReducer,
    changeZoom: changeZoomReducer,
  },
});

export const { changeImage, changeZoom } = mapSlice.actions;

export default mapSlice.reducer;

export const selectImage = (state: RootState) => state.MAP.image;
export const selectZoom = (state: RootState) => state.MAP.zoom;
