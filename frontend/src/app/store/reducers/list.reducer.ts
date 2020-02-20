import { Action, createReducer, on } from '@ngrx/store';
import * as ListActions from '../actions/list.actions';
import { initialListState, ListState } from '../state/list.state';


const listReducer = createReducer(
  initialListState,
  // Get list of reports
  on(ListActions.GetReports, state => state),
  on(ListActions.GetReportsSuccess, (state, { reportsList }) => {
    return { ...state, reports: reportsList, gError: null };
  }),
  on(ListActions.GetReportsFail, (state, error: Error) => {
    console.error(error);
    return { ...state, gError: error };
  }),
  // Set selected report
  on(ListActions.SetTargetReport, (state, { report }) => {
    return { ...state, targetReport: report };
  }),
  // Delete report
  on(ListActions.DeleteReport, state => state),
  on(ListActions.DeleteReportSuccess, (state, { report }) => { // Return new list in response payload
    return {
      ...state,
      reports: state.reports.filter(val => val !== report),
      dError: null
    };
  }),
  on(ListActions.DeleteReportFail, (state, error: Error) => {
    console.error(error);
    return { ...state, dError: error };
  }),
);

export function reducer(state: ListState | undefined, action: Action) {
  return listReducer(state, action);
}
