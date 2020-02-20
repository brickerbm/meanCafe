import { AppState, ListState } from '../state';
import { createSelector } from '@ngrx/store';

export const selectList = (state: AppState) => state.list;

export const selectTargetReport = createSelector(
  selectList,
  (state: ListState) => state.targetReport
);
