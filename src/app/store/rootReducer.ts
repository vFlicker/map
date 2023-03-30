import { combineReducers } from 'redux';

import { mapReducer } from '~/entities/map';
import { modalReducer } from '~/entities/modal';
import { moduleReducer } from '~/entities/module';

export const rootReducer = combineReducers({
  MAP: mapReducer,
  MODAL: modalReducer,
  MODULE: moduleReducer,
});
