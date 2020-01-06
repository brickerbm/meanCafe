import { RouterReducerState } from '@ngrx/router-store';

import { IConfigState, initialConfigState } from './config.state';
import { IReportState, initialReportState } from './report.state';

export interface IAppState {
  router?: RouterReducerState;
  reports: IReportState;
  config: IConfigState;
}

export const initialAppState: IAppState = {
  reports: initialReportState,
  config: initialConfigState
};

export function getInitialState(): IAppState {
  return initialAppState;
}
