import { Report } from '../../models/ngrxReport.model';

export interface ListState {
  reportList: Report[];
  targetReport: Report;
  getError: Error;
  deleteError: Error;
}

export const initialListState: ListState = {
  reportList: [],
  targetReport: null,
  getError: null,
  deleteError: null,
};
