import { createAction, props } from '@ngrx/store';
import { Report } from '../../models/ngrxReport.model';

// GET REPORTS
export const getReports = createAction(
  '[List] Get Reports'
);

export const successGetReports = createAction(
  '[List] Success Get Reports',
  props<{ reports: Report[] }>()
);

export const errorGettingReports = createAction(
  '[List] Error Getting Reports',
  props<Error>()
);

// SET SELECTED REPORT
export const setSelectedReport = createAction(
  '[List] Set Selected Report',
  props<{ report: Report }>()
);

// DELETE REPORT
export const deleteReport = createAction(
  '[List] Delete Report',
  props<{ report: Report }>()
);

export const successDeleteReport = createAction(
  '[List] Success Delete Report',
  props<{ report: Report }>()
);

export const errorDeletingReport = createAction(
  '[List] Error Deleting Report',
  props<Error>()
);
