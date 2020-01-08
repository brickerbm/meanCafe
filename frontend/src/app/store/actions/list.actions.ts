import { createAction, props } from '@ngrx/store';
import { Report } from '../../models/ngrxReport.model';

export enum EListActions {
  GetReports = '[List] Get Reports',
  BeginGetReports = '[List] Begin Get Reports',
  SuccessGetReports = '[List] Success Get Reports',
  ErrorGettingReports = '[List] Error Getting Reports',
  SetSelectedReport = '[List] Set Selected Report',
  DeleteReport = '[List] Delete Report',
  BeginDeleteReport = '[List] Begin Delete Report',
  SuccessDeleteReport = '[List] Success Delete Report',
  ErrorDeletingReport = '[List] Error Deleting Report',
}

export const getReports = createAction(
  EListActions.GetReports
);

export const beginGetReports = createAction(
  EListActions.BeginGetReports
);

export const successGetReports = createAction(
  EListActions.SuccessGetReports,
  props<{ payload: Report[] }>()
);

export const errorGettingReports = createAction(
  EListActions.ErrorGettingReports,
  props<Error>()
);

export const setSelectedReport = createAction(
  EListActions.SetSelectedReport,
  props<{ payload: Report }>()
);

export const deleteReport = createAction(
  EListActions.DeleteReport
);

export const beginDeleteReport = createAction(
  EListActions.BeginDeleteReport,
  props<{ payload: string }>()
);

export const successDeleteReport = createAction(
  EListActions.SuccessDeleteReport,
  props<{ payload: string }>()
);

export const errorDeletingReport = createAction(
  EListActions.ErrorDeletingReport,
  props<Error>()
);
