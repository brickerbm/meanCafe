import { createSelector } from '@ngrx/store';
import { AppState } from '../state';
import { ListState } from '../state/list.state';

export const selectList = (state: AppState) => state.list;

export const selectReportsList = createSelector(
  selectList,
  (state: ListState) => state.reportList
);

export const selectGetError = createSelector(
  selectList,
  (state: ListState) => state.getError
);

export const selectTargetReport = createSelector(
  selectList,
  (state: ListState) => state.targetReport
);

export const selectDeleteError = createSelector(
  selectList,
  (state: ListState) => state.deleteError
);
