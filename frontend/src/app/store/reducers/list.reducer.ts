import { Action, createReducer, on } from '@ngrx/store';
import * as ListActions from '../actions/list.actions';
import { initialListState, ListState } from '../state/list.state';


const listReducer = createReducer(
  initialListState,
  // Get list of reports
  on(ListActions.getReports, state => state),
  on(ListActions.successGetReports, (state, { reports }) => {
    return { ...state, reportList: reports, reportsError: null };
  }),
  on(ListActions.errorGettingReports, (state, error: Error) => {
    console.error(error);
    return { ...state, getError: error };
  }),
  // Set selected report
  on(ListActions.setSelectedReport, (state, { report }) => {
    return { ...state, targetReport: report };
  }),
  // Delete report
  on(ListActions.deleteReport, state => state),
  on(ListActions.successDeleteReport, (state, { report }) => { // Return new list in response payload
    return { ...state, deleteError: null };
  }),
  on(ListActions.errorDeletingReport, (state, error: Error) => {
    console.error(error);
    return { ...state, deleteError: error };
  }),
);

export function reducer(state: ListState | undefined, action: Action) {
  return listReducer(state, action);
}
