import { combineReducers } from 'redux';

import { mapReducer } from '~/entities/map';
import { moduleReducer } from '~/entities/module';

export const rootReducer = combineReducers({
  MAP: mapReducer,
  MODULE: moduleReducer,
});
