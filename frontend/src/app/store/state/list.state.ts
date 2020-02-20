import { Report } from '../../models';

export interface ListState {
  reports: Report[];
  targetReport: Report;
  gError: Error;
  dError: Error;
}

export const initialListState: ListState = {
  reports: [],
  targetReport: null,
  gError: null,
  dError: null,
};
