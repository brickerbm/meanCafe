import { createAction, props } from '@ngrx/store';
import { Report } from '../../models';

// GET REPORTS
export const GetReports = createAction(
  '[List] Get Reports'
);

export const GetReportsSuccess = createAction(
  '[List] Get Reports Success',
  props<{ reportsList: Report[] }>()
);

export const GetReportsFail = createAction(
  '[List] Get Reports Fail',
  props<Error>()
);

// SET SELECTED REPORT
export const SetTargetReport = createAction(
  '[List] Set Target Report',
  props<{ report: Report }>()
);

// DELETE REPORT
export const DeleteReport = createAction(
  '[List] Delete Report',
  props<{ report: Report }>()
);

export const DeleteReportSuccess = createAction(
  '[List] Delete Report Success',
  props<{ report: Report }>()
);

export const DeleteReportFail = createAction(
  '[List] Delete Report Fail',
  props<Error>()
);
