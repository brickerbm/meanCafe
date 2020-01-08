import { Action, createReducer, on } from '@ngrx/store';
import * as ListActions from '../actions/list.actions';
import { initialAppState, AppState } from '../state/app.state';

const listReducer = createReducer(
  initialAppState,
  // Get list of reports
  on(ListActions.getReports, state => state),
  on(ListActions.successGetReports, (state, { payload }) => {
    return { ...state, reports: payload, reportsError: null };
  }),
  on(ListActions.errorGettingReports, (state, error: Error) => {
    console.error(error);
    return { ...state, reportsError: error };
  }),
  // Set selected report
  on(ListActions.setSelectedReport, (state, { payload }) => {
    return { ...state, selectedReport: payload };
  }),
  // Delete report
  on(ListActions.deleteReport, state => state),
  on(ListActions.successDeleteReport, (state, { payload }) => {
    return { ...state, reportDeletionError: null };
  }),
  on(ListActions.errorDeletingReport, (state, error: Error) => {
    console.error(error);
    return { ...state, reportDeletionError: error };
  }),
);

export function reducer(state: AppState | undefined, action: Action): AppState {
  return listReducer(state, action);
}
