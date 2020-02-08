import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromList from './list.reducer';
import * as fromConfig from './config.reducer';
import { AppState } from '../state/index';

export const reducers: ActionReducerMap<AppState> = {
  list: fromList.reducer,
  config: fromConfig.reducer
};
